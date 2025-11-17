const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");

// Auth middleware (example, replace with your session/auth check)
const requireLogin = (req, res, next) => {
  if (!req.session || !req.session.user.fullName) {
    return res.status(401).json({ message: "Not logged in" });
  }
  next();
};

// ROUTES

// Create a post
router.post("/post", requireLogin, postController.createPost);

// Get all posts (optionally filter by topic or sort)
router.get("/posts", postController.getPosts);

// Like a post
router.post("/posts/:postId/like", requireLogin, postController.likePost);

// Unlike a post
router.post("/posts/:postId/unlike", requireLogin, postController.unlikePost);

// Add comment
router.post("/posts/:postId/comment", requireLogin, postController.commentPost);

module.exports = router;
