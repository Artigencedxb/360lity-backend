"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArVr = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const arvrSchema = new mongoose_1.default.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    image: String,
    descImage1: String,
    descImage2: String,
    description: {
        type: String,
        required: [true, "Please enter a blog description"],
    },
    title: {
        type: String,
        required: [true, "Please enter a title"],
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
exports.ArVr = mongoose_1.default.model("ArVr", arvrSchema);
//# sourceMappingURL=arVrModel.js.map