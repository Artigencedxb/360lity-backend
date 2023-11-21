"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animation = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const animationSchema = new mongoose_1.default.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    link: String,
    priority: { type: Number },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
exports.Animation = mongoose_1.default.model("Animation", animationSchema);
//# sourceMappingURL=animationModel.js.map