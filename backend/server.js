const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Exercise = require("./models/Exercise");
const User = require("./models/User");

mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on("error", err => console.error(err));

db.once("open", () => console.log("Connected to database"));

app.post("/new", (req, res) => {
  console.log("POST request");
  let newUser = new User({
    username: req.body.username
  });
  newUser.save(err => {
    if (err) console.log(err);
    res.send("done");
  });
});

app.post("/newexercise", (req, res) => {
  console.log("POST request");
  console.log(req.body.name);
  let newExercise = new Exercise({
    name: req.body.name,
    duration: req.body.duration,
    date: req.body.date
  });
  User.findOne({ _id: req.body.user }, (err, user) => {
    if (err) return console.log(err);
    user.log.push(newExercise);
    user.save(err => {
      if (err) return console.log(err);
      res.send("done");
    });
  });
});

app.get("/users", (req, res) => {
  console.log("GET request received, fetching users...");
  User.find({}, (err, users) => {
    if (err) return console.log(err);
    res.json(users);
  });
});

app.get("/users/:user", (req, res) => {
  console.log("GET request, fetching user...", req.params.user);
  User.findOne({ _id: req.params.user }, (err, user) => {
    if (err) return console.log(err);
    res.json(user);
  });
});

app.delete("/deleteuser", (req, res) => {
  console.log("DELETE request");
  console.log(req.body);
  User.deleteOne({ _id: req.body.id }, err => {
    if (err) return console.log(err);
    res.send("deleted");
  });
});

app.listen(3001, () => console.log("Listening..."));
