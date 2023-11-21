import mongoose from "mongoose";

const photographySchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now(),
    },

    image: String,
    priority: { type: Number},
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Photography = mongoose.model("Photography", photographySchema);
