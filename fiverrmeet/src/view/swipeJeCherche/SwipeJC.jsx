import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "../../common/Card";

const useStyles = makeStyles({
  root: {},
});


function SwipeJC() {
  const classes = useStyles();

  const user = [
    {
      image:"./assets/Fiverr_01_Colormatics_Backdrop_00598_ORANGE.jpg",
      name:"Marc Orel",
      description:"Je cherche de l'aide afin de créer un caroussel en Windev"
    },
    {
      image:"",
      name:"",
      description:""
    },
    {
      image:"",
      name:"",
      description:""
    }
  ]

  return (
    <div className={classes.root}>
      {user.map((users, index) => (
        <Card key={index} {...users} />
      ))}
    </div>
  );
}

export default SwipeJC;
