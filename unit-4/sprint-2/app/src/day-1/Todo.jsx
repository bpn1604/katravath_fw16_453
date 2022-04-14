import React, { useEffect } from "react";
import Todoitem from "./TodoItem";
import TodoList from "./TodoList";

function Todo() {
  const [todo, setTodo] = React.useState([]);

  const onAdd = (todos) => {
    setTodo([...todo, todos]);
  };
  const onDelete = (id) => {
    // console.log(id);

    let newTodo = todo.filter((item) => item.id != id);
    setTodo(newTodo);
  };
  
  useEffect(() => {
    const func = async () => {
      try {
        let res = await fetch("http://localhost:3000/todo");
        let data = await res.json();
        // console.log(data);
        setTodo(data);
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);
  //console.log(todo)

  // setTodo(newTodo);
  const deleteTodo = async (id) => {
    // console.log("hi")

    try {
      await fetch(`http://localhost:3000/todo/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });
      //let data = await res.json();
      //  console.log(data)
      //onAdd(data)
      //handleClick(data)

      onDelete(id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <TodoList onAdd={onAdd} />
      {todo.map((todo, index) => {
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

export default Todo;
