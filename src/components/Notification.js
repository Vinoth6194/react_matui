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
  const handleClose = (event, reason) => {
    setNotify({
      ...notify,
      isOpen: false,
    });
  };
  const classes = useStyles();
  return (
    <>
      <Snackbar
        className={classes.root}
        open={notify.isOpen}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleClose}
      >
        <Alert severity={notify.type} onClose={handleClose}>
          {notify.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Notification;
