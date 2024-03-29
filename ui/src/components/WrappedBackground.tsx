import React from "react";

import Paper from "@mui/material/Paper";

function WrapperBackground({ styles, children }: any) {
  return (
    <Paper
      variant="outlined"
      sx={{
        margin: "12px 20px",
        backgroundColor: "var(--rlm-card-color, #fff)",
        border: "1px solid var(--rlm-border-color,rgba(51, 51, 51, 0.12))",
        borderRadius: "6px",
        boxSizing: "border-box",
        padding: "16px",
        ...styles,
      }}
    >
      {children}
    </Paper>
  );
}

export default WrapperBackground;
