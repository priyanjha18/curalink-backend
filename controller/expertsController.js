// backend/controllers/expertsController.js
const dummyExperts = require("../util/medicalExperts");
const User = require("../models/User");

/**
 * POST /experts
 * body: {
 *   query: string,
 *   location: string,
 *   page: number
 * }
 * Uses session to get logged-in user email
 */
exports.findExpertsForUser = async (req, res) => {
  try {
    // Get email from session
    const email = req.session?.user?.email;
    if (!email) return res.status(401).json({ error: "User not authenticated." });

    const { query = "", location = "", page = 1 } = req.body;

    // Fetch user data
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found." });

    const userSpecialties = user.specialties || [];
    const normalizedSpecs = userSpecialties.map((s) => s.toLowerCase());

    const lowerQuery = query.toLowerCase();
    const lowerLocation = location.toLowerCase();

    // Score all experts
    const scoredExperts = dummyExperts
      .map((expert) => {
        const matchedSpecs = expert.specialties.filter((spec) =>
          normalizedSpecs.includes(spec.toLowerCase())
        );
        const score = normalizedSpecs.length
          ? Math.round((matchedSpecs.length / normalizedSpecs.length) * 100)
          : 0;

        const matchesQuery =
          !query ||
          expert.name.toLowerCase().includes(lowerQuery) ||
          expert.researchInterests.some((i) => i.toLowerCase().includes(lowerQuery));

        const matchesLocation =
          !location || expert.location.toLowerCase().includes(lowerLocation);

        // Include everyone, just score them
        if (matchesQuery && matchesLocation) {
          return { ...expert, score, matches: matchedSpecs.length };
        }
        return null;
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score); // higher score first

    // Pagination
    const perPage = 10;
    const start = (page - 1) * perPage;
    const paginated = scoredExperts.slice(start, start + perPage);
    const hasMore = start + perPage < scoredExperts.length;

    res.json({
      userSpecialties,
      page,
      results: paginated,
      hasMore,
      nextPage: hasMore ? page + 1 : null,
      totalResults: scoredExperts.length,
    });
  } catch (err) {
    console.error("Error scoring experts:", err);
    res.status(500).json({ error: "Server messed up homie." });
  }
};
