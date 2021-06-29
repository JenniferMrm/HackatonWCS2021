import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 320,
    color: "#4E96AF",
  },

  burger: {
    color: "black",
    height: "60px",
    textAlign: "center",
    fontWeight: "bold",
    margin: "10px",
  },

  puces: {
    listStyle: "none",
  },

  home: {
    border: "none",
    color: "black",
    padding: "20px 0",
    backgroundColor: "white",
    fontSize: "15px",
    textAlign: "start",
  },

  needHelp: {
    border: "none",
    color: "black",
    padding: "20px 0",
    backgroundColor: "white",
    fontSize: "15px",
  },

  canHelp: {
    border: "none",
    color: "black",
    padding: "20px 0",
    backgroundColor: "white",
    fontSize: "15px",
  },

  menuicon: {
    color: "black",
    fontSize: "35px",
    marginLeft: "10px",
  },

  menuBurgerContainer: {
    width: "100%",
    alignSelf: "end",
  },
});

export default function MenuBurger() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "white", height: "100%" }}
    >
      <List>
        <div className={classes.menuBurgerList}>
          <ul className={classes.puces}>
            <li>
              <Button
                className={classes.home}
                to="/home"
                component={Link}
                style={{ textDecoration: "none", backgroundColor: "white" }}
              >
                <strong>HOME PAGE</strong>
              </Button>
            </li>
            <li>
              <Button
                className={classes.needHelp}
                to="/needHelp"
                component={Link}
                style={{ textDecoration: "none", backgroundColor: "white" }}
              >
                <>
                  <strong>I'M SEARCHING FOR HELP</strong>{" "}
                </>
              </Button>
            </li>
            <li>
              <Button
                className={classes.canHelp}
                to="/ICanHelp"
                component={Link}
                style={{ textDecoration: "none", backgroundColor: "white" }}
              >
                <>
                  <strong>I CAN HELP</strong>{" "}
                </>
              </Button>
            </li>
          </ul>
        </div>
      </List>
    </div>
  );

  return (
    <div className={classes.menuBurgerContainer}>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className={classes.burger}
          >
            <ListItemIcon>
              <MenuIcon className={classes.menuicon} />
            </ListItemIcon>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
