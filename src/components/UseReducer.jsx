import React, { useReducer, useState } from "react";
import { act } from "react-dom/test-utils";

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModelOpen: true,
      modalContent: "item Added",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModelOpen: true, modalContent: "Please enter value" };
  }
  throw new Error("no Matching action type");
};
const defaultState = {
  people: [],
  isModelOpen: false,
  modalContent: "",
};
export default function UseReducer() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  return (
    <>
      {state.isModelOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">ADD</button>
        </div>
      </form>
      <ol>
        {state.people.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ol>
    </>
  );
}

export const Modal = ({ modalContent }) => {
  return <div>{modalContent}</div>;
};
