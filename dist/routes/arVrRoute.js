"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arVrController_1 = require("../controllers/arVrController");
const uploadController_1 = require("../controllers/uploadController");
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.route("/").get(arVrController_1.GetAllArVr).post(arVrController_1.CreateArVr);
router
    .route("/:id")
    .get(arVrController_1.GetArVr)
    .patch(authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), arVrController_1.EditArVr)
    .delete(authController_1.protectRoute, (0, authController_1.restrictTo)("admin"), arVrController_1.DeleteArVrImage, uploadController_1.deleteImage, arVrController_1.DeleteArVr);
exports.default = router;
//# sourceMappingURL=arVrRoute.js.map