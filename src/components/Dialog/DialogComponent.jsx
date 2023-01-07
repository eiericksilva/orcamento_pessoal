import React from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDialogContext } from "../../context/DialogContext";

const DialogComponent = () => {
  const {
    dialogState: { title, message, visible },
    closeDialog,
  } = useDialogContext();
  return (
    <Dialog open={visible}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
