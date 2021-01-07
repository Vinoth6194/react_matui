import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
