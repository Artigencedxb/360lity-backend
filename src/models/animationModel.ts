import mongoose from "mongoose";

const animationSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now(),
    },

    link: String,
    priority: { type: Number },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Animation = mongoose.model("Animation", animationSchema);
