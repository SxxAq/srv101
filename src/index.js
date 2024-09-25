// require("dotenv").config({ path: "/.env" });
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db.js";
dotenv.config({ path: "/.env" });

const app = express();

connectDB()

















/*
(async () => {
  try {
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("Error", (err) => {
      console.log("Cannot connect to the DB", err);
      throw err;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
})();
*/
