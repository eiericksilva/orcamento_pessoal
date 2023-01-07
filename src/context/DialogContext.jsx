import { createContext, useContext, useState } from "react";

const DialogContext = createContext({});

const DialogProvider = ({ children }) => {
  const [dialogState, setDialogState] = useState({ visible: false });
  const openDialog = (payload) => {
    setDialogState({ ...payload, visible: true });
  };
  const closeDialog = () => {
    setDialogState({ visible: false });
  };
  return (
    <DialogContext.Provider value={{ dialogState, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  );
};
export const useDialogContext = () => {
  const context = useContext(DialogContext);
  return context;
};
export { DialogContext, DialogProvider };
