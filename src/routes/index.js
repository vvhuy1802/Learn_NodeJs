const newsRoute = require("./news");
const siteRoute = require("./site");
const coursesRoute = require("./courses");
const meRoute = require("./me");
const buyRoute = require("./buy");
function route(app) {
  app.use("/me", meRoute);
  app.use("/courses", coursesRoute);
  app.use("/news", newsRoute);
  app.use("/buy/", buyRoute);
  //General route
  app.use("/", siteRoute);
}
module.exports = route;
