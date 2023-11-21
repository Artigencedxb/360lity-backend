import { CatchAsync } from "../utils/catchAsync";
import { Animation } from "../models/animationModel";
import {
  CreateOne,
  DeleteOne,
  GetAll,
  GetOne,
  UpdateOne,
} from "./handlerFactory";
import { NextFunction, Request, Response } from "express";

export const GetAllAnimation = GetAll(Animation, "animation");

export const CreateAnimation = CreateOne(Animation, "animation");

export const EditAnimation = UpdateOne(Animation, "animation");

export const GetAnimation = GetOne(Animation, "animation");

export const DeleteAnimation = DeleteOne(Animation, "animation");
