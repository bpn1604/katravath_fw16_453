import React, { useEffect, useState } from "react";
import Form from "./Form";



function AppendInTable() {
    const [formData, setfrom] = React.useState([]);
    const [show,setShow]=useState(true)
    const onAdd = (data) => {
        setfrom([...formData, data]);
      };

    useEffect(() => {
        const func = async () => {
          try {
            let res = await fetch("http://localhost:3000/form1");
            let forDa = await res.json();
             console.log(forDa);
             setfrom(forDa);
          } catch (e) {
            console.log(e);
          }[]
        };
        func();
      }, []);
  return (
   <>
<button onClick={()=>setShow(!show)}>
  {show?"Show Form":"Hide Form"}
</button>
{show?  " ":<Form onAdd={onAdd}/>}
 
  <table className="table" border="1">

        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Address</th>
            <th>Salary</th>
           <th>Department</th>
            <th>Maritus Stutus</th>
            
          </tr>
        </thead>
        <tbody>
          {formData.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.value.name} </td>
                <td className="ownersName">{house.value.Address}</td>
                <td className="address">{house.value.Salary}</td>
                <td className="address">{house.value.Department}</td>
                <td className="rent">{house.value.married ? "married":"Unmarried"}</td>

              </tr>
            );
          })}
        </tbody>
      </table>
   
   </>
  )
}

export default AppendInTable