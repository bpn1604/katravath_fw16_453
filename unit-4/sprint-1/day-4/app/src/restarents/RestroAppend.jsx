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
         //console.log(data);

        setTodo(data);
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);
  //console.log(todo)
  const handleFourStar=(num)=>
  {

      
           console.log(num);
          if(num==4 || num==3 || num==2)
          {
            let newTodo = todo.filter((item) => (item.restaurant.user_rating.aggregate_rating>num) && (item.restaurant.user_rating.aggregate_rating<num+1)  );
            setTodo(newTodo) 
          }
        //   else if(num==3)
        //   {
        //     let newTodo1 = todo.filter((item) => (item.restaurant.user_rating.aggregate_rating>=3) && item.restaurant.user_rating.aggregate_rating<4  );
        //     setTodos(newTodo1)  
        //   }
        //   else{
        //     let newTodo = todo.filter((item) => (item.restaurant.user_rating.aggregate_rating>=2) && item.restaurant.user_rating.aggregate_rating<3  );
        //     setTodo(newTodo) 
        //   }
        //console.log(newTodo);
  }





  return (
      <div>
   <div>
        <button  onClick={()=>handleFourStar(4)}>4 Star</button>
        <button onClick={()=>handleFourStar(3)} >3 Star</button>
        <button onClick={()=>handleFourStar(2)}>2 Star</button>
       
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
