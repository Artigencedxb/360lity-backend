import { deleteImage } from "../controllers/uploadController";
import {
  CreateProject,
  DeleteProject,
  DeleteProjectImage,
  EditProject,
  GetAllProjects,
  GetProject,
} from "../controllers/projectController";
import express from "express";
import { protectRoute, restrictTo } from "../controllers/authController";
const router = express.Router();

router
  .route("/")
  .get(GetAllProjects)
  .post(protectRoute, restrictTo("admin"), CreateProject);

router
  .route("/:id")
  .get(GetProject)
  .patch(protectRoute, restrictTo("admin"), EditProject)
  .delete(
    protectRoute,
    restrictTo("admin"),
    DeleteProjectImage,
    deleteImage,
    DeleteProject
  );

export default router;
