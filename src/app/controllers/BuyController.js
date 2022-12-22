const Course = require("../models/Course");
const { singleMongoosetoObject } = require("../../util/mongoose");
class BuyController {
  //[GET] /buy
  buy(req, res, next) {
    const slug = req.params.slug;
    Course.findOne({ slug: slug }).then((course) => {
      res.render("buy/buyCourse", { course: singleMongoosetoObject(course) });
    });
  }
}
module.exports = new BuyController();
