const mongoose = require("mongoose");

let ExerciseSchema = new mongoose.Schema({
  description: String,
  duration: Number,
  date: Date
});

let UserSchema = new mongoose.Schema({
  log: [ExerciseSchema],
  username: String
});

let User = mongoose.model("User", UserSchema);

module.exports = User;
