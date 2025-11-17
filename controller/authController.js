const User = require("../models/User");
const bcrypt = require("bcryptjs");

// ----------------------
// REGISTER
// ----------------------
exports.registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      specialties,
      customConditions,
      location,
      university,
      graduation,
      researchGate,
      orcid,
    } = req.body;

    // Check if email already exists
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already registered" });

    // Hash password
    const hashed = await bcrypt.hash(password, 12);

    // Create new user with optional researcher fields
    const user = new User({
      fullName,
      email,
      password: hashed,
      specialties,
      customConditions,
      location,
      university, // optional
      graduation, // optional
      researchGate, // optional
      orcid, // optional
    });

    await user.save();

    // Set session user
    req.session.user = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
    };
    req.session.save((err) => {
      if (err) return res.status(500).json({ message: "Session save failed" });

      res.status(200).json({
        message: "Login successful",
        user: { id: user._id, fullName: user.fullName, email: user.email },
      });
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ----------------------
// LOGIN
// ----------------------
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email not registered" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Wrong password" });

    req.session.user = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
    };
    req.session.save((err) => {
      if (err) return res.status(500).json({ message: "Session save failed" });

      res.status(200).json({
        message: "Login successful",
        user: { id: user._id, fullName: user.fullName, email: user.email },
      });
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ----------------------
// LOGOUT
// ----------------------
exports.logoutUser = (req, res) => {
  if (!req.session)
    return res.status(200).json({ message: "Already logged out" });

  req.session.destroy((err) => {
    if (err) return res.status(500).json({ message: "Logout failed" });
    res.clearCookie("connect.sid"); // match your session cookie name
    res.status(200).json({ message: "Logout successful" });
  });
};

// ----------------------
// GET USER
// ----------------------
exports.getUser = async (req, res) => {
  try {
    if (!req.session || !req.session.user)
      return res.status(401).json({ message: "Not logged in" });

    const user = await User.findById(req.session.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User loaded successfully", user });
  } catch (err) {
    console.error("getUser error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ----------------------
// CHECK EMAIL
// ----------------------
exports.checkEmailExists = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ exists: false });

    const user = await User.findOne({ email });
    res.json({ exists: !!user });
  } catch (err) {
    console.error("checkEmailExists error:", err);
    res.status(500).json({ exists: false });
  }
};

// ----------------------
// UPDATE USER
// ----------------------
exports.updateUser = async (req, res) => {
  try {
    if (!req.session || !req.session.user)
      return res.status(401).json({ message: "Not logged in" });

    const userId = req.session.user.id;
    const {
      fullName,
      email,
      password,
      location,
      specialties,
      customConditions,
      university,
      graduation,
      researchGate,
      orcid,
    } = req.body;

    const updateData = {};
    if (fullName) updateData.fullName = fullName;
    if (location) updateData.location = location;
    if (specialties) updateData.specialties = specialties;
    if (customConditions) updateData.customConditions = customConditions;

    // researcher fields
    if (university !== undefined) updateData.university = university;
    if (graduation !== undefined) updateData.graduation = graduation;
    if (researchGate !== undefined) updateData.researchGate = researchGate;
    if (orcid !== undefined) updateData.orcid = orcid;

    if (email && email !== req.session.user.email) {
      const existing = await User.findOne({ email });
      if (existing)
        return res.status(400).json({ message: "Email already in use" });
      updateData.email = email;
    }

    if (password && password.trim() !== "") {
      const hashed = await bcrypt.hash(password, 12);
      updateData.password = hashed;
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true, runValidators: true }
    ).select("-password");

    // Update session with new email/fullName if changed
    req.session.user.fullName = updatedUser.fullName;
    req.session.user.email = updatedUser.email;
    req.session.save();

    res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Server error" });
  }
};


//Users basic functionality
// controllers/userFeaturesController.js

/* ------------------------------------------
   UNIVERSAL ADD + REMOVE HANDLERS
------------------------------------------- */

// ADD: connectionRequests, followedExperts, favoritePublications,
//      interestedTrials, meetings
exports.addItem = async (req, res) => {
  try {
    const { field } = req.params;
    const data = req.body; // full custom object

    const allowed = [
      "connectionRequests",
      "followedExperts",
      "favoritePublications",
      "interestedTrials",
      "meetings",
    ];

    if (!allowed.includes(field)) {
      return res.status(400).json({ message: "Invalid field." });
    }

    const user = await User.findById(req.session.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user[field].push(data); // 🔥 push whole object
    await user.save();

    res.json({ message: "Added successfully", data: user[field] });
  } catch (err) {
    console.error("addItem error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// REMOVE: by name only
exports.removeItem = async (req, res) => {
  try {
    const { field } = req.params;
    const { id, uid } = req.body; // item _id

    if (!id && !uid)
      return res.status(400).json({ message: "Item ID required" });

    const allowed = [
      "connectionRequests",
      "followedExperts",
      "favoritePublications",
      "interestedTrials",
      "meetings",
    ];

    if (!allowed.includes(field)) {
      return res.status(400).json({ message: "Invalid field." });
    }

    const user = await User.findById(req.session.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // 🔥 remove object whose _id matches
    user[field] = user[field].filter((item) => item.id !== id);

    await user.save();

    res.json({ message: "Removed successfully", data: user[field] });
  } catch (err) {
    console.error("removeItem error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* ------------------------------------------
   SIX SPECIFIC ROUTES FOR EASY FRONTEND USE
------------------------------------------- */

// 1️⃣ Connection Requests
exports.addConnectionRequest = (req, res) =>
  exports.addItem({ ...req, params: { field: "connectionRequests" } }, res);

exports.removeConnectionRequest = (req, res) =>
  exports.removeItem({ ...req, params: { field: "connectionRequests" } }, res);

// 2️⃣ Followed Experts
exports.addExpert = (req, res) =>
  exports.addItem({ ...req, params: { field: "followedExperts" } }, res);

exports.removeExpert = (req, res) =>
  exports.removeItem({ ...req, params: { field: "followedExperts" } }, res);

// 3️⃣ Favorite Publications
exports.addFavPublication = (req, res) =>
  exports.addItem({ ...req, params: { field: "favoritePublications" } }, res);

exports.removeFavPublication = (req, res) =>
  exports.removeItem(
    { ...req, params: { field: "favoritePublications" } },
    res
  );

// 4️⃣ Interested Trials
exports.addInterestedTrial = (req, res) =>
  exports.addItem({ ...req, params: { field: "interestedTrials" } }, res);

exports.removeInterestedTrial = (req, res) =>
  exports.removeItem({ ...req, params: { field: "interestedTrials" } }, res);

// 5️⃣ Meetings
exports.addMeeting = (req, res) =>
  exports.addItem({ ...req, params: { field: "meetings" } }, res);

exports.removeMeeting = (req, res) =>
  exports.removeItem({ ...req, params: { field: "meetings" } }, res);
