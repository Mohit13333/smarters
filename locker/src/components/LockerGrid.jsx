import React from "react";
import { Grid, Paper, Button, Typography, Box } from "@mui/material";

const LockerGrid = ({ rows, cols, lockers, handleLockerClick }) => {
  return (
    <Box
      sx={{
        minWidth: "100vh",
        minHeight: "100vh",
        backgroundColor: "#F6FAF8",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 3,
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: "#7C8B9A", fontWeight: "bold", mb: 2, textAlign: "left" }}
      >
        Lockers.
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <Grid container key={rowIndex} spacing={2} alignItems="center">
            <Grid item>
              <Button
                variant="outlined"
                sx={{ color: "#f9650b", borderColor: "#f9650b" }}
              >
                SELECT ROW
              </Button>
            </Grid>
            {Array.from({ length: cols }).map((_, colIndex) => {
              const index = rowIndex * cols + colIndex;
              return (
                <Grid item key={index} xs>
                  <Paper
                    sx={{
                      width: "100%",
                      height: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        lockers[index] === "open"
                          ? "#feddc9"
                          : lockers[index] === "reserved"
                          ? "#e5f0db"
                          : "#fff",
                      color: "black",
                      fontWeight: "bold",
                      cursor: "pointer",
                      borderRadius: "8px",
                      border: "2px solid #ddd",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        opacity: 0.8,
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                    onClick={() => handleLockerClick(index)}
                  >
                    {index + 1}
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          mt: 5,
        }}
      >
        {[
          { label: "Reserved", color: "#e5f0db" },
          { label: "Open", color: "#feddc9" },
          { label: "Selected", color: "#f9650b" },
        ].map(({ label, color }) => (
          <Box
            key={label}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: color,
              }}
            />
            <Typography variant="body2" sx={{ color: "#363740" }}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LockerGrid;
