import React from "react";
import { Box, Button, Typography } from "@mui/material";

const LockerInputs = ({ rows, setRows, cols, setCols, initializeLockers }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        minHeight:'100vh',
        backgroundImage: `url('/unsplash_VLaKsTkmVhk.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: 2,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#1F1F1F",
            padding: 1,
            borderRadius: 1,
            marginBottom: 2,
            fontFamily: "IBM Plex Sans",
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "25.2px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Create Your Locker
        </Typography>
        <input
          type="text"
          placeholder="Number of Rows"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
          style={{
            marginBottom: 10,
            padding: 8,
            borderRadius: 5,
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "16px",
            backgroundColor: "#CCCCCC",
            color: "#000000",
          }}
        />
        <input
          type="text"
          placeholder="Number of Columns"
          value={cols}
          onChange={(e) => setCols(Number(e.target.value))}
          style={{
            marginBottom: 10,
            padding: 8,
            borderRadius: 5,
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "16px",
            backgroundColor: "#CCCCCC",
            color: "#000000",
          }}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#f9650b" }}
          onClick={initializeLockers}
        >
          Create Lockers
        </Button>
      </Box>
    </Box>
  );
};

export default LockerInputs;
