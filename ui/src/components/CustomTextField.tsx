import React from "react";

import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    padding: "6px 8px",
    backgroundColor: "var(--rlm-card-color)",
    fontSize: "14px",
    lineHeight: "17px",
    color: "var(--rlm-text-color, #000)",
  },
  "& input": {
    padding: "0",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--rlm-border-color,rgba(227, 227, 227, 0.7))",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: "primary",
      borderWidth: "1px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "primary",
      borderWidth: "1px",
    },
  },
});
export default CustomTextField;
