import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [getTime,setTime] = useState(0)
  let timedetails = '';

  useEffect(()=>{
    if(getTime!==0){
      timedetails = setTimeout(()=>{
        setTime(getTime - 1)
      },1000)
    }
  },[getTime])


  const keyHandler = (event) =>{
    if(event.keyCode === 13){
      if(timedetails !== ''){
        clearTimeout(timedetails)
      }
      let input = document.getElementById("timeCount").value;
      if(!isNaN(input)){
        setTime(parseInt(input));
        console.log(input);
      }
      else{
        setTime(0);
      }
    }
  }



  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={keyHandler} /> sec.
        </h1>
      </div>
      <div id="current-time">{getTime}</div>
    </div>
  )
}


export default App;
