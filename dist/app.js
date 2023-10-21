"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const morgan_1 = __importDefault(require("morgan"));
const xss_clean_1 = __importDefault(require("xss-clean"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json({ limit: "10kb" }));
exports.app.use(express_1.default.static("public"));
exports.app.use((0, express_mongo_sanitize_1.default)());
exports.app.use((0, xss_clean_1.default)());
// app.use(hpp()); use this when implementing products
exports.app.use(body_parser_1.default.json());
exports.app.use((0, cors_1.default)({
    credentials: true,
}));
//Development logging
if (process.env.NODE_ENV === "development") {
    exports.app.use((0, morgan_1.default)("dev"));
}
exports.app.get("/hi", (req, res) => {
    res.status(200).json({
        message: "hello user",
    });
});
//# sourceMappingURL=app.js.map