import React from "react";
import { makeStyles } from "@material-ui/core";
import MenuBurger from "./components/MenuBurger";

const useStyles = makeStyles({
  logo: {
    height: "50px",
    paddingLeft: "10px",
  },

  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "end",
    width: "100%",
    justifyContent: "space-between",
    top: 0,
  },
});

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <img className={classes.logo} alt="logo" src="./assets/Fiverr.png"></img>
      <div className={classes.menuContainer}>
        <MenuBurger />
      </div>
    </div>
  );
}

export default Header;
