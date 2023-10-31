"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadController_1 = require("../controllers/uploadController");
const projectController_1 = require("../controllers/projectController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route("/").get(projectController_1.GetAllProjects).post(projectController_1.CreateProject);
router
    .route("/:id")
    .get(projectController_1.GetProject)
    .patch(projectController_1.EditProject)
    .delete(projectController_1.DeleteProjectImage, uploadController_1.deleteImage, projectController_1.DeleteProject);
exports.default = router;
//# sourceMappingURL=projectRoute.js.map