import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now(),
    },

    image: String,
    description: {
      type: String,
      required: [true, "Please enter a blog description"],
    },
    phone: {
      type: String,
      required: [true, "Please enter a contact number"],
    },
    whatsapp: {
      type: String,
      required: [true, "Please enter a whatsapp number"],
    },
    email: {
      type: String,
      required: [true, "Please enter a email address"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Contact = mongoose.model("Contact", contactSchema);
