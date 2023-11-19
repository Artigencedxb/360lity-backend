import { deleteImage } from "../controllers/uploadController";
import express from "express";
import { protectRoute, restrictTo } from "../controllers/authController";
import {
  CreateTeam,
  DeleteTeam,
  DeleteTeamImage,
  EditTeam,
  GetAllTeam,
  GetTeam,
} from "../controllers/teamController";
const router = express.Router();

router
  .route("/")
  .get(GetAllTeam)
  .post(protectRoute, restrictTo("admin"), CreateTeam);

router
  .route("/:id")
  .get(GetTeam)
  .patch(protectRoute, restrictTo("admin"), EditTeam)
  .delete(
    protectRoute,
    restrictTo("admin"),
    DeleteTeamImage,
    deleteImage,
    DeleteTeam
  );

export default router;
