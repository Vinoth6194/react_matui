import React from "react";
import { Alert } from "@material-ui/lab";

import Snackbar from "@material-ui/core/Snackbar";

function Notification(props) {
  const { notify, setNotify } = props;
  return (
    <>
      <Snackbar
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
