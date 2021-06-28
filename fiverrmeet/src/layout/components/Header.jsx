import React from "react";
import { makeStyles } from "@material-ui/core";
import MenuBurger from "./components/MenuBurger";

const useStyles = makeStyles({
  logo: {
    height: "50px",
    paddingLeft: "10px",
  },
  headerContainer: {
    width: "100%",
    height: "80px",
    display: "flex",
    justifyContent: "start",
    alignItems: "end",
    position: "fixed",
    top: 0,
  },
});

function Header(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.headerContainer}>
        <img
          className={classes.logo}
          alt="logo"
          src="./assets/Fiverr.png"
        ></img>
        <MenuBurger />
      </div>
    </div>
  );
}

export default Header;
