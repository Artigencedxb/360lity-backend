"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
// const mongoose: Mongoose = require("mongoose");
const app_1 = require("./app");
//mongoose connect
// const DB: any = process.env.DATABASE?.replace(
//   "<PASSWORD>",
//   process.env.MONGO_PASSWORD as any
// );
mongoose_1.default
    .connect(process.env.DATABASE, {
    autoIndex: true,
})
    .then(() => {
    console.log("DB connection is successfull");
})
    .catch((err) => {
    console.log("Error connecting to database...💥");
    console.log(err);
});
// 4) start the server
const port = process.env.PORT || 3001;
const server = app_1.app.listen(port, "0.0.0.0", () => {
    console.log(`App running on port ${port}`);
});
process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! 💥 SHUTTING DOWN...");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
//# sourceMappingURL=server.js.map