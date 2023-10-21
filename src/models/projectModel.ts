import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    name: {
      type: String,
      required: [true, "Please enter a project name"],
    },
    img: String,
    link: {
      type: String,
      required: [true, "Please enter a 360 video link"],
    },
    description: {
      type: String,
      required: [true, "Please enter a project description"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Project = mongoose.model("Project", projectSchema);
