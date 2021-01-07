import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Badge, Grid, IconButton, InputBase, Toolbar } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item sm={4} style={{ border: "1px solid red" }}>
              <InputBase />
            </Grid>
            <Grid item sm={8} style={{ border: "1px solid green" }}>
              <IconButton>
                <Badge badgeContent={6} color="secondary">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={6} color="secondary">
                  <ChatBubbleOutlineIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge color="secondary">
                  <PowerSettingsNewIcon />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
