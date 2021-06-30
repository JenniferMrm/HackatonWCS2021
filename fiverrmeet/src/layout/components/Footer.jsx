import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footerContainer: {
    backgroundColor:"white",
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // justifyContent: "start",
    // alignItems: "end",
    position: "fixed",
    bottom: 0,
    boxShadow: "rgba(0,0,0,0.7) 0px 5px 10px",
   
    
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <img
        style={{ width: "20px", padding: "10px" }}
        src="./assets/Logo.png"
        alt="logo"
      ></img>
      <p style={{ fontFamily: "Poppins", fontSize: "12px" }}>
        ©2021 Fiverr - All rights reserved
      </p>
    </div>
  );
}

export default Footer;
