import React from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useDialogContext } from "../../context/DialogContext";

const DialogComponent = () => {
  const {
    dialogState: { title, message, visible },
    closeDialog,
  } = useDialogContext();
  return (
    <Dialog open={visible}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ bgcolor: "background.default" }}>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
