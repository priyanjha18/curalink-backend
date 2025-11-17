const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Comment schema
const CommentSchema = new Schema({
  name: { type: String, required: true }, // commenter name
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Forum Post schema
const PostSchema = new Schema({
  title: { type: String, required: true },
  question: { type: String, required: true },
  topic: { 
    type: String, 
    enum: [
      "Patient Experience", 
      "Clinical Question", 
      "Treatment Discussion", 
      "Medical Research", 
      "Case Study", 
      "Other"
    ],
    default: "Other" 
  },
  likes: [{ type: String }], // array of names who liked
  comments: [CommentSchema],
  createdBy: { type: String, required: true }, // session-based name
  createdAt: { type: Date, default: Date.now }
});

// Virtual for like count
PostSchema.virtual("likeCount").get(function () {
  return this.likes.length;
});

// Ensure virtuals show up in JSON
PostSchema.set("toJSON", { virtuals: true });
PostSchema.set("toObject", { virtuals: true });

module.exports = model("Post", PostSchema);
