import { Project } from "../models/projectModel";
import { CreateOne, GetAll, GetOne, UpdateOne } from "./handlerFactory";

export const GetAllProjects = GetAll(Project, "project");

export const CreateProject = CreateOne(Project, "project");

export const EditProject = UpdateOne(Project, "project");

export const GetProject = GetOne(Project, "project");
