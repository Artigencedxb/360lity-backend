"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const projectSchema = new mongoose_1.default.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    name: {
        type: String,
        required: [true, "Please enter a project name"],
    },
    image: String,
    link: {
        type: String,
        required: [true, "Please enter a 360 video link"],
    },
    description: {
        type: String,
        required: [true, "Please enter a project description"],
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
exports.Project = mongoose_1.default.model("Project", projectSchema);
//# sourceMappingURL=projectModel.js.map