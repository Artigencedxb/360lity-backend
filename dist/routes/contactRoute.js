"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadController_1 = require("../controllers/uploadController");
const contactController_1 = require("../controllers/contactController");
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.post("/", contactController_1.CreateContact);
router
    .route("/:id")
    .get(contactController_1.GetContact)
    .patch(contactController_1.EditContact)
    .delete(authController_1.protectRoute, contactController_1.DeleteContactImage, uploadController_1.deleteImage, contactController_1.DeleteContact);
exports.default = router;
//# sourceMappingURL=contactRoute.js.map