import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  picture: {
    width: "90%",
    margin: "15px",
    borderRadius: "10%",
    "&:hover": {
      opacity: "0,5",
    },
  },
  img: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    border: "none",
    background: "none",

    "&:hover": {
      opacity: "0.8",
    },
  },
  // back: {
  //    backgroundColor: "black",
  // }
}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <div className={classes.back}>
      <div className={classes.img}>
      <Link to={"/needHelp"}>
        <button className={classes.button}> 
        <img
          className={classes.picture}
          alt="picture"
          src="./assets/help.png"
        />
        </button>
        </Link>
        <button className={classes.button} to="/ICanHelp"
                  component={Link}>
        <img
          className={classes.picture}
          alt="picture"
          src="./assets/help1.png"
        />
        </button>
      </div>
    </div>
  );
}
