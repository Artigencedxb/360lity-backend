import bodyParser from "body-parser";
import cors from "cors";
import ExpressMongoSanitize from "express-mongo-sanitize";
import morgan from "morgan";
import xss from "xss-clean";
import express from "express";
import dotenv from "dotenv";
import { GlobalError } from "./controllers/errorController";
import projectRouter from "./routes/projectRoute";
import blogRouter from "./routes/blogRoute";
import showcaseRouter from "./routes/showcaseRoute";
import uploadRouter from "./routes/uploadRoute";
import userRouter from "./routes/userRoute";
import contactRouter from "./routes/contactRoute";
import aboutRouter from "./routes/aboutRoute";
import xvtRouter from "./routes/xvtRoute";
import arVrRouter from "./routes/arVrRoute";
import fileUpload from "express-fileupload";
dotenv.config();
export const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb" }));
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

app.use(
  fileUpload({
    useTempFiles: true,
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

app.use("/api/user", userRouter);
app.use("/api/project", projectRouter);
app.use("/api/showcase", showcaseRouter);
app.use("/api/blog", blogRouter);
app.use("/api/contact", contactRouter);
app.use("/api/about", aboutRouter);
app.use("/api/xvt", xvtRouter);
app.use("/api/arvr", arVrRouter);
app.use("/api/image", uploadRouter);

app.use(GlobalError);
