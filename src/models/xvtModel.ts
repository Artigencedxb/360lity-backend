import mongoose from "mongoose";

const xvtSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    name: {
      type: String,
      required: [true, "Please enter a xvt name"],
    },
    image: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Xvt = mongoose.model("Xvt", xvtSchema);
