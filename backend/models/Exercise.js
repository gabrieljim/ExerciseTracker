const mongoose = require("mongoose");

let ExerciseSchema = new mongoose.Schema({
  name: String,
  duration: Number,
  date: Date
});

let Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
