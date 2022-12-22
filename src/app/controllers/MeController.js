const Course = require("../models/Course");
const Todo = require("../models/Todo");

const {
  multipleMongooseToObject,
  singleMongoosetoObject,
} = require("../../util/mongoose");
class MeController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted({})])
      .then(([courses, deletedCount]) => {
        res.render("me/stored-courses", {
          deletedCount,
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  //[GET] /me/trash/courses
  deletedCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render("me/deleted-courses", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
  //[GET] /me/todos
  todos(req, res, next) {
    Todo.find({}).then((todos) => {      
      res.render("me/todos", {
        todos: multipleMongooseToObject(todos),
      });
    });
  }
  //[GET] /me/todos/:slug

  detailTodo(req, res, next) {
    Todo.findOne({ slug: req.params.slug }).then((todo) => {
      res.render("me/detail-todo", {
        todo: singleMongoosetoObject(todo),
      });
    });
  }
}
module.exports = new MeController();
