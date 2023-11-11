import { CatchAsync } from "../utils/catchAsync";
import { Blog } from "../models/blogModel";
import {
  CreateOne,
  DeleteOne,
  GetAll,
  GetOne,
  UpdateOne,
} from "./handlerFactory";
import { NextFunction, Request, Response } from "express";

export const DeleteBlogImage = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const blog = await Blog.findById(req.params.id);

    // if (popOptions) query = query.populate(popOptions);

    console.log(blog, "show");

    if (blog?.image?.length) {
      req.body.image = blog?.image;
      req.body.folder = "blogs";
      req.body.imageExists = true;
    }
    next();
  }
);

export const GetAllBlog = GetAll(Blog, "blog");

export const CreateBlog = CreateOne(Blog, "blog");

export const EditBlog = UpdateOne(Blog, "blog");

export const GetBlog = GetOne(Blog, "blog");

export const DeleteBlog = DeleteOne(Blog, "blog");
