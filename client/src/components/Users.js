import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      console.log("fetching data...");
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      console.log("fetched");
      setUsers(data);
      setLoaded(true);
    }
    fetchData();
  }, []);

  const path = "/users/";

  return (
    <div className="container">
      <h1 className="title">Users</h1>
      <ul className="usersList">
        {/*If it's loaded just render the list */}
        {loaded ? (
          users.map(user => {
            return (
              <li key={user._id} className="user">
                <Link to={path + user._id}>{user.username}</Link>
              </li>
            );
          })
        ) : (
          /*Otherwise, render Loading in the meanwhile */
          <h1>Loading...</h1>
        )}
      </ul>
    </div>
  );
}

export default Users;
