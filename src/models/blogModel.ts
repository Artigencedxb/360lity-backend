import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    title: {
      type: String,
      required: [true, "Please enter a blog title"],
    },
    priority: { type: Number},
    image: String,
    description: {
      type: String,
      required: [true, "Please enter a blog description"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Blog = mongoose.model("Blog", blogSchema);
