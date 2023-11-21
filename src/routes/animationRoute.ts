import { deleteImage } from "../controllers/uploadController";
import {
  CreateAnimation,
  DeleteAnimation,
  EditAnimation,
  GetAllAnimation,
  GetAnimation,
} from "../controllers/animationController";
import express from "express";
import { protectRoute, restrictTo } from "../controllers/authController";
const router = express.Router();

router.post("/", protectRoute, restrictTo("admin"), CreateAnimation);
router.get("/", GetAllAnimation);
router
  .route("/:id")
  .get(GetAnimation)
  .patch(EditAnimation)
  .delete(protectRoute, deleteImage, DeleteAnimation);

export default router;
