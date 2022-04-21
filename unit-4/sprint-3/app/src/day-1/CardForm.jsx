import React, { useState } from 'react'
import { Carddiv, Creditcardwrap, Creditfrom } from '../components/CardStyled';
import CreaditCard from './CreaditCard';

function CardForm() {
    const [formData, setFormData] = useState([]
        // showPassword: false,
    );
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
     // console.log(typeof(formData));

  return (
    <>
    <Carddiv>
    <div>
    {
      <CreaditCard key={formData.cvv} {...formData}/>

    }
    </div>
    <Creditfrom>
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


<label>EXPIRY MONTH</label><br/>
                <input
                type="number"
                name="month"
                onChange={handleChange}
                placeholder="09"
              />  <br/>
              <label>EXPIRY YEAR</label><br/>
               <input
              type="number"
              name="year"
              onChange={handleChange}
              placeholder="2020"
            /><br/>
            <label>cvv</label><br/>
               <input
                type="number"
                name="cvv"
                onChange={handleChange}
                placeholder="145"
              /><br/>
              <p>Payment amount </p>
              <input type="submit"  value="PAY" />
              </form>
            </Creditfrom>
    
    
    </Carddiv>
    </>
  )
}

export default CardForm