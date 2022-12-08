import React from "react";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const WordItem = ({ items, clearSearch, largeText = false }: any) => {
  const navigate = useNavigate();
  const onKeyDown = (e: any, link: string) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      Go(link);
    }
  };
  const Go = (link: string) => {
    navigate("/apps/lexicon/" + link);
    clearSearch();
  };
  //          tabindex={0}
  return (
    <Stack direction="column" padding={"5px"}>
      {items.map((item: any, index: number) => {
        return (
          <Stack
            key={"search-result-" + index}
            sx={{
              p: "6px 8px",
              "&:hover": {
                backgroundColor: "#F9F9F9",
              },
              "&:focus": {
                backgroundColor: "#F9F9F9",
                outline: "none",
              },
            }}
            role="button"
            tabIndex={0}
            aria-label={"navigate to " + item.label}
            onKeyDown={(e) => onKeyDown(e, item.navlink)}
            onClick={() => {
              Go(item.navlink);
            }}
          >
            <Typography
              variant={largeText ? "subtitle1" : "subtitle2"}
              fontWeight={"bold"}
              sx={{ wordBreak: "break-word" }}
            >
              {item.label}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};
export default WordItem;
