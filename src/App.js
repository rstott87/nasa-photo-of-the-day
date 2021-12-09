import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./App.css";
const axios = require('axios');


//const altPhoto = "https://picsum.photos/id/237/200/300"



function Info (props) {
  return <div> Here is the Info component <br/>
  <h2>{props.APOD}s</h2>
  </div>
  }

function Photo (props) {
  return <div> Here is the Photo component <br/>
  <h2>{props.info}</h2>
  </div>
  }
   
function Fetcher (props){
  const [APOD, setApod] = useState(" ")
  const [info, setInfo] = useState(" ");
  axios.get('https://rickandmortyapi.com/api')
    .then((resp)=> {
    setApod(resp.data.episodes);
    setInfo(resp.data.characters);
  })
  return( <div>
        <Photo APOD={APOD}/> 
        <Info info={info}/> 
      </div>)
}



function App() {
  return (
    <div className="App">
      <h1> Nasa's Photo of The Day</h1>
      <Fetcher/>
    </div>
  );
}

//ReactDOM.render(<FetchInfo photo={n} />, document.getElementById("root"));

export default App;

