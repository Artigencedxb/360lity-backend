import { CatchAsync } from "../utils/catchAsync";
import { Photography } from "../models/photographyModel";
import {
  CreateOne,
  DeleteOne,
  GetAll,
  GetOne,
  UpdateOne,
} from "./handlerFactory";
import { NextFunction, Request, Response } from "express";

export const DeletePhotographyImage = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const photography = await Photography.findById(req.params.id);

    // if (popOptions) query = query.populate(popOptions);

    console.log(photography, "show");

    if (photography?.image?.length) {
      req.body.image = photography?.image;
      req.body.folder = "Photography";
      req.body.imageExists = true;
    }
    next();
  }
);

export const GetAllPhotography = GetAll(Photography, "photography");

export const CreatePhotography = CreateOne(Photography, "photography");

export const EditPhotography = UpdateOne(Photography, "photography");

export const GetPhotography = GetOne(Photography, "photography");

export const DeletePhotography = DeleteOne(Photography, "photography");
