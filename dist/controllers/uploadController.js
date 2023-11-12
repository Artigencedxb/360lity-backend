"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = exports.uploadImage = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const cloudinary_1 = require("../utils/cloudinary");
exports.uploadImage = (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    console.log(req.files, "body");
    const image = req.body.image;
    const preset = req.body.preset;
    const uploadImage = await cloudinary_1.cloudinary.uploader.upload(image, {
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
});
exports.deleteImage = (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    if (!req.body.image) {
        return next();
    }
    const imagePath = req.body.image.split("/").slice(-1);
    const publicId = imagePath[0].split(".")?.[0];
    const folder = req.body.folder;
    const deleteImage = await cloudinary_1.cloudinary.uploader.destroy(`${folder}/${publicId}`);
    if (req.body.imageExists) {
        return next();
    }
    res.status(200).json({
        status: "success",
        message: "image deleted",
        result: deleteImage?.result,
    });
});
//# sourceMappingURL=uploadController.js.map