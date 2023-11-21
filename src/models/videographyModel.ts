import mongoose from "mongoose";

const videographySchema = new mongoose.Schema(
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

export const Videography = mongoose.model("Videography", videographySchema);
