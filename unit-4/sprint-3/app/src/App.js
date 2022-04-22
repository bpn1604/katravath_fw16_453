
import './App.css';
import { useContext } from 'react';
import React, { Component } from "react";
import { ThemeContext } from './day-2/ThemeProvider';
import { Border } from './components/Border.styled';
import CardForm from './day-1/CardForm';
import CreaditCard from './day-1/CreaditCard';
import { Bdiv } from './components/CardStyled';
import ButtonStyledCom from './day-1/ButtonStyledCom';
import { ToggleContext } from './day-3/ToggleProvider';
import { Button, ButtonGroup } from '@chakra-ui/button'
import { Switch }  from "@chakra-ui/switch"
function App() {
   const [theme,toggleTheme]=useContext(ToggleContext)
  return (
   <>
  
  
   <Border color={theme} className="App">

   {theme}:<Button onClick={toggleTheme} variant="solid">Button</Button>
 
 
  

 
     <h1>ABCD</h1>
    
     <Switch />

   </Border>
{/* <ButtonStyledCom /> */}
{/* <CardForm /> */}
</>

  );
}

export default App;
