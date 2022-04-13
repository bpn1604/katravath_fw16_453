import React from 'react'

const  Todoitem = (props) => {


const {name,id,email,handleRemove,color} = props;








  return (
    <div id="btndiv">
        <h1>{name}</h1>
        <button style={{color}} className='deletebutton' onClick={()=>handleRemove(id)}></button>
    </div>
  )
}

export default Todoitem;