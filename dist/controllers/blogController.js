"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBlog = exports.GetBlog = exports.EditBlog = exports.CreateBlog = exports.GetAllBlog = exports.DeleteBlogImage = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const blogModel_1 = require("../models/blogModel");
const handlerFactory_1 = require("./handlerFactory");
exports.DeleteBlogImage = (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    const blog = await blogModel_1.Blog.findById(req.params.id);
    // if (popOptions) query = query.populate(popOptions);
    console.log(blog, "show");
    if (blog?.image?.length) {
        req.body.image = blog?.image;
        req.body.folder = "blog";
        req.body.imageExists = true;
    }
    next();
});
exports.GetAllBlog = (0, handlerFactory_1.GetAll)(blogModel_1.Blog, "blog");
exports.CreateBlog = (0, handlerFactory_1.CreateOne)(blogModel_1.Blog, "blog");
exports.EditBlog = (0, handlerFactory_1.UpdateOne)(blogModel_1.Blog, "blog");
exports.GetBlog = (0, handlerFactory_1.GetOne)(blogModel_1.Blog, "blog");
exports.DeleteBlog = (0, handlerFactory_1.DeleteOne)(blogModel_1.Blog, "blog");
//# sourceMappingURL=blogController.js.map