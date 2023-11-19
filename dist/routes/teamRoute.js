"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadController_1 = require("../controllers/uploadController");
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const teamController_1 = require("../controllers/teamController");
const router = express_1.default.Router();
router
    .route("/")
    .get(teamController_1.GetAllTeam)
    .post(authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), teamController_1.CreateTeam);
router
    .route("/:id")
    .get(teamController_1.GetTeam)
    .patch(authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), teamController_1.EditTeam)
    .delete(authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), teamController_1.DeleteTeamImage, uploadController_1.deleteImage, teamController_1.DeleteTeam);
exports.default = router;
//# sourceMappingURL=teamRoute.js.map