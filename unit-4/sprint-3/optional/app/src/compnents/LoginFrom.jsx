import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import SingnUpForm from "./SingnUpForm";

function LoginFrom() {
  const [form, setForm] = useState({});
  const { login } = useContext(AuthContext);
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

    login(form);
  };
  //console.log(form);
  return (
    <div>
        <SingnUpForm />
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>UserName :</label>
            <input
              type="email"
              name="username"
              onChange={handleChange}
              placeholder="Enter YOUR NAME"
            />
          </div>
          <div>
            <label>Password :</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFrom;
