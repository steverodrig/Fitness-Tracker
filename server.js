const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", 
{ 
  useNewUrlParser: true ,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});





app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });