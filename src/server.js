const express = require("express");
const ENV_CONFIG = require("./config/env.config");
const apiRouters = require("./router/app.router");
const mongoose = require("mongoose");
const DB_CONFIG = require("./config/db.config");

const app = express();

const { PORT } = ENV_CONFIG;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouters);

mongoose
  .connect(DB_CONFIG.mongo.uri)
  .then(() => {
    console.log("Connected to DB successfully!");
    const server = app.listen(PORT, () => {
      const serverURI = `http://localhost:${PORT}`;
      console.log(`Server is up and running on ${serverURI}`);
    });
    server.on("error", (error) => {
      const serverURI = `http://localhost:${PORT}`;
      console.error(
        `There was an error trying to start the server on ${serverURI}`
      );
      throw error;
    });
  })
  .catch((error) => {
    console.error(
      `There was an error trying to connect to ${DB_CONFIG.mongo.uri}`
    );
    throw error;
  });
