import { CatchAsync } from "../utils/catchAsync";
import { ArVr } from "../models/arVrModel";
import {
  CreateOne,
  DeleteOne,
  GetAll,
  GetOne,
  UpdateOne,
} from "./handlerFactory";
import { NextFunction, Request, Response } from "express";

export const DeleteArVrImage = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const arvr = await ArVr.findById(req.params.id);

    if (arvr?.image?.length) {
      req.body.image = arvr?.image;
      req.body.folder = "ArVr";
      req.body.imageExists = true;
    }
    next();
  }
);

export const GetAllArVr = GetAll(ArVr, "arvr");

export const CreateArVr = CreateOne(ArVr, "arvr");

export const EditArVr = UpdateOne(ArVr, "arvr");

export const GetArVr = GetOne(ArVr, "arvr");

export const DeleteArVr = DeleteOne(ArVr, "arvr");
