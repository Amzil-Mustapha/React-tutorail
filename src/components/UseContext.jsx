import React, { useContext, useState } from "react";

const UserContext = React.createContext(null);

export default function MyRootApp() {
  const [user, setUser] = useState("Mustapha");
  return (
    <div>
      <UserContext.Provider value={user}>
        <LevelOne />
      </UserContext.Provider>
    </div>
  );
}

function LevelOne() {
  return (
    <>
      <LevelTwo />
    </>
  );
}

function LevelTwo() {
  return (
    <>
      <LevelThree />
    </>
  );
}

function LevelThree() {
  return (
    <>
      <LevelFour />
    </>
  );
}

function LevelFour() {
  return (
    <>
      <LevelFive />
    </>
  );
}

function LevelFive() {
  return (
    <>
      <LevelSix />
    </>
  );
}

function LevelSix() {
  const user = useContext(UserContext);
  return <>The User Is: {user}</>;
}
