import logo from './logo.svg';
import './App.css';
import Counter from './day-1/assignments/Counter';
import { useState } from 'react';

function App() {
  const [showCounter,setShowCounter]=useState(true)
  return (
    <div className="App">
      <button onClick={setShowCounter(!setShowCounter)}></button>
     <Counter/>
    
    </div>
  );
}

export default App;
