import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const inc = () => {
    const action = { type: "increment" };
    return dispatch(action);
  };
  const dec = () => {
    const action = { type: "decrement" };
    return dispatch(action);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => inc()}> + </button>
      <button onClick={() => dec()}> - </button>
    </>
  );
};

export default App;
