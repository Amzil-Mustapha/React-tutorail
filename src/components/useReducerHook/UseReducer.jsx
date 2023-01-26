import React, { useReducer, useState, useEffect } from "react";
import { act } from "react-dom/test-utils";
import { Modal } from "./Modal";
import { reducer } from "./reducer";


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

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
<br /><br /><br /><br /><br />
      {state.isModelOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
          return (
            <li key={person.id}>
              {person.name}
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: person.id })
                }
              >
                remove
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
}
