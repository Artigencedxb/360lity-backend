import { CatchAsync } from "../utils/catchAsync";
import { Showcase } from "../models/showcaseModel";
import {
  CreateOne,
  DeleteOne,
  GetAll,
  GetOne,
  UpdateOne,
} from "./handlerFactory";
import { NextFunction, Request, Response } from "express";

export const DeleteShowcaseImage = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const showcase = await Showcase.findById(req.params.id);

    console.log(showcase, "show");

    if (showcase?.image?.length) {
      req.body.image = showcase?.image;
      req.body.folder = "showcase";
      req.body.imageExists = true;
    }
    next();
  }
);

export const GetAllShowcase = GetAll(Showcase, "showcase");

export const CreateShowcase = CreateOne(Showcase, "showcase");

export const EditShowcase = UpdateOne(Showcase, "showcase");

export const GetShowcase = GetOne(Showcase, "showcase");

export const DeleteShowcase = DeleteOne(Showcase, "showcase");
