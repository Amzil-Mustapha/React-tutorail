import { useState, useRef } from "react";

export default function UseRef() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

// import React, { useRef, useState } from "react";

// export default function UseRef() {
//   const refValue = useRef("");
//   const [colors, setColors] = useState([]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setColors((colors) => {
//       return [...colors, refValue.current.value];
//     });
//   };
//   return (
//     <>
//       <form onSubmit={submitHandler}>
//         COLOR : <input type="text" ref={refValue} />
//         <button type="submit">ADD COLOR</button>
//       </form>
//       <ol>
//         {colors.map((color, i) => {
//           return (
//             <li key={i}>
//               <b>{color.toUpperCase()}</b>
//             </li>
//           );
//         })}
//       </ol>
//     </>
//   );
// }
