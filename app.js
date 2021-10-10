const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const bodyparser = require("body-parser");

//Import Models/Schemas
const userRoutes = require("./backend/api/routes/users");
const eventRoutes = require("./backend/api/routes/events");

//
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//CORS
app.use(cors());

//Use Routes
app.use("/users", userRoutes);
app.use("/events", eventRoutes);

module.exports = app;
