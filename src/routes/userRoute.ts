import express from "express";
import {
  login,
  protectRoute,
  restrictTo,
  signUp,
  updatePassword,
} from "../controllers/authController";
// import {
//   UpdateUser,
//   getAllUsers,
//   getMe,
//   getUser,
//   getUserStats,
//   updateLoggedUser,
// } from "../controllers/userController";

const router = express.Router();

// router.get("/stats", getUserStats);

router.post("/register", signUp);
router.post("/login", login);

// router.patch("/updateMe", updateLoggedUser);
// router.route("/me").get(getMe, getUser);

// router.route("/").get(restrictTo("admin"), getAllUsers);
// router
//   .route("/:id")
//   .get(restrictTo("admin user"), getUser)
//   .patch(restrictTo("admin"), UpdateUser);

// router.route("/updatePassword").post(restrictTo("user"), updatePassword);

export default router;
