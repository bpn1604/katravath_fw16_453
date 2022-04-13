
import './App.css';

import { useState } from 'react';

function App() {
  const [showCounter,setShowCounter]=useState(true)
  return (
    <div className="App">
      <button onClick={setShowCounter(!setShowCounter)}></button>
     <Counter />
     
    </div>
  );
}

export default App;
