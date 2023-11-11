import { deleteImage } from "../controllers/uploadController";
import { CreateContact, DeleteContact, DeleteContactImage, EditContact, GetContact } from "../controllers/contactController";
import express from "express";
const router = express.Router();

router.post("/", CreateContact)
router
  .route("/:id")
  .get(GetContact)
  .patch(EditContact)
  .delete(DeleteContactImage, deleteImage, DeleteContact);

export default router;
