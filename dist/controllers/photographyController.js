"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePhotography = exports.GetPhotography = exports.EditPhotography = exports.CreatePhotography = exports.GetAllPhotography = exports.DeletePhotographyImage = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const photographyModel_1 = require("../models/photographyModel");
const handlerFactory_1 = require("./handlerFactory");
exports.DeletePhotographyImage = (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    const photography = await photographyModel_1.Photography.findById(req.params.id);
    // if (popOptions) query = query.populate(popOptions);
    console.log(photography, "show");
    if (photography?.image?.length) {
        req.body.image = photography?.image;
        req.body.folder = "Photography";
        req.body.imageExists = true;
    }
    next();
});
exports.GetAllPhotography = (0, handlerFactory_1.GetAll)(photographyModel_1.Photography, "photography");
exports.CreatePhotography = (0, handlerFactory_1.CreateOne)(photographyModel_1.Photography, "photography");
exports.EditPhotography = (0, handlerFactory_1.UpdateOne)(photographyModel_1.Photography, "photography");
exports.GetPhotography = (0, handlerFactory_1.GetOne)(photographyModel_1.Photography, "photography");
exports.DeletePhotography = (0, handlerFactory_1.DeleteOne)(photographyModel_1.Photography, "photography");
//# sourceMappingURL=photographyController.js.map