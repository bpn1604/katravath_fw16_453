import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const login = async (formData) => {
    //  console.log(formData);
   // console.log(formData.usrename)
      try {
          let res= await fetch(`https://reqres.in/api/login`,{
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
            // username:formData.usrename,
            // password:formData.password
            "email": "eve.holt@reqres.in",
    "password": "cityslicka"
            }),
          });
          let data = await res.json();
          if(data.token)
          {
            setLoggedIn(true);
          }
          
          
      } catch (error) {
          console.log(error);
      }
   //
  };
  const logout = () => {
    setLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
