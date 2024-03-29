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
const errorController_1 = require("./controllers/errorController");
const projectRoute_1 = __importDefault(require("./routes/projectRoute"));
const blogRoute_1 = __importDefault(require("./routes/blogRoute"));
const showcaseRoute_1 = __importDefault(require("./routes/showcaseRoute"));
const uploadRoute_1 = __importDefault(require("./routes/uploadRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const contactRoute_1 = __importDefault(require("./routes/contactRoute"));
const aboutRoute_1 = __importDefault(require("./routes/aboutRoute"));
const xvtRoute_1 = __importDefault(require("./routes/xvtRoute"));
const arVrRoute_1 = __importDefault(require("./routes/arVrRoute"));
const teamRoute_1 = __importDefault(require("./routes/teamRoute"));
const photographyRoute_1 = __importDefault(require("./routes/photographyRoute"));
const videographyRoute_1 = __importDefault(require("./routes/videographyRoute"));
const animationRoute_1 = __importDefault(require("./routes/animationRoute"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
dotenv_1.default.config();
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json({ limit: "10mb" }));
exports.app.use(express_1.default.urlencoded({ limit: "10mb" }));
exports.app.use(express_1.default.static("public"));
exports.app.use((0, express_mongo_sanitize_1.default)());
exports.app.use((0, xss_clean_1.default)());
// app.use(hpp()); use this when implementing products
exports.app.use(body_parser_1.default.json());
exports.app.use((0, cors_1.default)({
    credentials: true,
}));
exports.app.use((0, express_fileupload_1.default)({
    useTempFiles: true,
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
exports.app.use("/api/user", userRoute_1.default);
exports.app.use("/api/project", projectRoute_1.default);
exports.app.use("/api/showcase", showcaseRoute_1.default);
exports.app.use("/api/blog", blogRoute_1.default);
exports.app.use("/api/contact", contactRoute_1.default);
exports.app.use("/api/about", aboutRoute_1.default);
exports.app.use("/api/xvt", xvtRoute_1.default);
exports.app.use("/api/arvr", arVrRoute_1.default);
exports.app.use("/api/team", teamRoute_1.default);
exports.app.use("/api/photography", photographyRoute_1.default);
exports.app.use("/api/videography", videographyRoute_1.default);
exports.app.use("/api/animation", animationRoute_1.default);
exports.app.use("/api/image", uploadRoute_1.default);
exports.app.use(errorController_1.GlobalError);
//# sourceMappingURL=app.js.map