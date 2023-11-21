"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadController_1 = require("../controllers/uploadController");
const animationController_1 = require("../controllers/animationController");
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.post("/", authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), animationController_1.CreateAnimation);
router.get("/", animationController_1.GetAllAnimation);
router
    .route("/:id")
    .get(animationController_1.GetAnimation)
    .patch(animationController_1.EditAnimation)
    .delete(authController_1.protectRoute, uploadController_1.deleteImage, animationController_1.DeleteAnimation);
exports.default = router;
//# sourceMappingURL=animationRoute.js.map