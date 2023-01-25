import React, { useState } from "react";

const Forms = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const submitHndler = (e) => {
    document.write(
      `Your Username Is: <b> ${username} </b>And You Email Is: <b> ${email}</b>`
    );
  };
  return (
    <>
      <form onSubmit={submitHndler}>
        Username :
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value.toUpperCase())}
        />
        <br />
        <br />
        Email :
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.toUpperCase())}
        />
        <br />
        <br />
        <button type="submit">Click</button>
      </form>
    </>
  );
};
export default Forms;
