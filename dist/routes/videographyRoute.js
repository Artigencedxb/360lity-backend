"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadController_1 = require("../controllers/uploadController");
const videographyController_1 = require("../controllers/videographyController");
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.post("/", authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), videographyController_1.CreateVideography);
router.get("/", videographyController_1.GetAllVideography);
router
    .route("/:id")
    .get(videographyController_1.GetVideography)
    .patch(videographyController_1.EditVideography)
    .delete(authController_1.protectRoute, uploadController_1.deleteImage, videographyController_1.DeleteVideography);
exports.default = router;
//# sourceMappingURL=videographyRoute.js.map