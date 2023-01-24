import React, { useState, useEffect } from "react";

export default function WindowSize() {
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);

  const myFun = ()=> {
    setheight(window.innerHeight);
    setwidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', myFun)
  
    return () => {
      window.removeEventListener('resize', myFun)
    }
  })
  

  return (
    <>
      {}
      <h1>{width}</h1>
      <h1>{height}</h1>
    </>
  );
}
