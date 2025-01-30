import React from "react";
import { Dialog, DialogTitle, DialogActions, Button, Box } from "@mui/material";

const LockerDialog = ({ open, onClose, selectedLocker, updateLockerState }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Locker Selected: {selectedLocker !== null ? selectedLocker + 1 : ""}</DialogTitle>
      <DialogActions>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Button
            onClick={() => updateLockerState("open")}
            sx={{ backgroundColor: "#F90B0B", mb: 1 }}
            variant="contained"
          >
            Open Locker
          </Button>
          <Button
            onClick={() => updateLockerState("reserved")}
            sx={{ backgroundColor: "#71A145", mb: 1 }}
            variant="contained"
          >
            Reserve Locker
          </Button>
          <Button
            onClick={() => updateLockerState("closed")}
            sx={{ backgroundColor: "#F9650B" }}
            variant="contained"
          >
            Close Locker
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default LockerDialog;
