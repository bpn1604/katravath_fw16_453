import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
  return (
  <div>
      <h1>Counter</h1>
      <div>
          <button onClick={()=>setCount(count+1)}>Inc</button>
          <button onClick={()=>setCount(count-1)}>Dec</button>

      </div>
  </div>
  )
}

export default Counter