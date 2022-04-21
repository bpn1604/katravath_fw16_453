import React from "react";
import styled from 'styled-components'

function ButtonStyledCom() {
   



const Container = styled.div`
  max-width: 800px;
  padding:20px;
  margin: auto;
  display:grid;
 
  grid-template-columns: repeat(3,1fr);
  font-family: "Josefin Sans", sans-serif;
 
`;
const Defaultbtn = styled.button`
background-color: white;

width: 60%;
  height: 40px;
`;
const Primarybtn = styled.button`
background-color: #2490fe;
color: white;
width: 60%;
  height: 40px;
`;
const Dashedbtn = styled.button`
background-color: white;
border: 1px black dashed;

width: 60%;
  height: 40px;
`;
const Textbtn = styled.button`
background-color: white;
border:none;
font-size:18px;
width: 60%;
margin-top:20px;
  height: 40px;
`;
const Linkbtn = styled.button`
background-color: white;
color:#5194c5;
border:none;
font-size:18px;
margin-top:20px;
width: 60%;
  height: 40px;
`;




  return (
    <>
  
    <Container>
     <Primarybtn>Primary Button</Primarybtn>
     <Defaultbtn>Default Button</Defaultbtn>
     <Dashedbtn>Dashed Button</Dashedbtn>
     <Textbtn>Text Button</Textbtn>
     <Linkbtn>Link Button</Linkbtn>
    </Container>
  </>
  )
}

export default ButtonStyledCom