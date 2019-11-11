const express = require("express");
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const bluebird = require("bluebird");

const config = require("./config");
const routes = require("./routes");
var cors = require("cors");
// var multer = require("multer");
const path = require('path');
const app = express();
mongoose.Promise = bluebird;
mongoose.connect(config.mongo.url, { useNewUrlParser: true });
app.use(
  cors()
);
// var storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./public/images");
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     var filetype = "";
//     if (file.mimetype === "image/gif") {
//       filetype = "gif";
//     }
//     if (file.mimetype === "image/png") {
//       filetype = "png";
//     }
//     if (file.mimetype === "image/jpeg") {
//       filetype = "jpg";
//     }
//     callback(null, "image-" + Date.now() + "." + filetype);
//   },
// });
// var upload = multer({ storage: storage });

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use("/", routes);
app.use(express.static(path.join(__dirname, '/public')))
console.log(__dirname);
app.listen(config.server.port, () => {
  console.log(`Magic happens on port ${config.server.port}`);
});

module.exports = app;
