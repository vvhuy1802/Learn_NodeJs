const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
    videoID: { type: String, required: true },
    level: { type: String, maxLength: 255 },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("Course", Course);