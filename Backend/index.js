import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { create, getAll, getSort } from "./controllers/GoodController.js";

mongoose
  .connect("mongodb+srv://ivanyukandrei:12345@cluster0.qkpybtm.mongodb.net/")
  .then(() => console.log("DB OK"))
  .catch((err) => console.log("DB ERR", err));

const app = express();

app.use(express.json());
app.use(cors());

app.get("/good", getAll);
app.post("/good", create);
app.get("/good/:shop", getSort);

app.listen("5555", (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
