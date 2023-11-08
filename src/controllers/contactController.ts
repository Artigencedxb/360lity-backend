import { NextFunction, Request, Response } from "express";
import { Contact } from "../models/contactModel";
import { CatchAsync } from "../utils/catchAsync";
import { DeleteOne, GetOne, UpdateOne } from "./handlerFactory";

export const DeleteContactImage = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const contact = await Contact.findById(req.params.id);

    console.log(Contact, "show");

    if (contact?.image?.length) {
      req.body.image = contact?.image;
      req.body.folder = "Contact";
      req.body.imageExists = true;
    }
    next();
  }
);

export const EditContact = UpdateOne(Contact, "Contact");

export const GetContact = GetOne(Contact, "Contact");

export const DeleteContact = DeleteOne(Contact, "Contact");
