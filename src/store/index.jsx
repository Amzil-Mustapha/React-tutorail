import { createStore } from "redux";

const iniState = { count: 0 };

const counter = (state = iniState, action) => {
  if (action.type == "increment") {
    return { count: state.count + 1 };
  }
  if (action.type == "decrement") {
    return { count: state.count - 1 };
  }
  return state;
};

const store = createStore(counter);

export default store;
