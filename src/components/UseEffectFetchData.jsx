import React, { useState, useEffect } from "react";

const url = "https://dummyjson.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>All Users</h1>
      <ul>
        {users.map((user)=>{
            const {id, firstName} = user

            return <li key={id}>{id} : {firstName}</li>
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
