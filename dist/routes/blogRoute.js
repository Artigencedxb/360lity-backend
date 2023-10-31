"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadController_1 = require("../controllers/uploadController");
const blogController_1 = require("../controllers/blogController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route("/").get(blogController_1.GetAllBlog).post(blogController_1.CreateBlog);
router
    .route("/:id")
    .get(blogController_1.GetBlog)
    .patch(blogController_1.EditBlog)
    .delete(blogController_1.DeleteBlogImage, uploadController_1.deleteImage, blogController_1.DeleteBlog);
exports.default = router;
//# sourceMappingURL=blogRoute.js.map