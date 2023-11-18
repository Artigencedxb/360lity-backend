import { CatchAsync } from "../utils/catchAsync";
import { Xvt } from "../models/xvtModel";
import {
  CreateOne,
  DeleteOne,
  GetAll,
  GetOne,
  UpdateOne,
} from "./handlerFactory";
import { NextFunction, Request, Response } from "express";

export const DeleteXvtImage = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const xvt = await Xvt.findById(req.params.id);

    console.log(Xvt, "show");

    if (xvt?.image?.length) {
      req.body.image = xvt?.image;
      req.body.folder = "xvt";
      req.body.imageExists = true;
    }
    next();
  }
);

export const GetAllXvt = GetAll(Xvt, "xvt");

export const CreateXvt = CreateOne(Xvt, "xvt");

export const EditXvt = UpdateOne(Xvt, "xvt");

export const GetXvt = GetOne(Xvt, "xvt");

export const DeleteXvt = DeleteOne(Xvt, "xvt");
