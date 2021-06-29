import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "white",
    color: "black",
    width: "70%",
    height: "40px",
    borderRadius: "30px",
    margin: "20px",
    fontFamily: "Poppins",
    '&:hover': {
      backgroundColor: "#F0E68C",
    }
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
  }
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.back}>
        <div className={classes.contain}>
        <img className = {classes.icon}
        
        alt="logoaccueil"
        src="./assets/Fiverr_Symbol_Green_RGB.png"/>
          <Button size="small" className={classes.button}>
            Connected with FIVERR
            <SendIcon className={classes.icon2}/>
          </Button>
        </div>
      </div>
    </div>
  );
}
