"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.About = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const aboutSchema = new mongoose_1.default.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    image: String,
    title: {
        type: String,
        required: [true, "Please enter a title"],
    },
    description: {
        type: String,
        required: [true, "Please enter a aboutus description"],
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
exports.About = mongoose_1.default.model("About", aboutSchema);
//# sourceMappingURL=aboutModel.js.map