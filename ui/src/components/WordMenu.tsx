import * as React from "react";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { styled, alpha } from "@mui/material/styles";
import {
  useParams,
  useNavigate,
} from "react-router-dom";
import useLexiconStore from "../store/lexiconStore";
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    backgroundColor: "var(--rlm-card-color, #fff)",
    border: "1px solid var(--rlm-border-color,rgba(51, 51, 51, 0.12))",
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.12)",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 14,
        color: "var(--rlm-text-color, #000)",
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: "var(--rlm-border-color, #F9F9F9)",
      },
    },
  },
}));
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { ship, group, word } = useParams();
  const { deleteWord } = useLexiconStore();

  const navigate = useNavigate();
  const handleDelete = () => {
    //navigate back to the current space page
    const space = `${ship}/${group}`;
    navigate("/apps/lexicon/" + space, { replace: true });
    //delete the word (could fail)
     deleteWord(space, word);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        size="small"
      >
        <MoreVertIcon
          sx={{ fontSize: 25, color: "var(--rlm-icon-color, #85898E)" }}
        />
      </IconButton>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleDelete}>Remove word</MenuItem>
      </StyledMenu>
    </div>
  );
}
