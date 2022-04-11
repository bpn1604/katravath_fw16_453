import React from 'react';
import { nanoid } from 'nanoid';

import TodoItem from './TodoItem';
function TodoList() {
  

  const [task,setTask] = React.useState("")
  const [todo,setTodo] = React.useState([])

  const handleChange =(e) =>{

      setTask(e.target.value)
  }

  const handleClick =() =>{

    let taskobj ={
      id:nanoid(),
      title:task,
      status:false
   
    }
    setTodo([taskobj,...todo])
  }
  const handleRemove=(id)=>
  {
    let newTodo=todo.filter((item)=>item.id!=id)
    setTodo(newTodo)

  }

  return (
    <>
     {todo.map((item,index )=> {
          return <TodoItem   color = {index%2==0 ? "#87ffc5":
          "#7f7bff"} key = {item.id}{...item} handleRemove ={handleRemove}/>
      })}
    
      <div id='inputdiv'>
     <input id="input" type={"text"} value={task}  onChange={handleChange} placeholder="Write Something"   />
     <button  id ="btn" onClick={handleClick}>+</button>
     </div>
     
    </>
  )
}

export default TodoList;