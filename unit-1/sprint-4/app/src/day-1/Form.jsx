import React from 'react'


function Form() {

   function handleSubmit(event) {
        event.preventDefault();
        
      }
    
    
        return (
          <form onSubmit={handleSubmit}>
            <label>
              Upload file:
              <input type="file"  />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        )

//   return (
//     <div> <form >
//     <input type="text" name="name" /><br />
//     <input type="password" name="password" /><br/>
//     <input type="number" name="Age"/><br/>
 

//     <input type="date" id="birthday" name="birthday" /><br/><br/>
//     <input type="file" />
   
//     <input type="submit" name='submit' />
    
// </form></div>
//   )
 }

export default Form