"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
// import {
//   UpdateUser,
//   getAllUsers,
//   getMe,
//   getUser,
//   getUserStats,
//   updateLoggedUser,
// } from "../controllers/userController";
const router = express_1.default.Router();
// router.get("/stats", getUserStats);
router.post("/register", authController_1.signUp);
router.post("/login", authController_1.login);
// router.patch("/updateMe", updateLoggedUser);
// router.route("/me").get(getMe, getUser);
// router.route("/").get(restrictTo("admin"), getAllUsers);
// router
//   .route("/:id")
//   .get(restrictTo("admin user"), getUser)
//   .patch(restrictTo("admin"), UpdateUser);
// router.route("/updatePassword").post(restrictTo("user"), updatePassword);
exports.default = router;
//# sourceMappingURL=userRoute.js.map