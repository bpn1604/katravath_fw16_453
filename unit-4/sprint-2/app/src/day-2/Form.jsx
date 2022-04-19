import React, { useState } from "react";

function Form({ onAdd }) {
  const [formData, setFormData] = useState({
    // showPassword: false,
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
   // console.log(inputName);
   // console.log(e.target.value);
    if (e.target.type === "checkbox") {
    //  console.log(e.target.value, e.target.checked);
      setFormData({
        ...formData,
        [inputName]: e.target.name,
      });
    }

     else {
      setFormData({
        ...formData,
        [inputName]: e.target.value,
      });
    }
  };

  const postTodo = async (value) => {
    console.log(value);
    try {
      let res = await fetch(`http://localhost:3000/form1`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          value,
        }),
      });
      let data = await res.json();
      onAdd(data);

      //handleClick(data)
    } catch (e) {
      console.log(e);
    }
  };

  const haddleSubmit = (e) => {
    e.preventDefault();
    var value = formData;
    if (value) {
      postTodo(value);
    }
  };
  return (
    <form onSubmit={haddleSubmit}>
      

      <table className="table" border="1">
        <tbody>
          <tr>
            <td className="houseId">
              {" "}
              <label>Name :</label>
            </td>
            <td className="houseName">
              {" "}
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter YOUR NAME"
              />
            </td>
          </tr>

          <tr>
            <td>
              {" "}
              <label>Maritus Status</label>
            </td>
            <td>
              <input type="checkbox" name="married" onChange={handleChange} />
              married
              <br />
              <input type="checkbox" name="Unmarried" onChange={handleChange} />
              Unmarried
            </td>
          </tr>
          <tr>
            <td>
              <label>Select Department</label>
            </td>
            <td>
              {" "}
              <select name="Department" onChange={handleChange} id="cars">
                <option value="JR Software">JR Software</option>
                <option value="Sr Software">SR Software</option>
                <option value="manager">Manager</option>
                <option value="Account">Account</option>
                <option value="Data Analaty">Data Analayte </option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label>Enter Address</label>
            </td>
            <td>
              {" "}
              <input
                type="text"
                name="Address"
                placeholder="Enter YOUR Address"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Salary</label>
            </td>
            <td>
              {" "}
              <input
                type="text"
                placeholder="Enter yours Salary"
                name="Salary"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <input type="submit" name="submit" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default Form;
