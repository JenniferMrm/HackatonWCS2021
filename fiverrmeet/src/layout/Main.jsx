import { makeStyles } from "@material-ui/core";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const useStyles = makeStyles({
  root: {},
});

function Main(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Main;
