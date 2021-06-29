import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { LockOpenOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {},
});

function Login(props) {
  const classes = useStyles();
  return <div></div>;
}

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<LockOpenOutlined />}
      >
        Se connecter avec Fiverr
      </Button>

    </div>
  );
}