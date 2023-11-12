import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../utils/catchAsync";
import { cloudinary } from "../utils/cloudinary";

export const uploadImage = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.files, "body");

    const image = (req as any).body.image;
    const preset = req.body.preset;

    const uploadImage = await cloudinary.uploader.upload(image, {
      transformation: { crop: "fill" },
      resource_type: "auto",
      upload_preset: preset,
    });
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
    if(!req.body.image) {
      return next()
    }
    const imagePath = req.body.image.split("/").slice(-1);
    const publicId = imagePath[0].split(".")?.[0];

    const folder = req.body.folder;

    const deleteImage = await cloudinary.uploader.destroy(
      `${folder}/${publicId}`
    );

    if (req.body.imageExists) {
      return next();
    }

    res.status(200).json({
      status: "success",
      message: "image deleted",
      result: deleteImage?.result,
    });
  }
);
