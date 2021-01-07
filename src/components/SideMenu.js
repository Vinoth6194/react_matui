import { makeStyles } from "@material-ui/core";
import React from "react";

function SideMenu() {
  const useStyles = makeStyles({
    sideMenu: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      left: "0px",
      width: "320px",
      height: "100%",
      backgroundColor: "#253053",
    },
  });
  const classes = useStyles();
  console.log(classes);
  return <div className={classes.sideMenu}></div>;
}

export default SideMenu;
