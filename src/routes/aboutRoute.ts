import { protectRoute, restrictTo } from "../controllers/authController";
import {
  CreateAbout,
  DeleteAbout,
  DeleteAboutImage,
  EditAbout,
  GetAbout,
  GetAllAbout,
} from "../controllers/aboutusController";
import { deleteImage } from "../controllers/uploadController";

import express from "express";
const router = express.Router();

router.route("/").get(GetAllAbout).post(CreateAbout);

router
  .route("/:id")
  .get(GetAbout)
  .patch(protectRoute, restrictTo("admin"), EditAbout)
  .delete(
    protectRoute,
    restrictTo("admin"),
    DeleteAboutImage,
    deleteImage,
    DeleteAbout
  );

export default router;
