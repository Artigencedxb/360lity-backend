import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "..//utils/catchAsync";
import { Project } from "../models/projectModel";
import {
  CreateOne,
  DeleteOne,
  GetAll,
  GetOne,
  UpdateOne,
} from "./handlerFactory";

export const DeleteProjectImage = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const project = await Project.findById(req.params.id);

    // if (popOptions) query = query.populate(popOptions);

    console.log(project, "show");

    if (project?.image?.length) {
      req.body.image = project?.image;
      req.body.folder = "projects";
      req.body.imageExists = true;
    }
    next();
  }
);

// export const changeListOrder = async(req, res) => {
//   const { id, listID, oldIndex, newIndex } = req.body;
//   const doc = await Project.findById(id);

//   let [oldValue, newValue] = [doc.lists[oldIndex], doc.lists[newIndex]];

//   doc.lists.set(oldIndex, newValue);
//   doc.lists.set(newIndex, oldValue);

//   await doc.save();
// };

export const GetAllProjects = GetAll(Project, "project");

export const CreateProject = CreateOne(Project, "project");

export const EditProject = UpdateOne(Project, "project");

export const GetProject = GetOne(Project, "project");

export const DeleteProject = DeleteOne(Project, "project");
