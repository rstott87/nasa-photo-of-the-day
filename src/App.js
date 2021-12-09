import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'
import "./App.css";
import Fetcher from "./Fetcher"
const axios = require('axios');

const BlueH1 = styled.h1 `
    color: royalblue;
    height: 100px;
    font-size: 40px;
    padding: 50px
`
const StyledDiv = styled.div`
text-align: center;
border: 10px solid black;
margin-left:180px;
margin-right:180px;
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

