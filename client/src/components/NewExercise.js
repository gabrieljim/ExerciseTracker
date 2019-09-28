import React from "react";

function NewExercise(props) {
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(typeof document.getElementById("name").value);
    const response = await fetch("http://localhost:3001/newexercise", {
      method: "post",
      body: JSON.stringify({
        user: props.match.params.user,
        name: document.getElementById("name").value,
        duration: document.getElementById("duration").value,
        date: document.getElementById("date").value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    props.history.push(`/`);
    props.history.push(`/users`);
    props.history.push(`/users/${props.match.params.user}`);
  };
  return (
    <div className="container">
      <h1 className="title">Add a new exercise</h1>
      <form
        autoComplete="off"
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name of the exercise"
        />
        <input
          type="number"
          name="duration"
          id="duration"
          placeholder="Duration (mins)"
        />
        <input type="date" name="date" id="date" />
        <input type="submit" className="mainbtn" />
      </form>
    </div>
  );
}

export default NewExercise;
