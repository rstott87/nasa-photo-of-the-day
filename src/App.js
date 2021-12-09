import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'
import "./App.css";
import Fetcher from "./Fetcher"
const axios = require('axios');





const BlueH1 = styled.h1 `
    color: royalblue;
    font-size: 40px;
    padding: 10px
`
const StyledDiv = styled.div`
background-color:#E9E1DF;
border-radius: 30px;
text-align: center;
border: 10px solid black;
margin:100px;
`
function App() {
  return (
      <StyledDiv className = "container">
        <BlueH1> Nasa's Photo of The Day </BlueH1>
        <Fetcher/>
      </StyledDiv>
  );
}

export default App;

