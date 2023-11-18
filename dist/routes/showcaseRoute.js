"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadController_1 = require("../controllers/uploadController");
const showcaseController_1 = require("../controllers/showcaseController");
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router
    .route("/")
    .get(showcaseController_1.GetAllShowcase)
    .post(authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), showcaseController_1.CreateShowcase);
router
    .route("/:id")
    .get(showcaseController_1.GetShowcase)
    .patch(authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), showcaseController_1.EditShowcase)
    .delete(authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), showcaseController_1.DeleteShowcaseImage, uploadController_1.deleteImage, showcaseController_1.DeleteShowcase);
exports.default = router;
//# sourceMappingURL=showcaseRoute.js.map