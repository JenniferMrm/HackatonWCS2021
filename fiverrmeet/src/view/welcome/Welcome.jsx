import React from "react";
import { useHistory } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const history = useHistory()
 setTimeout(() =>{
   history.push('/Login')
 },4990)

  return <div
  style={{
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
  }}>
    <img 
    id="logo-accueil" 
    alt="logoaccueil"
    src="./assets/Logo2.png"/>
    <h3 id="h3">Welcome</h3>
  </div>;
}

export default Welcome;
