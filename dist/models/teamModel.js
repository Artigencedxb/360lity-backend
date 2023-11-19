"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const teamSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "A user must have a name"],
        trim: true, // exclude the white spaces
    },
    role: {
        type: String,
        required: [true, "Please enter a role"],
    },
    image: String,
    whatsapp: {
        type: String,
    },
    priority: { type: Number },
    instagram: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    tiktok: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "Please enter a contact description"],
    },
});
exports.Team = mongoose_1.default.model("Team", teamSchema);
//# sourceMappingURL=teamModel.js.map