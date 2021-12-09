import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Title from "./Title"
import Explanation from "./Explanation"
import Photo from "./Photo"
function Fetcher (props){

    const [APOD, setApod] = useState(" ");
    const [title, setTitle] = useState(" ");
    const [info, setInfo] = useState(" ");
    useEffect(()=> {  axios.get('https://api.nasa.gov/planetary/apod?api_key=Ec0fQGaOpvWcJefHxrVvCHBtJzTju76T0wLZbux8')
    .then((resp)=> {
      setApod(resp.data.url);
      setTitle(resp.data.title);
      setInfo(resp.data.explanation)
    })
    .catch(err => console.log(err));
  },[]);
    return( <div>
          <Title title={title}/>
          <Photo APOD={APOD}/>
          <Explanation explanation = {info}/>
        </div>)
  }

  export default Fetcher;    
