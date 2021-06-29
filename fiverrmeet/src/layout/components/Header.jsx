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
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "end",
    width: "100%",
  },
});

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerContainer}>
        <img
          className={classes.logo}
          alt="logo"
          src="./assets/Fiverr.png"
        ></img>
        <div className={classes.menuContainer}>
          <MenuBurger />
        </div>
      </div>
    </div>
  );
}

export default Header;
