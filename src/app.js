require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const routes = require("./routes/weather.route");

// Settings
app.set("port", process.env.SERVER_PORT);
app.set("json spaces", 2);

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE, PATCH",
  })
);

// Routes
app.use("/", routes);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

module.exports = app;
