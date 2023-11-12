"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Showcase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const showcaseSchema = new mongoose_1.default.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    name: {
        type: String,
        required: [true, "Please enter a showcase name"],
    },
    image: String,
    link: {
        type: String,
        required: [true, "Please enter a 360 video link"],
    },
    priority: { type: Number, unique: true },
    description: {
        type: String,
        required: [true, "Please enter a showcase description"],
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
exports.Showcase = mongoose_1.default.model("Showcase", showcaseSchema);
//# sourceMappingURL=showcaseModel.js.map