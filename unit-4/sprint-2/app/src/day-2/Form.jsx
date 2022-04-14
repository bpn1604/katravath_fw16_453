import React, { useState } from 'react'

function Form() {
    const [formData,setFormData]=useState({

    })

const handleChange=(e)=>
{

    const inputName=e.target.name;
    console.log(inputName);
    if(e.target.type==="checkbox")
    {
        console.log(e.target.value,e.target.checked);
        setFormData({
            ...formData,
            [inputName]:e.target.checked,
        })
    }
    else if(e.target.type==="file")
    {
        console.log(e.target.value,e.target.file);
        setFormData({
            ...formData,
            [inputName]:e.target.files,
        })
    }
    else
     {
        setFormData({
            ...formData,
            [inputName]:e.target.value,
        })
     }

}
const haddleSubmit=(e)=>
{
    e.preventDefault()
   
}
  return (
    <form onClick={haddleSubmit}>
        <input type="text" name="name" onChange={handleChange}/><br />
        <input type="password" name="password" onChange={handleChange}/><br/>
        <input type="number" name="Age" onChange={handleChange}/><br/>
     

        <input type="date" id="birthday" name="birthday" onChange={handleChange}/><br/><br/>
        <input type="file"  />
        <input type="submit" name='submit' />
        
    </form>
  )
}

export default Form