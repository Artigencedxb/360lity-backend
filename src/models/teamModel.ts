import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
    trim: true, // exclude the white spaces
  },
  role: {
    type: String,
    required: [true, "Please enter a role"],
  },
  image: String,
  whatsapp: {
    type: String,
  },
  priority: { type: Number },
  instagram: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  tiktok: {
    type: String,
  },
  description: {
    type: String,
    required: [true, "Please enter a contact description"],
  },
});

export const Team = mongoose.model("Team", teamSchema);
