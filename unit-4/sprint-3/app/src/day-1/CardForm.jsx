import React, { useState } from 'react'

function CardForm() {
    const [formData, setFormData] = useState({
        // showPassword: false,
      });
    const handleChange = (e) => {
        const inputName = e.target.name;
        console.log(inputName);
        setFormData({
            ...formData,
            [inputName]: e.target.value,
          });
    }

    const haddleSubmit = (e) => {
        e.preventDefault();
        var value = formData;
        console.log(value)
        
      };

  return (
    <div>
        <form onSubmit={haddleSubmit}>
        <label>CARDHOLDER NAME</label><br/>
        <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter YOUR NAME"
              /><br/>
               <label>CARDHOLDER NUMBER</label><br/>
        <input
                type="text"
                name="number"
                onChange={handleChange}
                placeholder="Enter YOUR NAME"
              /><br/>


<label>EXPIRY MONTH</label>
                <input
                type="number"
                name="month"
                onChange={handleChange}
                placeholder="09"
              />  
              <label>EXPIRY YEAR</label>
               <input
              type="number"
              name="year"
              onChange={handleChange}
              placeholder="2020"
            />
            <label>cvv</label>
               <input
                type="number"
                name="cvv"
                onChange={handleChange}
                placeholder="145"
              />
              <p>Payment amount </p>
              <input type="submit" name="submit" />
              </form>
    </div>
  )
}

export default CardForm