import {
  CreateArVr,
  DeleteArVr,
  DeleteArVrImage,
  EditArVr,
  GetAllArVr,
  GetArVr,
} from "../controllers/arVrController";
import { deleteImage } from "../controllers/uploadController";

import express from "express";
import { protectRoute, restrictTo } from "../controllers/authController";
const router = express.Router();

router.route("/").get(GetAllArVr).post(CreateArVr);

router
  .route("/:id")
  .get(GetArVr)
  .patch(protectRoute, restrictTo("admin"), EditArVr)
  .delete(
    protectRoute,
    restrictTo("admin"),
    DeleteArVrImage,
    deleteImage,
    DeleteArVr
  );

export default router;
