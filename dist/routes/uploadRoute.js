"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadController_1 = require("../controllers/uploadController");
const router = express_1.default.Router();
router.route("/upload").post(uploadController_1.uploadImage);
router.route("/delete").post(uploadController_1.deleteImage);
exports.default = router;
//# sourceMappingURL=uploadRoute.js.map