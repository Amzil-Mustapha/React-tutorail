import React, { useState, useEffect } from "react";

const BookList = () => {
  const [value, setValue] = useState(0);
  

  useEffect(() => {
    // useEffect Called After Any Render Runnig
    document.title =
      value > 0 ? `The Number Is: ${value}` : "The Number Is Null";
  }, []);


  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Buttton</button>
    </>
  );
};

export default BookList;
