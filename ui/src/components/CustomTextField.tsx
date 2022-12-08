import React from "react";

import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    padding: "6px 8px",
    backgroundColor: "#FCFCFC",
    fontSize: "14px",
    lineHeight: "17px",
  },
  "& input": {
    padding: "0",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(227, 227, 227, 0.7)",
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
