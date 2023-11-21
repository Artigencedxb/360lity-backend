"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVideography = exports.GetVideography = exports.EditVideography = exports.CreateVideography = exports.GetAllVideography = void 0;
const videographyModel_1 = require("../models/videographyModel");
const handlerFactory_1 = require("./handlerFactory");
exports.GetAllVideography = (0, handlerFactory_1.GetAll)(videographyModel_1.Videography, "videography");
exports.CreateVideography = (0, handlerFactory_1.CreateOne)(videographyModel_1.Videography, "videography");
exports.EditVideography = (0, handlerFactory_1.UpdateOne)(videographyModel_1.Videography, "videography");
exports.GetVideography = (0, handlerFactory_1.GetOne)(videographyModel_1.Videography, "videography");
exports.DeleteVideography = (0, handlerFactory_1.DeleteOne)(videographyModel_1.Videography, "videography");
//# sourceMappingURL=videographyController.js.map