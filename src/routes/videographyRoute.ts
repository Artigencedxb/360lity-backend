import { deleteImage } from "../controllers/uploadController";
import {
  CreateVideography,
  DeleteVideography,
  EditVideography,
  GetVideography,
} from "../controllers/videographyController";
import express from "express";
import { protectRoute, restrictTo } from "../controllers/authController";
const router = express.Router();

router.post("/", protectRoute, restrictTo("admin"), CreateVideography);
router
  .route("/:id")
  .get(GetVideography)
  .patch(EditVideography)
  .delete(protectRoute, deleteImage, DeleteVideography);

export default router;
