import "./App.css";
import "./Styles/Styles.css";
import './timer.css';

import { useState } from "react";
import TodoList from "./day-1/TodoList";
import Todo from "./day-1/Todo";
import Form from "./day-2/Form";
import Timer from "./day-3/Timer";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <div className="App">
      {/* <button onClick={setShowCounter(!setShowCounter)}></button> */}
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Form/> */}

      <Timer />
    </div>
  );
}

export default App;
