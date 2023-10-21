import express from "express";
import { deleteImage, uploadImage } from "../controllers/uploadController";
const router = express.Router();

router.route("/upload").post(uploadImage);
router.route("/delete").post(deleteImage);

export default router;
