import React, { useState, useEffect } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");

  const a = text || "random text";
  // the text is true return the text when the text is false return the random text  (text false = empty)
  const b = text && "rendom text";
  // the text is true return the random text when the text is false return the text

  return (
    <>
      {/* when the text varaible is empty then return the default text */}
      <h1>{text || "The text"}</h1>

      {/* when the text varaible is not empty then return the h1 */}
      {text && <h1>Some Code Here</h1>}
    </>
  );
};

export default ShortCircuit;
