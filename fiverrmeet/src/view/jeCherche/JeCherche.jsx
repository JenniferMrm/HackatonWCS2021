import React from "react";
import { Icon, makeStyles } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontFamily: "Poppins",
    textAlign: "center",
  },
  icon: {
    width: 50,
    color: "white",
  },
  div: {
    width: 50,
    borderRadius: "100%",
    backgroundColor: "#F02300",
    margin: 10,
    padding: 10,
  },

  contain: {
    width : "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gridGap: "5px",
  },

  lifestyle: {
    width: 50,
    borderRadius: "100%",
    backgroundColor: "#F02300",
    margin: 15,
    padding: 15,
  },
  dev: {
    width: 50,
    borderRadius: "100%",
    backgroundColor: "#FF8000",
    margin: 15,
    padding: 15,
  },
  write: {
    width: 50,
    borderRadius: "100%",
    backgroundColor: "#FFFB01",
    margin: 15,
    padding: 15,
  },
  design: {
    width: 50,
    borderRadius: "100%",
    backgroundColor: "#D0E500",
    margin: 15,
    padding: 15,
  },
  audio: {
    width: 50,
    borderRadius: "100%",
    backgroundColor: "#1FBF73",
    margin: 15,
    padding: 15,
  },
  marketing: {
    width: 50,
    borderRadius: "100%",
    backgroundColor: "#017940",
    margin: 15,
    padding: 15,
  },
  video: {
    width: 50,
    borderRadius: "100%",
    backgroundColor: "#4040FF",
    margin: 15,
    padding: 15,
  },
  business: {
    width: 50,
    borderRadius: "100%",
    backgroundColor: "#9F2BC0",
    margin: 15,
    padding: 15,
  },
  data: {
    width: 50,
    borderRadius: "100%",
    backgroundColor: "#FF80AE",
    margin: 15,
    padding: 15,
  },
});

function JeCherche(props) {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.title}>I'm searching for...</h1>
      <div className={classes.contain}>
        <IconButton>
          <div className={classes.lifestyle}>
            <img
              className={classes.icon}
              src="./assets/icons/001-lifestyle.png"
              alt="lifestyle"
            ></img>
          </div>
        </IconButton>

        <IconButton>
          <div className={classes.dev}>
            <img
              className={classes.icon}
              src="./assets/icons/002-web-programming.png"
              alt="dev"
            ></img>
          </div>
        </IconButton>

        <IconButton>
          <div className={classes.write}>
            <img
              className={classes.icon}
              src="./assets/icons/003-notes.png"
              alt="writing"
            ></img>
          </div>
        </IconButton>

        <IconButton>
          <div className={classes.design}>
            <img
              className={classes.icon}
              src="./assets/icons/004-computer.png"
              alt="design"
            ></img>
          </div>
        </IconButton>

        <IconButton>
          <div className={classes.audio}>
            <img
              className={classes.icon}
              src="./assets/icons/005-headphones.png"
              alt="audio"
            ></img>
          </div>
        </IconButton>
        <IconButton>
          <div className={classes.marketing}>
            <img
              className={classes.icon}
              src="./assets/icons/006-social-media.png"
              alt="marketing"
            ></img>
          </div>
        </IconButton>
        <IconButton>
          <div className={classes.video}>
            <img
              className={classes.icon}
              src="./assets/icons/007-online-video.png"
              alt="video"
            ></img>
          </div>
        </IconButton>
        <IconButton>
          <div className={classes.business}>
            <img
              className={classes.icon}
              src="./assets/icons/008-hand-shake.png"
              alt="business"
            ></img>
          </div>
        </IconButton>
        <IconButton>
          <div className={classes.data}>
            <img
              className={classes.icon}
              src="./assets/icons/009-data.png"
              alt="data"
            ></img>
          </div>
        </IconButton>
      </div>
    </div>
  );
}

export default JeCherche;
