const mongoose = require("mongoose");

let ExerciseSchema = new mongoose.Schema({
  description: String,
  duration: Number,
  date: Date
});

let Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
