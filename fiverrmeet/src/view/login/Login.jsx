import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import "./Login.css";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "white",
    color: "black",
    width: "70%",
    height: "40px",
    borderRadius: "30px",
    margin: "20px",
    fontFamily: "Poppins",
    "&:hover": {
      backgroundColor: "#F0E68C",
    },
  },

  back: {
    height: "815px",
  },

  background: {
    backgroundImage: "url('/assets/fondco.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    bottom: "0",
    maxWidth: "100%",
    height: "100%",
  },
  icon: {
    width: "15%",
    marginBottom: "10px",
  },

  contain: {
    position: "relative",
    top: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon2: {
    marginLeft: "20px",
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div id="loginAnimation">
    <div className={classes.background}>
      <div className={classes.back}>
        <div className={classes.contain}>
        <img className = {classes.icon}
        
        alt="logoaccueil"
        src="./assets/Fiverr_Symbol_Green_RGB.png"/>
        <Link to="/Accueil"
        style={{
          textDecoration: 'none',
          color:"inherit",
          width:"100%",
          display:"flex",
          justifyContent:"center"
          
        }}>
          <Button size="small" className={classes.button}>
          <img
            className={classes.icon}
            alt="logoaccueil"
            src="./assets/Fiverr_Symbol_Green_RGB.png"
          />
          <Button size="small" className={classes.button}
                  to="/home"
                  component={Link}>
            Connected with FIVERR
            <SendIcon className={classes.icon2} />
          </Button>
          </Link>
         </div>
      </div>
    </div>
    </div>
  );
}
