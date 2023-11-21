import { CatchAsync } from "../utils/catchAsync";
import { Videography } from "../models/videographyModel";
import {
  CreateOne,
  DeleteOne,
  GetAll,
  GetOne,
  UpdateOne,
} from "./handlerFactory";
import { NextFunction, Request, Response } from "express";

export const GetAllVideography = GetAll(Videography, "videography");

export const CreateVideography = CreateOne(Videography, "videography");

export const EditVideography = UpdateOne(Videography, "videography");

export const GetVideography = GetOne(Videography, "videography");

export const DeleteVideography = DeleteOne(Videography, "videography");
