import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Controls from "./controls/Controls";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    position: "absolute",
    top: theme.spacing(5),
    padding: theme.spacing(2),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));
function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();
  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }} //* internally the dialog component uses paper component, to target paper we have used classes instead of className as earlier..
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: "1" }}>
            {title}
          </Typography>
          <Controls.Button text="x" color="secondary"></Controls.Button>
        </div>
      </DialogTitle>

      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
