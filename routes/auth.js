const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
// const auth = require("../middleware/authMiddleware"); // Uncomment if needed

// =========================
// AUTH ROUTES
// =========================
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);
router.get("/info", authController.getUser);
router.get("/check-email", authController.checkEmailExists);
router.put("/update", authController.updateUser);

// =========================
// CONNECTION REQUESTS
// =========================
router.post("/add/connection", authController.addConnectionRequest);
router.post("/remove/connection", authController.removeConnectionRequest);

// =========================
// FOLLOWED EXPERTS
// =========================
router.post("/add/expert", authController.addExpert);
router.post("/remove/expert", authController.removeExpert);

// =========================
// FAVORITE PUBLICATIONS
// =========================
router.post("/add/publication", authController.addFavPublication);
router.post("/remove/publication", authController.removeFavPublication);

// =========================
// INTERESTED TRIALS
// =========================
router.post("/add/trial", authController.addInterestedTrial);
router.post("/remove/trial", authController.removeInterestedTrial);

// =========================
// MEETINGS
// =========================
router.post("/add/meeting", authController.addMeeting);
router.post("/remove/meeting", authController.removeMeeting);

module.exports = router;
