import cloudinarySDK from "cloudinary";
import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../utils/catchAsync";

const cloudinary = cloudinarySDK.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.files, "body");

    const image = (req as any).files.image;

    const uploadImage = await cloudinary.uploader.upload(image?.tempFilePath);
    console.log(uploadImage, "uploaded");
    res.status(201).json({
      status: "success",
      data: {
        createdAt: uploadImage?.created_at,
        url: uploadImage?.url,
        secure_url: uploadImage?.secure_url,
      },
    });
  }
);

export const deleteImage = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const imagePath = req.body.url.split("/").slice(-1);
    const publicId = imagePath[0].split(".")?.[0];
    console.log(publicId, "path");

    const deleteImage = await cloudinary.uploader.destroy(publicId);

    console.log(deleteImage, "delted");

    res.status(204).json({
      status: "success",
      message: "image deleted",
      result: deleteImage?.result,
    });
  }
);
