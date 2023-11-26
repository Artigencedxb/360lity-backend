"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xvt = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const xvtSchema = new mongoose_1.default.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    name: {
        type: String,
        required: [true, "Please enter a xvt name"],
    },
    image: String,
    descImage1: String,
    descImage2: String,
    description1: {
        type: String,
        required: [true, "Please enter first paragraph description"],
    },
    description2: {
        type: String,
        required: [true, "Please enter second paragraph description"],
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
exports.Xvt = mongoose_1.default.model("Xvt", xvtSchema);
//# sourceMappingURL=xvtModel.js.map