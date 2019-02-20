// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("../api/routes");

const PORT = 3005;

// Setting up the app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", routes);

//---- Serve
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));