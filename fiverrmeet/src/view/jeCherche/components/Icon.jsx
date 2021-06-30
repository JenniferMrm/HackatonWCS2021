import React from "react";
import { IconButton } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    borderRadius: "100%",

    justifySelf: "center",
  },
  badge: {
    color: "grey",
  },
  icon: {
    width: 50,
    borderRadius: "100%",
    padding: 10,
    alignSelf: "center",
  },
  image: {
    width: 40,
    color: "white",
  },
  title: {
    color: "#017940",
    fontSize: "10px",
    textAlign: "center",
  },

  contain: {
    justifyItems: "center",
  },
});

function Icon({ color, url, title }) {
  const classes = useStyles();
  const [invisible, setInvisible] = React.useState(true);
  const handleInvisible = () => {
    setInvisible(!invisible);
    console.log(title)

  };

  return (
    <div className={classes.contain}>
      <IconButton className={classes.button}>
        <Badge
          className={classes.badge}
          badgeContent="✔️"
          invisible={invisible}
          onClick={handleInvisible}
        >
          <div className={classes.icon} style={{ backgroundColor: color }}>
            <img className={classes.image} src={url} alt="lifestyle"></img>
          </div>
        </Badge>
      </IconButton>
      <p className={classes.title}>{title}</p>
    </div>
  );
}

export default Icon;
