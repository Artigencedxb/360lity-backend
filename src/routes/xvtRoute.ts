import {
  CreateXvt,
  DeleteXvt,
  DeleteXvtImage,
  EditXvt,
  GetXvt,
  GetAllXvt,
} from "../controllers/xvtController";
import { deleteImage } from "../controllers/uploadController";

import express from "express";
import { protectRoute, restrictTo } from "../controllers/authController";
const router = express.Router();

router
  .route("/")
  .get(GetAllXvt)
  .post(protectRoute, restrictTo("admin"), CreateXvt);

router
  .route("/:id")
  .get(GetXvt)
  .patch(protectRoute, restrictTo("admin"), EditXvt)
  .delete(
    protectRoute,
    restrictTo("admin"),
    DeleteXvtImage,
    deleteImage,
    DeleteXvt
  );

export default router;
