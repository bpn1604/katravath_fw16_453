import React, { useEffect } from 'react'
import Todoitem from './TodoItem';
import TodoList from './TodoList';

function Todo() {
    const [todo, setTodo] = React.useState([]);

    const onAdd=(todos) =>{
        setTodo([...todo,todos])

    }
    useEffect(() => {
        const func = async () => {
          try {
            let res = await fetch("http://localhost:3000/todo");
            let data = await res.json();
            console.log(data);
             setTodo(data);
          } catch (e) {
            console.log(e);
          }
        };
        func();
      }, []);

      const handleRemove = (id) => {
        let newTodo = todo.filter((item) => item.id != id);
        setTodo(newTodo);
      };
    
  
  return (
    <>
    <TodoList onAdd={onAdd}/>
       {todo.map((todo, index) => {
        return (
          <Todoitem 
            color={index % 2 == 0 ? "#87ffc5" : "#7f7bff"}
            key={todo.id}
            {...todo}
            handleRemove={handleRemove}
          />
        );
      })}
    
    </>
  )
}

export default Todo