import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  image: {
    width: "230px",
    heigth: "330px",
    display: "flex",
    margin: "auto",
    marginTop: "30px",
    borderRadius: "50%",
  },
  fav_clear_icon: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "60px",
    marginTop: "50%",
  },
  title: {
    display: "flex",
    margin: "auto",
    justifyContent: "center",
  },
  description: {
    display: "flex",
    textAlign: "justify",
    marginRight: "30px",
    marginTop: "30px",
  },
  image_icons: {
    display: "flex",
    margin: "auto",
    width: "80px",
    height: "80px",
  },
});

function SwipeJC({ name, image, description, icons, title }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} alt={name} src={image} />
      <div className={classes.text}>
        <h2 className={classes.title}>{name}</h2>
        <p className={classes.description}>{description}</p>
      </div>
      <div className={classes.fav_clear_icon}>
        <ClearIcon />
        <FavoriteBorderIcon />
      </div>
      <img className={classes.image_icons} src={icons} alt={name.icons} />
      <p className={classes.title_logo}>{title}</p>
    </div>
  );
}

export default SwipeJC;
