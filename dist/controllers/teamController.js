"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTeam = exports.GetTeam = exports.EditTeam = exports.CreateTeam = exports.GetAllTeam = exports.DeleteTeamImage = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const handlerFactory_1 = require("./handlerFactory");
const teamModel_1 = require("../models/teamModel");
exports.DeleteTeamImage = (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    const team = await teamModel_1.Team.findById(req.params.id);
    if (team?.image?.length) {
        req.body.image = team?.image;
        req.body.folder = "xvt";
        req.body.imageExists = true;
    }
    next();
});
exports.GetAllTeam = (0, handlerFactory_1.GetAll)(teamModel_1.Team, "team");
exports.CreateTeam = (0, handlerFactory_1.CreateOne)(teamModel_1.Team, "team");
exports.EditTeam = (0, handlerFactory_1.UpdateOne)(teamModel_1.Team, "team");
exports.GetTeam = (0, handlerFactory_1.GetOne)(teamModel_1.Team, "team");
exports.DeleteTeam = (0, handlerFactory_1.DeleteOne)(teamModel_1.Team, "team");
//# sourceMappingURL=teamController.js.map