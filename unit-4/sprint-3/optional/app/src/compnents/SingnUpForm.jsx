import React, { useState } from 'react'

function SingnUpForm() {
    const [form, setForm] = useState({});
  
const post=async (formData)=>
{
   // console.log(formData);
    try {
         let res = await fetch(`https://reqres.in/api/register`,{
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            email:formData.email,
            password:formData.password
   
          }),
        });
        let data = await res.json();
        console.log(data);
        if(data.id)
        {
            console.log("Account Created");
        }
        else{
            console.log("faild");
        }
      
        
        
    } catch (error) {
        console.log(error);
    }
}

    const handleChange = (e) => {
      const field = e.target;
     // console.log(e.target);
      setForm({
        ...form,
        [field.name]: field.value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
  
      post(form)
    };
    //console.log(form);
    return (
      <div>
          
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>UserName :</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter YOUR NAME"
              />
            </div>
            <div>
              <label>Password :</label>
              <input type="password" name="password" onChange={handleChange} />
            </div>
            <div>
              <input type="submit" value="Singn Up" />
            </div>
          </form>
        </div>
      </div>
    )
}

export default SingnUpForm