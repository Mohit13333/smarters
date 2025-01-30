import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import LockerGrid from "./LockerGrid";
import LockerDialog from "./LockerDialog";
import LockerInputs from "./LockerInputs";

const LockerManagement = () => {
  const [rows, setRows] = useState(null);
  const [cols, setCols] = useState(null);
  const [lockers, setLockers] = useState([]);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isLockersCreated, setIsLockersCreated] = useState(false);

  const initializeLockers = () => {
    if (rows > 0 && cols > 0) {
      const newLockers = Array.from({ length: rows * cols }, () => "closed");
      setLockers(newLockers);
      setIsLockersCreated(true);
    }
  };

  const handleLockerClick = (index) => {
    setSelectedLocker(index);
    setOpenDialog(true);
  };

  const updateLockerState = (state) => {
    const newLockers = [...lockers];
    newLockers[selectedLocker] = state;
    setLockers(newLockers);
    setOpenDialog(false);
  };

  return (
    <Box sx={{ p: 4, textAlign: "center", backgroundImage: 'url("your-background-image-url")', backgroundSize: "cover", minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>

      </Typography>
      {!isLockersCreated ? (
        <LockerInputs rows={rows} setRows={setRows} cols={cols} setCols={setCols} initializeLockers={initializeLockers} />
      ) : (
        <LockerGrid rows={rows} cols={cols} lockers={lockers} handleLockerClick={handleLockerClick} />
      )}
      <LockerDialog open={openDialog} onClose={() => setOpenDialog(false)} selectedLocker={selectedLocker} updateLockerState={updateLockerState} />
    </Box>
  );
};

export default LockerManagement;
