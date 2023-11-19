"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteArVr = exports.GetArVr = exports.EditArVr = exports.CreateArVr = exports.GetAllArVr = exports.DeleteArVrImage = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const arVrModel_1 = require("../models/arVrModel");
const handlerFactory_1 = require("./handlerFactory");
exports.DeleteArVrImage = (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    const arvr = await arVrModel_1.ArVr.findById(req.params.id);
    if (arvr?.image?.length) {
        req.body.image = arvr?.image;
        req.body.folder = "ArVr";
        req.body.imageExists = true;
    }
    next();
});
exports.GetAllArVr = (0, handlerFactory_1.GetAll)(arVrModel_1.ArVr, "arvr");
exports.CreateArVr = (0, handlerFactory_1.CreateOne)(arVrModel_1.ArVr, "arvr");
exports.EditArVr = (0, handlerFactory_1.UpdateOne)(arVrModel_1.ArVr, "arvr");
exports.GetArVr = (0, handlerFactory_1.GetOne)(arVrModel_1.ArVr, "arvr");
exports.DeleteArVr = (0, handlerFactory_1.DeleteOne)(arVrModel_1.ArVr, "arvr");
//# sourceMappingURL=arVrController.js.map