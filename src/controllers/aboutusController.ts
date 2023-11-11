import { CatchAsync } from "../utils/catchAsync";
import { About } from "../models/aboutModel";
import {
  CreateOne,
  DeleteOne,
  GetAll,
  GetOne,
  UpdateOne,
} from "./handlerFactory";
import { NextFunction, Request, Response } from "express";

export const DeleteAboutImage = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const about = await About.findById(req.params.id);

    console.log(About, "show");

    if (about?.image?.length) {
      req.body.image = about?.image;
      req.body.folder = "about";
      req.body.imageExists = true;
    }
    next();
  }
);

export const GetAllAbout = GetAll(About, "about");

export const CreateAbout = CreateOne(About, "about");

export const EditAbout = UpdateOne(About, "about");

export const GetAbout = GetOne(About, "about");

export const DeleteAbout = DeleteOne(About, "about");
