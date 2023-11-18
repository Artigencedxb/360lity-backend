"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xvtController_1 = require("../controllers/xvtController");
const uploadController_1 = require("../controllers/uploadController");
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router
    .route("/")
    .get(xvtController_1.GetAllXvt)
    .post(authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), xvtController_1.CreateXvt);
router
    .route("/:id")
    .get(xvtController_1.GetXvt)
    .patch(authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), xvtController_1.EditXvt)
    .delete(authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), xvtController_1.DeleteXvtImage, uploadController_1.deleteImage, xvtController_1.DeleteXvt);
exports.default = router;
//# sourceMappingURL=xvtRoute.js.map