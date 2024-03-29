import { deleteImage } from "../controllers/uploadController";
import {
  CreateContact,
  DeleteContact,
  DeleteContactImage,
  EditContact,
  GetContact,
} from "../controllers/contactController";
import express from "express";
import { protectRoute, restrictTo } from "../controllers/authController";
const router = express.Router();

router.post("/", CreateContact);
router
  .route("/:id")
  .get(GetContact)
  .patch(protectRoute, restrictTo("admin"), EditContact)
  .delete(protectRoute, DeleteContactImage, deleteImage, DeleteContact);

export default router;
