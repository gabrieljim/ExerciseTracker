import React, { useEffect, useState } from "react";

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

  return <div>{loaded ? <h1>{user.username}</h1> : <h1>Loading...</h1>}</div>;
}

export default User;
