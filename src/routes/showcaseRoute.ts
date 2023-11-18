import { deleteImage } from "../controllers/uploadController";
import {
  CreateShowcase,
  DeleteShowcase,
  DeleteShowcaseImage,
  EditShowcase,
  GetAllShowcase,
  GetShowcase,
} from "../controllers/showcaseController";
import express from "express";
import { protectRoute, restrictTo } from "../controllers/authController";
const router = express.Router();

router
  .route("/")
  .get(GetAllShowcase)
  .post(protectRoute, restrictTo("admin"), CreateShowcase);

router
  .route("/:id")
  .get(GetShowcase)
  .patch(protectRoute, restrictTo("admin"), EditShowcase)
  .delete(
    protectRoute,
    restrictTo("admin"),
    DeleteShowcaseImage,
    deleteImage,
    DeleteShowcase
  );

export default router;
