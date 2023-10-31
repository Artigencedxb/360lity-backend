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
const router = express.Router();

router.route("/").get(GetAllBlog).post(CreateBlog);

router
  .route("/:id")
  .get(GetBlog)
  .patch(EditBlog)
  .delete(DeleteBlogImage, deleteImage, DeleteBlog);

export default router;
