
import { useState} from 'react';

function Counter() {
    const [count, setCount]=useState(0);

    const handleInc=()=>
    {
        setCount(count+1)
    }
    const handleDec=()=>
    {
        if(count>0)
        {
        setCount(count-1)
        }
    }
    const handleDouble=()=>
    {
        
        setCount(count*2)
    }
    const handleReset=()=>
    {
        setCount(count*0)
    }
  return (
   <>
   <h1>Counter</h1>
   <h1 style={{color :count%2==0 ? "green":"red"}}>{count}</h1>
   <button id='btndiv' onClick={()=>handleInc()}>Increment</button>
   <button  id='btndiv' onClick={()=>handleDec()}>Decrement</button>
   <button id='btndiv' onClick={()=>handleDouble()}>Double</button>
   <button id='btndiv' onClick={()=>handleReset()}>Reset</button>
   </>
   
  )
}

export default Counter