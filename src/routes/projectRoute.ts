import {
  CreateProject,
  EditProject,
  GetAllProjects,
} from "../controllers/projectController";
import express from "express";
const router = express.Router();

router.route("/").get(GetAllProjects).post(CreateProject);

router.route(":id").patch(EditProject);

export default router;
