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
            <Grid item>
              <InputBase />
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
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
