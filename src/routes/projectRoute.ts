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
const router = express.Router();

router.route("/").get(GetAllProjects).post(CreateProject);

router
  .route("/:id")
  .get(GetProject)
  .patch(EditProject)
  .delete(DeleteProjectImage, deleteImage, DeleteProject);

export default router;
