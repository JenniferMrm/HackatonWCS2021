import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center"
  },
  image: {
    width: "230px",
    heigth: "330px",
    display: "flex",
    margin: "auto",
    marginTop: "30px",
    borderRadius: "10px"
  },
  fav_clear_icon: {
    display: "flex",
    justifyContent: "space-between",
   fontSize: "60px",
   margin: "20px",
   color: "pink"
  },
  title: {
    display: "flex",
    margin: "20px",
    justifyContent: "center",
    fontFamily : "Pacifico"
  },
  description: {
    display: "flex",
    textAlign: "center",
    // marginRight: "30px",
    marginTop: "30px",
    padding : "10px",
    fontFamily: "Poppins"
  },
  image_icons: {
    display: "flex",
    margin: "auto",
    width: "50px",
    height: "50px",
    marginBottom : "20px",

  },
  card :{
    width : "80%",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center", 
    marginTop: "20px"
  }
});

function SwipeJC({ name, image, description, icons, title }) {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <Card className={classes.card}>
      <img className={classes.image} alt={name} src={image} />
      <div className={classes.text}>
        <h2 className={classes.title}>{name}</h2>
        <img className={classes.image_icons} src={icons} alt={name.icons} />
        <p className={classes.title_logo}>{title}</p>
        <p className={classes.description}>{description}</p>
       
      </div>
      <div>
       
       <Link to="/message"> <IconButton ><FavoriteBorderIcon className={classes.fav_clear_icon}/></IconButton></Link>
     
      </div>
      </Card>
      </div> 
     
     
      
   
  );
}

export default SwipeJC;
