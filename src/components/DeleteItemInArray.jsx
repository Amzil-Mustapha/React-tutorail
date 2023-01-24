import React, { useState } from "react";

const arr = [
  { id: 1, name: "Ali " },
  { id: 2, name: "Anouar" },
  { id: 3, name: "Mounir" },
  { id: 4, name: "Omar" },
  { id: 5, name: "Aziz" },
  { id: 6, name: "Mustapha" },
];

function DeleteItemInArray() {
  const [a, seta] = useState(arr);
  const deleteHandler = (id) => {
    let newarr = a.filter((arr) => {
      return id !== arr.id;
    });
    seta(newarr);
  };

  return (
    <>
      {a.map((arr) => {
        const { id, name } = arr;
        return (
          <div key={id}>
            <b>{name} </b>
            <button onClick={() => deleteHandler(id)}>Delete</button>
          </div>
        );
      })}
      <button type="button" onClick={() => seta([])}>
        Up
      </button>
    </>
  );
}

export default DeleteItemInArray;
