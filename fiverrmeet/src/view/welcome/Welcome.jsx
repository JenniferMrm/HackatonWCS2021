import React from "react";
import { useHistory } from "react-router-dom";
import "./Welcome.css";

function Accueil(props) {
  const history = useHistory()
 setTimeout(() =>{
   history.push('/Login')
 },4990)

  return <div>
    <img className = "logo"
    id="logo-accueil" 
    alt="logoaccueil"
    src="./assets/Logo.png"/>
  </div>;
}

export default Accueil;
