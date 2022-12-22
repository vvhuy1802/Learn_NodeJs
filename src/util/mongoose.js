module.exports = {
  multipleMongooseToObject: function (mongooseArray) {
    return mongooseArray.map((mongoose) => mongoose.toObject());
  },
  singleMongoosetoObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
