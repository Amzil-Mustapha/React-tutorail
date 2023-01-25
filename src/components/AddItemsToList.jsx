import React, { useState } from "react";

const AddItemsToList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // add the task just if is not empty value
    if (task) {
        setTasks((tasks) => [...tasks, task]);
        setTask('')
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="task">Task: </label>
        <input
          type="text"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">ADD TASK</button>
        <button type="button" onClick={()=>setTasks([])}>CLEAR TASKS</button>
      </form>

      <ul>
        {/* When you want to remove items then don't use index is a key item*/}
        {tasks.map((ele, index) => {
          return <li key={index}>{ele}</li>;
        })}
      </ul>
    </>
  );
};

export default AddItemsToList;
