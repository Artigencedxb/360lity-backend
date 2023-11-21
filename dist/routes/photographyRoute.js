"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadController_1 = require("../controllers/uploadController");
const photographyController_1 = require("../controllers/photographyController");
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.post("/", authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), photographyController_1.CreatePhotography);
router.get("/", photographyController_1.GetAllPhotography);
router
    .route("/:id")
    .get(photographyController_1.GetPhotography)
    .patch(photographyController_1.EditPhotography)
    .delete(authController_1.protectRoute, photographyController_1.DeletePhotographyImage, uploadController_1.deleteImage, photographyController_1.DeletePhotography);
exports.default = router;
//# sourceMappingURL=photographyRoute.js.map