import React from "react";

import Paper from "@mui/material/Paper";

function WrapperBackground({ children }: any) {
  return (
    <Paper
      component="form"
      variant="outlined"
      sx={{
        margin: "12px 20px",
        backgroundColor: "#fff",
        border: "1px solid rgba(51, 51, 51, 0.12)",
        borderRadius: "6px",
        boxSizing: "border-box",
        padding: "16px",
      }}
    >
      {children}
    </Paper>
  );
}

export default WrapperBackground;
