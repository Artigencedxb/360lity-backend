"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = require("../controllers/authController");
const aboutusController_1 = require("../controllers/aboutusController");
const uploadController_1 = require("../controllers/uploadController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route("/").get(aboutusController_1.GetAllAbout).post(aboutusController_1.CreateAbout);
router
    .route("/:id")
    .get(aboutusController_1.GetAbout)
    .patch(authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), aboutusController_1.EditAbout)
    .delete(authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), aboutusController_1.DeleteAboutImage, uploadController_1.deleteImage, aboutusController_1.DeleteAbout);
exports.default = router;
//# sourceMappingURL=aboutRoute.js.map