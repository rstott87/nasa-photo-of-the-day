import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { useEffect } from "react";
import styled from 'styled-components'
import "./App.css";
import Photo from "./Photo";


const axios = require('axios');

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const BlueH1 = styled.h1 `
    color: royalblue;
`

function Title (props) {
  return <div>  
          <div>{props.title}</div>
  </div>
  }

function Fetcher (props){
  const [APOD, setApod] = useState(" ");
  const [title, setTitle] = useState(" ");
  useEffect(()=> {  axios.get('https://api.nasa.gov/planetary/apod?api_key=Ec0fQGaOpvWcJefHxrVvCHBtJzTju76T0wLZbux8')
  .then((resp)=> {
    setApod(resp.data.url);
    setTitle(resp.data.title);
  })
  .catch(err => console.log(err));
},[]);
  return( <div>
        <Title title={title}/>
        <Photo APOD={APOD}/>  
      </div>)
}

function App() {
  return (
    <WrapperDiv>
      <BlueH1> Nasa's Photo of The Day</BlueH1>
      <Fetcher/>
    </WrapperDiv>
  );
}

//ReactDOM.render(<FetchInfo photo={n} />, document.getElementById("root"));

export default App;

