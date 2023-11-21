import { deleteImage } from "../controllers/uploadController";
import {
  CreatePhotography,
  DeletePhotography,
  DeletePhotographyImage,
  EditPhotography,
  GetPhotography,
} from "../controllers/photographyController";
import express from "express";
import { protectRoute, restrictTo } from "../controllers/authController";
const router = express.Router();

router.post("/", protectRoute, restrictTo("admin"), CreatePhotography);
router
  .route("/:id")
  .get(GetPhotography)
  .patch(EditPhotography)
  .delete(protectRoute, DeletePhotographyImage, deleteImage, DeletePhotography);

export default router;
