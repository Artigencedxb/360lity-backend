"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photography = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const photographySchema = new mongoose_1.default.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    image: String,
    priority: { type: Number },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
exports.Photography = mongoose_1.default.model("Photography", photographySchema);
//# sourceMappingURL=photographyModel.js.map