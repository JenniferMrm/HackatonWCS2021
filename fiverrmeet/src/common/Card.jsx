import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  image: {
    width: "250px",
    heigth: "370px",
    display: "flex",
    margin: "auto",
    borderRadius: "50%",
  },
  favoriteIcon: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    margin: "auto",
  },
  description: {},
});

function SwipeJC({ name, image, description }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} alt={name} src={image} />
      <div className={classes.favoriteIcon}>
        <ClearIcon style={{ fontSize: "60px" }} />
        <FavoriteBorderIcon style={{ fontSize: "60px" }} />
      </div>
      <h2 className={classes.title}>{name}</h2>
      <p className={classes.description}>{description}</p>
      {/* <img className={classes.image_icons} src={icons} alt={name.icons} /> */}
    </div>
  );
}

export default SwipeJC;
