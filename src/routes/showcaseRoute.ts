import { deleteImage } from "../controllers/uploadController";
import {
  CreateShowcase,
  DeleteShowcase,
  DeleteShowcaseImage,
  EditShowcase,
  GetAllShowcase,
  GetShowcase,
} from "../controllers/showcaseController";
import express from "express";
const router = express.Router();

router.route("/").get(GetAllShowcase).post(CreateShowcase);

router
  .route("/:id")
  .get(GetShowcase)
  .patch(EditShowcase)
  .patch(EditShowcase)
  .delete(DeleteShowcaseImage, deleteImage, DeleteShowcase);

export default router;
