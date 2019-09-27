import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="container">
      <h1 className="title">Main Screen</h1>
      <div className="buttons">
        <Link to="/users" className="mainbtn">
          See all registered users
        </Link>
        <Link to="/newuser" className="mainbtn">
          Add a new user
        </Link>
      </div>
    </div>
  );
}

export default Main;
