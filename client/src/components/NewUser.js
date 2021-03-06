import React from "react";

function NewUser(props) {
  const handleForm = async e => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    await fetch("http://localhost:3001/new", {
      method: "post",
      body: `username=${username}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    props.history.push(`/`);
    props.history.push(`/users`);
  };
  return (
    <div className="container">
      <h1 className="title">Add a new user</h1>

      <form autoComplete="off" onSubmit={e => handleForm(e)}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input type="submit" className="mainbtn" />
      </form>
    </div>
  );
}

export default NewUser;
