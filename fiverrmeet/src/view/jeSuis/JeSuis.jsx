import React from "react";
import { makeStyles } from "@material-ui/core";
import Icon from "../jeCherche/components/Icon";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const icons = [
  {
    url: "./assets/icons/icon01.png",
    color: "#F02300",
    title: "Lifestyle",
  },
  {
    url: "./assets/icons/icon02.png",
    color: "#FF8000",
    title: "Programming & Tech",
  },
  {
    url: "./assets/icons/icon03.png",
    color: "#FFFB01",
    title: "Writing & Translation",
  },
  {
    url: "./assets/icons/icon04.png",
    color: "#D0E500",
    title: "Graphic & Design",
  },
  {
    url: "./assets/icons/icon05.png",
    color: "#1FBF73",
    title: "Music & Audio",
  },
  {
    url: "./assets/icons/icon06.png",
    color: "#017940",
    title: "Digital Marketing",
  },
  {
    url: "./assets/icons/icon07.png",
    color: "#4040FF",
    title: "Video & Animation",
  },
  {
    url: "./assets/icons/icon08.png",
    color: "#9F2BC0",
    title: "Business",
  },
  {
    url: "./assets/icons/icon09.png",
    color: "#FF80AE",
    title: "Data",
  },
];

const useStyles = makeStyles({
  title: {
    fontFamily: "Poppins",
    textAlign: "center",
    marginBottom: "50px",
    borderBottom: "2px  solid",
    color: "#017940",
    marginLeft : "40px",
    marginRight : "40px",
    padding : "10px"

  },

  contain: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gridGap: "10px",
    justifyItems: "center",
  },

  container: {
    margin: "0",
   
  },
  root: {
    background: "linear-gradient(45deg, #4ee89e 30%, #1dbf73 90%)",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(199, 201, 200, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    marginTop: "30px",
    fontFamily: "Poppins",
    fontWeight : "bold"
  },

  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

function JeSuis() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>I am...</h1>
      <div className={classes.contain}>
        {icons.map((icon, index) => (
          <Icon {...icon} key={index} />
        ))}
      </div>
      <Link to={"/swipeICanHelp"} className={classes.link}>
        <Button className={classes.root}>Go !</Button>
      </Link>
    </div>
  );
}

export default JeSuis;
