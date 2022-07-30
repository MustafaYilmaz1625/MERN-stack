import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routers/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  //   res.send("Coding with mustafa..");
  res.json({
    author: "Coding with mustafa.:)",
    message: "Mutlu yıllar!",
  });
});

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

const CONNNECTION_URL =
  "mongodb+srv://codingwithmustafa:test1234@cluster0.3vfzmjn.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(process.env.CONNNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
