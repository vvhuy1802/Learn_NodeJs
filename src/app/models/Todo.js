const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

const Schema = mongoose.Schema;

const Todo = new Schema({
  name: { type: String, maxLength: 255 },
  isComplete: { type: Boolean, default: false },
  color: { type: String, maxLength: 255 },
  deletedAt: { type: Date, default: null },
  delete: { type: Boolean, default: false },
  slug: { type: String, slug: "name", unique: true },
});

mongoose.plugin(slug);
module.exports = mongoose.model("Todo", Todo);
