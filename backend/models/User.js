const mongoose = require("mongoose");
const shortid = require("shortid");

let ExerciseSchema = new mongoose.Schema({
  name: String,
  duration: Number,
  date: Date
});

let UserSchema = new mongoose.Schema({
  log: [ExerciseSchema],
  username: String,
  _id: {
    type: String,
    default: shortid.generate
  }
});

let User = mongoose.model("User", UserSchema);

module.exports = User;
