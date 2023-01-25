import React, { useState } from "react";

export const MultipleInputs = () => {
  const [car, setCar] = useState({ model: "", color: "", type: "" });
  const [cars, setCars] = useState([]);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCar({ ...car, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (car.model && car.color && car.type) {
      const carStor = { ...car };
      setCars([...cars, carStor]);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        Model:{" "}
        <input
          type="text"
          name="model"
          value={car.model}
          onChange={changeHandler}
        />
        <br />
        <br />
        Color:{" "}
        <input
          type="text"
          name="color"
          value={car.color}
          onChange={changeHandler}
        />
        <br />
        <br />
        Type:{" "}
        <input
          type="text"
          name="type"
          value={car.type}
          onChange={changeHandler}
        />
        <br />
        <br />
        <button type="submit">ADD CAR</button>
      </form>
      <ol>
        {cars.map((car, number) => {
          return (
            <li key={number}>
              ==&gt; Model : {car.model} Color : {car.color} Type : {car.type}
            </li>
          );
        })}
      </ol>
    </>
  );
};
