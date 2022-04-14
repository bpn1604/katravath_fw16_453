import React, { useEffect } from "react";
import { nanoid } from "nanoid";

import TodoItem from "./TodoItem";
import Todo from "./Todo";

function TodoList({ onAdd, onDelete }) {
  const [task, setTask] = React.useState("");
  const [task2, setTask2] = React.useState("");
  const [todo, setTodo] = React.useState([]);

  const postTodo = async (value,value2) => {
    // console.log(value)
    try {
      let res = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          Restrantname: value,
          foodItem:value2,
          completed: false,
        }),
      });
      let data = await res.json();

      onAdd(data);
      //handleClick(data)
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    setTask(e.target.value);
    setTask2(e.target.value);
  };

  return (
    <>
      <div id="inputdiv">
        <input
          id="input"
          type={"text"}
          name={task}
          onChange={handleChange}
          placeholder="Write Something"
        /><br/>
        
        <input
          id="input"
          type={"text"}
          name={task2}
          onChange={handleChange}
          placeholder="Write Something"
        />
        <button
          id="btn"
          onClick={() => {
            let name = task.trim();
            let name2 = task2.trim();

            if (name||name2) {
              postTodo(name,name2);
            }
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default TodoList;
