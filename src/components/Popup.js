import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";

function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup}>
      <DialogTitle>Dialog title</DialogTitle>
      <DialogContent>Dialog content</DialogContent>
    </Dialog>
  );
}

export default Popup;
