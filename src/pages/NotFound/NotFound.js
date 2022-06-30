import { Button } from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Fragment>
      <div className={classes.face}>
        <div className={classes.band}>
          <div className={classes.red}></div>
          <div className={classes.white}></div>
          <div className={classes.blue}></div>
        </div>
        <div className={classes.eyes}></div>
        <div className={classes.dimples}></div>
        <div className={classes.mouth}></div>
      </div>
      <h1>Oops! Something went wrong!</h1>
      <div className={classes.center}>
        <Link to="/">
          <Button variant="contained" color="primary" sx={{ pt: 1, pb: 1 }}>
            Return to Home
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default NotFound;
