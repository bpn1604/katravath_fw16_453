import React, { useEffect } from "react";
import RestroShow from "./RestroShow";
import Sorting from "./Sorting";

function RestroAppend() {
    const [todo, setTodo] = React.useState([]);
    const [todos, setTodos] = React.useState([]);
  
  useEffect(() => {
    const func = async () => {
      try {
        let res = await fetch("http://localhost:3000/resto");
        let data = await res.json();
         console.log(data);

        setTodo(data);
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);
  //console.log(todo)


    const handleFourStar=(e)=>
  {

var num=e.target.value;
console.log(num)

      // if(num===4)
      // {
      //  let newTodo = todo.filter((item) => (item.restaurant.aggregate_rating>num) && (item.restaurant.aggregate_rating<num+1)  );
      //   console.log(newTodo)
      //   return setTodo(newTodo)
      // }
          //  console.log(num);
          if(num==4)
          {
            let newTodo = todo.filter((item) => (item.restaurant.aggregate_rating>num) && (item.restaurant.aggregate_rating<num+1)  );
            return setTodo(newTodo) 
          }
           if(num==3)
          {
            let newTodo1 = todo.filter((item) => (item.restaurant.aggregate_rating>=num) && item.restaurant.aggregate_rating<num+1  );
            return setTodos(newTodo1)  
          }
          if(num==2)
          {
            let newTodo = todo.filter((item) => (item.restaurant.aggregate_rating>=num) && item.restaurant.aggregate_rating<num+1 );
            return setTodo(newTodo) 
          }
       // console.log(newTodo);
  }




  



  return (
      <div>
   <div>
        <button value={4} onClick={handleFourStar}>4 Star</button>
        <button value={3} onClick={handleFourStar} >3 Star</button>
        <button value={2} onClick={handleFourStar}>2 Star</button>
       
    </div>

    {/* <div id='container'>
      
      {todos.map((todo, index) => {
        return (
            <RestroShow
          
            color={index % 2 == 0 ? "#87ffc5" : "#7f7bff"}
            key={todo.restaurant.id}
            {...todo}
           
          />
        );
      })}
      </div> */}
      {/* <div id='container'>
      
      {todos.map((todo, index) => {
        return (
            <RestroShow
          
            color={index % 2 == 0 ? "#87ffc5" : "#7f7bff"}
            key={todo.restaurant.id}
            {...todo}
           
          />
        );
      })}
      </div> */}

   <div id='container'>
      
      {todo.map((todo, index) => {
        return (
            <RestroShow
          
            color={index % 2 == 0 ? "#87ffc5" : "#7f7bff"}
            key={todo.restaurant.id}
            {...todo}
           
          />
        );
      })}
      </div>
     
      </div>
  );
 
}

export default RestroAppend
