"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAbout = exports.GetAbout = exports.EditAbout = exports.CreateAbout = exports.GetAllAbout = exports.DeleteAboutImage = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const aboutModel_1 = require("../models/aboutModel");
const handlerFactory_1 = require("./handlerFactory");
exports.DeleteAboutImage = (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    const about = await aboutModel_1.About.findById(req.params.id);
    console.log(aboutModel_1.About, "show");
    if (about?.image?.length) {
        req.body.image = about?.image;
        req.body.folder = "about";
        req.body.imageExists = true;
    }
    next();
});
exports.GetAllAbout = (0, handlerFactory_1.GetAll)(aboutModel_1.About, "about");
exports.CreateAbout = (0, handlerFactory_1.CreateOne)(aboutModel_1.About, "about");
exports.EditAbout = (0, handlerFactory_1.UpdateOne)(aboutModel_1.About, "about");
exports.GetAbout = (0, handlerFactory_1.GetOne)(aboutModel_1.About, "about");
exports.DeleteAbout = (0, handlerFactory_1.DeleteOne)(aboutModel_1.About, "about");
//# sourceMappingURL=aboutusController.js.map