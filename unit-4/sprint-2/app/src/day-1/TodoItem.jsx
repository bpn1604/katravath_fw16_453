import React from 'react'

const  Todoitem = (props) => {
console.log(props)

const {title,id,status,handleRemove,color} = props;


  return (
    <div id="btndiv">
        <h1    >{title}</h1>
        <button style={{color}} className='deletebutton' onClick={()=>handleRemove(id)}></button>
    </div>
  )
}

export default Todoitem;