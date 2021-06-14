import { AppBar, Grid, Toolbar } from '@material-ui/core';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item sm={6} style={{ border: '1px solid red' }}></Grid>
          <Grid item sm={6} style={{ border: '1px solid green' }}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
