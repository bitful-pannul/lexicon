import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Stack from "@mui/material/Stack";
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
    console.log("params.word", params.word);
    if (params.word) {
      //if I'm already in the search screen I don't push on to the stack (to navigate back before I searched something)
      navigate("../apps/lexicon/" + link, {
        replace: true,
      });
      navigate(0);
    } else {
      navigate("/apps/lexicon/" + link);
    }
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
        })
      ) : (
        <Typography variant={"subtitle2"} color='text.secondary'>
          no words in this space, add one to start
        </Typography>
      )}
    </Stack>
  );
};
export default WordItem;
