const Post = require("../models/Post");

// CREATE A POST
exports.createPost = async (req, res) => {
  try {
    const { title, question, topic } = req.body;
    const createdBy = req.session.user.fullName; // session-based user name

    if (!createdBy) return res.status(401).json({ message: "Not logged in" });
    if (!title || !question) return res.status(400).json({ message: "Title and question required" });

    const post = await Post.create({ title, question, topic, createdBy });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Failed to create post", error: err.message });
  }
};

// GET ALL POSTS with filters
exports.getPosts = async (req, res) => {
  try {
    const { sort, topic } = req.query;
    let filter = {};
    if (topic) filter.topic = topic;

    let postsQuery = Post.find(filter);

    // Sorting
    if (sort === "new") postsQuery = postsQuery.sort({ createdAt: -1 });
    else if (sort === "old") postsQuery = postsQuery.sort({ createdAt: 1 });
    else if (sort === "mostLiked") postsQuery = postsQuery.sort({ likes: -1 });

    const posts = await postsQuery.exec();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Failed to get posts", error: err.message });
  }
};

// LIKE A POST
exports.likePost = async (req, res) => {
  try {
    const name = req.session.user.fullName;
    if (!name) return res.status(401).json({ message: "Not logged in" });

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (!post.likes.includes(name)) {
      post.likes.push(name);
      await post.save();
    }

    res.json({ message: "Post liked", likeCount: post.likes.length });
  } catch (err) {
    res.status(500).json({ message: "Failed to like post", error: err.message });
  }
};

// UNLIKE A POST
exports.unlikePost = async (req, res) => {
  try {
    const name = req.session.user.fullName;
    if (!name) return res.status(401).json({ message: "Not logged in" });

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.likes = post.likes.filter(user => user !== name);
    await post.save();

    res.json({ message: "Post unliked", likeCount: post.likes.length });
  } catch (err) {
    res.status(500).json({ message: "Failed to unlike post", error: err.message });
  }
};

// ADD COMMENT
exports.commentPost = async (req, res) => {
  try {
    const name = req.session.user.fullName;
    const { text } = req.body;

    if (!name) return res.status(401).json({ message: "Not logged in" });
    if (!text) return res.status(400).json({ message: "Comment text required" });

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.comments.push({ name, text });
    await post.save();

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Failed to comment", error: err.message });
  }
};
