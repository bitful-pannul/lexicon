import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const WordItem = ({ items, clearSearch, largeText = false }: any) => {
  const navigate = useNavigate();
  const params = useParams();
  console.log("params", params);
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
      {items?.length > 0 ? (
        items.map((item: any, index: number) => {
          return (
            <Stack
              key={"search-result-" + index}
              sx={{
                position: "relative",
                p: "6px 8px",
                borderRadius: "6px",
                "&:hover > #background": {
                  backgroundColor: "var(--rlm-border-color, #e6e6e6)",
                  transition: ".25s ease",
                },
                "&:focus > #background": {
                  backgroundColor: "var(--rlm-border-color, #e6e6e6)",
                  transition: ".25s ease",
                  outline: "none",
                },
                "&:focus ": {
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
              <Box
                id="background"
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  opacity: ".5",
                  zIndex: 10,
                }}
              ></Box>
              <Typography
                variant={largeText ? "subtitle1" : "subtitle2"}
                fontWeight={"bold"}
                sx={{ wordBreak: "break-word", zIndex: 11 }}
                color="var(--rlm-text-color, #000)"
              >
                {item.label}
              </Typography>
            </Stack>
          );
        })
      ) : (
        <Typography variant={"subtitle2"} color="var(--rlm-text-color, #000)">
          no words in this space, add one to start
        </Typography>
      )}
    </Stack>
  );
};
export default WordItem;
