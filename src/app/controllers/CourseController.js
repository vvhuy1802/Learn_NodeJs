const Course = require("../models/Course");
const { singleMongoosetoObject } = require("../../util/mongoose");
class CourseController {
  //[GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: singleMongoosetoObject(course) });
      })
      .catch(next);
  }
  //[GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }
  //[GET] /courses/:id/edit
  edit(req, res, next) {
    const id = req.params.id;
    Course.findById(id)
      .then((course) => {
        res.render("courses/edit", { course: singleMongoosetoObject(course) });
      })
      .catch(next);
  }
  //[POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect(`/courses/${course.slug}`))
      .catch((error) => {});
  }
  //[PUT] /courses/:id
  update(req, res, next) {
    const id = req.params.id;
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    Course.updateOne({ _id: id }, formData)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  //[DELETE] /courses/:id
  delete(req, res, next) {
    const id = req.params.id;
    Course.delete({ _id: id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //[PATCH] /courses/:id/restore
  restoreCourse(req, res, next) {
    const id = req.params.id;
    Course.restore({ _id: id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //[DELETE] /courses/:id/force
  forceCourse(req, res, next) {
    const id = req.params.id;
    Course.deleteOne({ _id: id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
module.exports = new CourseController();
