import bodyParser from "body-parser";
import cors from "cors";
import ExpressMongoSanitize from "express-mongo-sanitize";
import morgan from "morgan";
import xss from "xss-clean";
import express from "express";
import dotenv from "dotenv";
import { GlobalError } from "./controllers/errorController";
import projectRouter from "./routes/projectRoute";
import uploadRouter from "./routes/uploadRoute";
import fileUpload from "express-fileupload";
dotenv.config();
export const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(express.static("public"));
app.use(ExpressMongoSanitize());
app.use(xss());
// app.use(hpp()); use this when implementing products
app.use(bodyParser.json());

app.use(
  cors({
    credentials: true,
  })
);

//Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/hi", (req, res) => {
  res.status(200).json({
    message: "hello user",
  });
});

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/api/project", projectRouter);
app.use("/api/image", uploadRouter);

app.use(GlobalError);
