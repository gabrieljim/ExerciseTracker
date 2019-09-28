import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User(props) {
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);
  const userArgument = props.match.params.user;

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        `http://localhost:3001/users/${userArgument}`
      );
      const newUser = await response.json();
      setUser(newUser);
      setLoaded(true);
    }
    getUser();
  }, [userArgument]);
  console.log(user);

  const deleteUser = async () => {
    document.getElementById("username").innerHTML = "Deleting...";
    const response = await fetch("http://localhost:3001/deleteuser", {
      method: "delete",
      body: JSON.stringify({
        id: user._id
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    props.history.push(`/`);
    props.history.push(`/users`);
  };

  return (
    <div className="container">
      <h1 className="title" id="username">
        {user.username}
        <span className="fa fa-trash" onClick={() => deleteUser()}></span>
      </h1>
      <ul className="exerciseList">
        {/*If it's loaded just render the list */}
        {loaded ? (
          <li>
            <Link to={`/users/${user._id}/newexercise`}>Add new exercise</Link>
          </li>
        ) : (
          /*Otherwise, render Loading in the meanwhile */
          <h1>Loading...</h1>
        )}
        {loaded
          ? user.log.map(exercise => (
              <li key={exercise._id} className="exercise">
                {exercise.name}, duration: {exercise.duration} minutes
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default User;
