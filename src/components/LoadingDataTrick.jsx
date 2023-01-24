import React, { useState, useEffect } from "react";

const url = "https://dummyjson.com/users";

const LoadingDataTrick = () => {
  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // const load = async () => {
  //   const response = await fetch(url);
  //   const users = await response.json();

  //   console.log(users.users[0]);
  //   setUser(users.users['4'])
  // };

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((users) => {
        setUser(users.users);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        {/*The Spinner Code Can Added Here Instead Of h1 */}
        <h1>Loading ...</h1>{" "}
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error !</h1>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {users.map((user) => {
          const { id, firstName, lastName, age } = user;

          return (
            <li key={id}>
              <b>{id}</b> : The Username Is :{" "}
              <b>{firstName + " " + lastName} </b>The age Is : {age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LoadingDataTrick;
