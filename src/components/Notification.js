import React from "react";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(9),
  },
}));
function Notification(props) {
  const { notify, setNotify } = props;
  const classes = useStyles();
  return (
    <>
      <Snackbar
        className={classes.root}
        open={notify.isOpen}
        autoHideDuration={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={notify.type}>{notify.message}</Alert>
      </Snackbar>
    </>
  );
}

export default Notification;
