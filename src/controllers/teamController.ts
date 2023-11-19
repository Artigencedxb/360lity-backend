import { CatchAsync } from "../utils/catchAsync";
import {
  CreateOne,
  DeleteOne,
  GetAll,
  GetOne,
  UpdateOne,
} from "./handlerFactory";
import { NextFunction, Request, Response } from "express";
import { Team } from "../models/teamModel";

export const DeleteTeamImage = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const team = await Team.findById(req.params.id);

    if (team?.image?.length) {
      req.body.image = team?.image;
      req.body.folder = "xvt";
      req.body.imageExists = true;
    }
    next();
  }
);

export const GetAllTeam = GetAll(Team, "team");

export const CreateTeam = CreateOne(Team, "team");

export const EditTeam = UpdateOne(Team, "team");

export const GetTeam = GetOne(Team, "team");

export const DeleteTeam = DeleteOne(Team, "team");
