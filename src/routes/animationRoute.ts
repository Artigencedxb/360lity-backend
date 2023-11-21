import { deleteImage } from "../controllers/uploadController";
import {
  CreateAnimation,
  DeleteAnimation,
  EditAnimation,
  GetAnimation,
} from "../controllers/animationController";
import express from "express";
import { protectRoute, restrictTo } from "../controllers/authController";
const router = express.Router();

router.post("/", protectRoute, restrictTo("admin"), CreateAnimation);
router
  .route("/:id")
  .get(GetAnimation)
  .patch(EditAnimation)
  .delete(protectRoute, deleteImage, DeleteAnimation);

export default router;
