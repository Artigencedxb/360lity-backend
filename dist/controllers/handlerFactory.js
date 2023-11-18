"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAll = exports.GetOne = exports.CreateOne = exports.UpdateOne = exports.DeleteOne = void 0;
const appError_1 = require("../utils/appError");
const catchAsync_1 = require("../utils/catchAsync");
const apiFeatures_1 = require("../utils/apiFeatures");
const DeleteOne = (Model, type) => (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
        return next(new appError_1.AppError("No current doc found with this id", 404));
    }
    res.status(204).json({
        status: "success",
        message: `${type} deleted`,
        data: null,
    });
});
exports.DeleteOne = DeleteOne;
const UpdateOne = (Model, type) => (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    // if (req.user!.role === "admin" && req.body.password) {
    //   return next(new AppError("You cannot update a user password!", 401));
    // }
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!doc) {
        return next(new appError_1.AppError("No current doc found with this id", 404));
    }
    res.status(200).json({
        status: "success",
        message: `${type} updated`,
        data: {
            [type]: doc,
        },
    });
});
exports.UpdateOne = UpdateOne;
const CreateOne = (Model, type, popOptions) => (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    let doc = await Model.create(req.body);
    console.log(req.body, "body");
    if (popOptions)
        doc = await doc.populate(popOptions);
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
exports.CreateOne = CreateOne;
const GetOne = (Model, type, popOptions) => (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    // if (popOptions) query = query.populate(popOptions);
    const doc = await query;
    if (!doc) {
        return next(new appError_1.AppError(`No current ${type} found with this id`, 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            [type]: doc,
        },
    });
});
exports.GetOne = GetOne;
const GetAll = (Model, type, searchKey) => (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    let filter = {};
    // if (req.params.productId) filter = { product: req.params.productId };
    // if (req.params?.userId) filter = { user: req.params.userId };
    let features = new apiFeatures_1.APIFeatures(Model.find(filter), req.query, searchKey)
        .search()
        .sort()
        .pagination()
        .filter()
        .limitFields();
    const doc = await features.query;
    if (!doc) {
        return next(new appError_1.AppError(`No current ${type} found with this id`, 404));
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
exports.GetAll = GetAll;
//# sourceMappingURL=handlerFactory.js.map