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
    description1: {
      type: String,
      required: [true, "Please enter first paragraph description"],
    },
    description2: {
      type: String,
      required: [true, "Please enter second paragraph description"],
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
