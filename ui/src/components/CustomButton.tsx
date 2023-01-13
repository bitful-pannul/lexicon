import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)({
  boxShadow: "none",
  textTransform: "capitalize",
  fontSize: "14px",
  fontWeight: 600,
  padding: "8px 7px",
  border: "1px solid",
  borderRadius: "6px",
  lineHeight: "16px",
  //color: "rgba(51, 51, 51, 0.4)",
  backgroundColor: "rgba(78, 158, 253, 0.09)",
  borderWidth: 0,
  "&:hover": {
    // backgroundColor: "#0069d9",
    //borderColor: "#0062cc",
    boxShadow: "none",
    backgroundColor: "rgba(78, 158, 253, 0.09)",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "rgba(78, 158, 253, 0.09)",

    //backgroundColor: "#0062cc",
    // borderColor: "#005cbf",
  },
  "&:focus": {
    //boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default CustomButton;
