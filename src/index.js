const path = require("path");
const express = require("express");
const hbs = require("express-handlebars");
const morgan = require("morgan");
const route = require("./routes");
const methodOverride = require('method-override')
const db = require("./config/db");

// Connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))

//HTTP logger
// app.use(morgan('combined'))

//Template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    //Custom Functions
    helpers: {
      sum: (a, b) => a + b,
  }
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
