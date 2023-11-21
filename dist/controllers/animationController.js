"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAnimation = exports.GetAnimation = exports.EditAnimation = exports.CreateAnimation = exports.GetAllAnimation = void 0;
const animationModel_1 = require("../models/animationModel");
const handlerFactory_1 = require("./handlerFactory");
exports.GetAllAnimation = (0, handlerFactory_1.GetAll)(animationModel_1.Animation, "animation");
exports.CreateAnimation = (0, handlerFactory_1.CreateOne)(animationModel_1.Animation, "animation");
exports.EditAnimation = (0, handlerFactory_1.UpdateOne)(animationModel_1.Animation, "animation");
exports.GetAnimation = (0, handlerFactory_1.GetOne)(animationModel_1.Animation, "animation");
exports.DeleteAnimation = (0, handlerFactory_1.DeleteOne)(animationModel_1.Animation, "animation");
//# sourceMappingURL=animationController.js.map