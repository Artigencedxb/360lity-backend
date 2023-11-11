import { NextFunction, Request, Response } from "express";
import { Contact } from "../models/contactModel";
import { CatchAsync } from "../utils/catchAsync";
import { CreateOne, DeleteOne, GetOne, UpdateOne } from "./handlerFactory";

export const DeleteContactImage = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const contact = await Contact.findById(req.params.id);

    console.log(Contact, "show");

    if (contact?.image?.length) {
      req.body.image = contact?.image;
      req.body.folder = "contact";
      req.body.imageExists = true;
    }
    next();
  }
);

export const CreateContact = CreateOne(Contact, "contact");

export const EditContact = UpdateOne(Contact, "contact");

export const GetContact = GetOne(Contact, "contact");

export const DeleteContact = DeleteOne(Contact, "contact");
