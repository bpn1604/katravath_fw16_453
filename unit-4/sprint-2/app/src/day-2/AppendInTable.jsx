import React, { useEffect } from "react";
import Form from "./Form";



function AppendInTable() {
    const [formData, setfrom] = React.useState([]);
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
          }
        };
        func();
      }, []);
  return (
   <>
   <Form onAdd={onAdd}/>
  <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>password</th>
            <th>Age</th>
            <th>birthday</th>
            <th>file</th>
            
          </tr>
        </thead>
        <tbody>
          {formData.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.value.name} </td>
                <td className="ownersName">{house.value.password}</td>
                <td className="address">{house.value.Age}</td>
                <td className="areaCode">{house.value.birthday}</td>
                <td className="rent">{house.value.file}</td>

              </tr>
            );
          })}
        </tbody>
      </table>
   
   </>
  )
}

export default AppendInTable