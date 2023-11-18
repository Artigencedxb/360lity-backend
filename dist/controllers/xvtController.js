"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteXvt = exports.GetXvt = exports.EditXvt = exports.CreateXvt = exports.GetAllXvt = exports.DeleteXvtImage = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const xvtModel_1 = require("../models/xvtModel");
const handlerFactory_1 = require("./handlerFactory");
exports.DeleteXvtImage = (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    const xvt = await xvtModel_1.Xvt.findById(req.params.id);
    console.log(xvtModel_1.Xvt, "show");
    if (xvt?.image?.length) {
        req.body.image = xvt?.image;
        req.body.folder = "xvt";
        req.body.imageExists = true;
    }
    next();
});
exports.GetAllXvt = (0, handlerFactory_1.GetAll)(xvtModel_1.Xvt, "xvt");
exports.CreateXvt = (0, handlerFactory_1.CreateOne)(xvtModel_1.Xvt, "xvt");
exports.EditXvt = (0, handlerFactory_1.UpdateOne)(xvtModel_1.Xvt, "xvt");
exports.GetXvt = (0, handlerFactory_1.GetOne)(xvtModel_1.Xvt, "xvt");
exports.DeleteXvt = (0, handlerFactory_1.DeleteOne)(xvtModel_1.Xvt, "xvt");
//# sourceMappingURL=xvtController.js.map