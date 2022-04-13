import React, { useEffect } from "react";
import { nanoid } from "nanoid";

import TodoItem from "./TodoItem";
import Todo from "./Todo";

function TodoList({onAdd}) {
  const [task, setTask] = React.useState("");
  const [todo, setTodo] = React.useState([]);

  


  
   
      const postTodo = async (value) => {
        console.log(value)
        try {
          let res = await fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              name:value,
              completed: false,
            })
          });
          let data = await res.json();
         
           onAdd(data)
          //handleClick(data)
           
        } catch (e) {
          console.log(e);
        }
      };
      const handleChange = (e) => {
    
        setTask(e.target.value);
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
        />
        <button id="btn" onClick={()=>{
           
     
            let name = task.trim();
          
         if(name)
         {
      
          postTodo(name);
         }
        }}>
          +
        </button>
      </div>
   
    </>
  );
};

export default TodoList;
