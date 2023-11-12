"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const blogSchema = new mongoose_1.default.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    title: {
        type: String,
        required: [true, "Please enter a blog title"],
    },
    priority: { type: Number, unique: true },
    image: String,
    description: {
        type: String,
        required: [true, "Please enter a blog description"],
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
exports.Blog = mongoose_1.default.model("Blog", blogSchema);
//# sourceMappingURL=blogModel.js.map