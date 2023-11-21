"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videography = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const videographySchema = new mongoose_1.default.Schema({
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
exports.Videography = mongoose_1.default.model("Videography", videographySchema);
//# sourceMappingURL=videographyModel.js.map