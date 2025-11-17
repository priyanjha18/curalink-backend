// backend/controllers/trialController.js
const axios = require("axios");
const User = require("../models/User");

exports.getTrials = async (req, res) => {
  try {
    if (!req.session || !req.session.user) {
      return res.status(401).json({ message: "Not logged in" });
    }

    const userId = req.session.user.id;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const {
      search = "",
      status = "all",
      phase = "",
      location = "",
      pageToken = null,
      pageSize = 10,
    } = req.query;

    // Combine user keyword + phase as the search term
    let keyword = search || user.customConditions?.[0] || user.specialties?.[0];
    if (phase) keyword += ` ${phase}`; // append phase here
    if (!keyword) return res.status(400).json({ message: "No search or user condition found" });

    // Build API URL
    let apiUrl = `https://clinicaltrials.gov/api/v2/studies?query.term=${encodeURIComponent(keyword)}&pageSize=${pageSize}`;
    if (pageToken) apiUrl += `&pageToken=${pageToken}`;
    if (location) apiUrl += `&query.locn=${encodeURIComponent(location)}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    const formatted =
      (data.studies || []).map((study) => ({
        uid: study.protocolSection?.identificationModule?.nctId || "N/A",
        title: study.protocolSection?.identificationModule?.briefTitle || "Untitled",
        status: study.protocolSection?.statusModule?.overallStatus || "Unknown",
        condition: study.protocolSection?.conditionsModule?.conditions?.[0] || "Not specified",
        description: study.protocolSection?.descriptionModule?.briefSummary || "No description available",
        eligibility: study.protocolSection?.eligibilityModule?.eligibilityCriteria || "Not listed",
        location:
          study.protocolSection?.contactsLocationsModule?.locations?.[0]?.facility?.address?.city ||
          study.protocolSection?.contactsLocationsModule?.locations?.[0]?.facility?.address?.state ||
          study.protocolSection?.contactsLocationsModule?.locations?.[0]?.facility?.name ||
          study.protocolSection?.contactsLocationsModule?.locations?.[0]?.city ||
          "N/A",
        startDate: study.protocolSection?.statusModule?.startDateStruct?.date || "N/A",
        organizer: study.protocolSection?.sponsorCollaboratorsModule?.leadSponsor?.name || "Unknown",
        contactEmail:
          study.protocolSection?.contactsLocationsModule?.centralContacts?.[0]?.email ||
          study.protocolSection?.contactsLocationsModule?.overallOfficial?.[0]?.email ||
          study.protocolSection?.contactsLocationsModule?.locations?.[0]?.contacts?.email ||
          "Not provided",
      }));

    // Filter by recruitment status
    const filtered = status === "all"
      ? formatted
      : formatted.filter((t) =>
          t.status.toLowerCase().includes(status.toLowerCase())
        );

    res.status(200).json({
      trials: filtered,
      total: data.totalRecords || filtered.length,
      pageToken: data.nextPageToken || null,
      pageSize: Number(pageSize),
      hasMore: !!data.nextPageToken,
    });
  } catch (err) {
    console.error("getTrials error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
