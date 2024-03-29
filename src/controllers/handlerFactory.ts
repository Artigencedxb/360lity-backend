import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";
import { AppError } from "../utils/appError";
import { CatchAsync } from "../utils/catchAsync";
import { APIFeatures } from "../utils/apiFeatures";

export const DeleteOne = (Model: Model<any>, type: string) =>
  CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("No current doc found with this id", 404));
    }

    res.status(204).json({
      status: "success",
      message: `${type} deleted`,
      data: null,
    });
  });

export const UpdateOne = (Model: Model<any>, type: string) =>
  CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // if (req.user!.role === "admin" && req.body.password) {
    //   return next(new AppError("You cannot update a user password!", 401));
    // }

    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError("No current doc found with this id", 404));
    }

    res.status(200).json({
      status: "success",
      message: `${type} updated`,
      data: {
        [type]: doc,
      },
    });
  });

export const CreateOne = (
  Model: Model<any>,
  type: string,
  popOptions?: { path: string; select?: string }
) =>
  CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    let doc = await Model.create(req.body);
    console.log(req.body, "body");
    
    if (popOptions) doc = await doc.populate(popOptions);
    // doc.populate("size category");
    // if (!doc) {
    //   return next(new AppError("No current doc found with this id", 404));
    // }

    res.status(201).json({
      status: "success",
      message: `new ${type} created`,
      data: {
        [type]: doc,
      },
    });
  });

export const GetOne = (
  Model: Model<any>,
  type: string,
  popOptions?: { path: string; select?: string }
) =>
  CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    let query = Model.findById(req.params.id);

    // if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    if (!doc) {
      return next(new AppError(`No current ${type} found with this id`, 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        [type]: doc,
      },
    });
  });

export const GetAll = (Model: Model<any>, type: string, searchKey?: string) =>
  CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    let filter = {};

    // if (req.params.productId) filter = { product: req.params.productId };
    // if (req.params?.userId) filter = { user: req.params.userId };

    let features = new APIFeatures(Model.find(filter), req.query, searchKey)
      .search()
      .sort()
      .pagination()
      .filter()
      .limitFields();

    const doc = await features.query;

    if (!doc) {
      return next(new AppError(`No current ${type} found with this id`, 404));
    }

    let totalData = await Model.find().count();
    let totalPage = Math.ceil(totalData / Number(req.query.limit));

    res.status(200).json({
      status: "success",
      result: doc?.length,
      ...(req.query.page && {
        pagination: {
          page: Number(req.query.page),
          totalData,
          totalPage,
          limit: Number(req.query.limit),
        },
      }),
      data: {
        [type]: doc,
      },
    });
  });
