import React from "react";
import "./App.css";
const axios = require('axios');

const fetchNasaInfo = () => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=Ec0fQGaOpvWcJefHxrVvCHBtJzTju76T0wLZbux8')
  .then((resp)=> {
    console.log(resp);
})
};
fetchNasaInfo();
function App() {
  return (
    <div className="App">
      <h1> Nasa's Photo of The Day</h1>
    </div>
  );
}

export default App;
