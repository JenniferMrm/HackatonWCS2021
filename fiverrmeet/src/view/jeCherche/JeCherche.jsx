import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  icon: { 
    width: 50, 
    color: "white"
  },
  div : {
    width: 50,
    borderRadius: "100%", 
    backgroundColor : "#F02300",
    margin : 10,
    padding : 10
  }, 

  contain : {
    display: "flex"

  }, 
  
  lifestyle : {
    width: 50, 
    borderRadius: "100%", 
    backgroundColor : "#F02300",
    margin : 15,
    padding : 15
  },
  dev : {
    width: 50, 
    borderRadius: "100%", 
    backgroundColor : "#FF8000",
    margin : 15,
    padding : 15
  },
  write : {
    width: 50, 
    borderRadius: "100%", 
    backgroundColor : "#FFFB01",
    margin : 15,
    padding : 15
  },
  design : {
    width: 50, 
    borderRadius: "100%", 
    backgroundColor : "#D0E500",
    margin : 15,
    padding : 15
  },
  audio : {
    width: 50, 
    borderRadius: "100%", 
    backgroundColor : "#1FBF73",
    margin : 15,
    padding : 15
  },
  marketing : {
    width: 50, 
    borderRadius: "100%", 
    backgroundColor : "#017940",
    margin : 15,
    padding : 15
  },
  video : {
    width: 50, 
    borderRadius: "100%", 
    backgroundColor : "#4040FF",
    margin : 15,
    padding : 15
  },
  business : {
    width: 50,
    borderRadius: "100%", 
    backgroundColor : "#9F2BC0",
    margin : 15,
    padding : 15
  },
  data : {
    width: 50, 
    borderRadius: "100%", 
    backgroundColor : "#FF80AE",
    margin : 15,
    padding : 15
  },

});

function JeCherche(props) {
  const classes = useStyles();

  return (
    <div className={classes.contain}>
   
      <div className={classes.lifestyle}>
        <img className={classes.icon} src="./assets/icons/001-lifestyle.png" alt="lifestyle"></img>
      </div>
      <div className={classes.dev}>
        <img className={classes.icon} src="./assets/icons/002-web-programming.png" alt="dev"></img>
      </div>
      <div className={classes.write}>
        <img className={classes.icon} src="./assets/icons/003-notes.png" alt="writing"></img>
      </div>
      <div className={classes.design}>
        <img className={classes.icon} src="./assets/icons/004-computer.png" alt="design"></img>
      </div>
      <div className={classes.audio}>
        <img className={classes.icon} src="./assets/icons/005-headphones.png" alt="audio"></img>
      </div>
      <div className={classes.marketing}>
        <img className={classes.icon} src="./assets/icons/006-social-media.png" alt="marketing"></img>
      </div>
      <div className={classes.video}>
        <img className={classes.icon} src="./assets/icons/007-online-video.png" alt="video"></img>
      </div>
      <div className={classes.business}>
        <img className={classes.icon} src="./assets/icons/008-hand-shake.png" alt="business"></img>
      </div>
      <div className={classes.data}>
        <img className={classes.icon} src="./assets/icons/009-data.png" alt="data"></img>
      </div>
    </div>
  );
}

export default JeCherche;
