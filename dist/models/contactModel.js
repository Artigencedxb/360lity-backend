"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const contactSchema = new mongoose_1.default.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    image: String,
    phone: {
        type: String,
        required: [true, "Please enter a contact number"],
    },
    whatsapp: {
        type: String,
        required: [true, "Please enter a whatsapp number"],
    },
    email: {
        type: String,
        required: [true, "Please enter a email address"],
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
exports.Contact = mongoose_1.default.model("Contact", contactSchema);
//# sourceMappingURL=contactModel.js.map