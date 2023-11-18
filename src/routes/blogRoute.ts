import { deleteImage } from "../controllers/uploadController";
import {
  CreateBlog,
  DeleteBlog,
  DeleteBlogImage,
  EditBlog,
  GetAllBlog,
  GetBlog,
} from "../controllers/blogController";
import express from "express";
import { protectRoute, restrictTo } from "../controllers/authController";
const router = express.Router();

router
  .route("/")
  .get(GetAllBlog)
  .post(protectRoute, restrictTo("admin"), CreateBlog);

router
  .route("/:id")
  .get(GetBlog)
  .patch(protectRoute, restrictTo("admin"), EditBlog)
  .delete(
    protectRoute,
    restrictTo("admin"),
    DeleteBlogImage,
    deleteImage,
    DeleteBlog
  );

export default router;
