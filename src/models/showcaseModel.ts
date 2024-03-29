import mongoose from "mongoose";

const showcaseSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    name: {
      type: String,
      required: [true, "Please enter a showcase name"],
    },
    image: String,
    link: {
      type: String,
      required: [true, "Please enter a 360 video link"],
    },
    priority: { type: Number },
    description: {
      type: String,
      required: [true, "Please enter a showcase description"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Showcase = mongoose.model("Showcase", showcaseSchema);
