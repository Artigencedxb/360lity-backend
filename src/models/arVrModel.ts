import mongoose from "mongoose";

const arvrSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    image: String,
    descImage1: String,
    descImage2: String,
    description: {
      type: String,
      required: [true, "Please enter a blog description"],
    },

    title: {
      type: String,
      required: [true, "Please enter a title"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const ArVr = mongoose.model("ArVr", arvrSchema);
