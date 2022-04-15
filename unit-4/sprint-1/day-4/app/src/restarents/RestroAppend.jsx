import React, { useEffect } from "react";
import Todoitem from "./TodoItem";
import TodoList from "./TodoList";

function Todo() {

}




import React from 'react'

function RestroAppend() {
    const [todo, setTodo] = React.useState([]);
  
  useEffect(() => {
    const func = async () => {
      try {
        let res = await fetch("http://localhost:3000/resto");
        let data = await res.json();
         console.log(data);
        //setTodo(data);
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);
  

  return (
    <>
     
      {restro.map((todo, index) => {
        return (
          <Todoitem
            color={index % 2 == 0 ? "#87ffc5" : "#7f7bff"}
            key={todo.id}
            {...todo}
            handleRemove={deleteTodo}
          />
        );
      })}
    </>
  );
}

export default RestroAppend
