import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

interface ListProps {
  items: {
    label: string;
    navlink: string | undefined;
  }[];
}

const List = ({ items }: ListProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Stack
        direction="column"
        spacing={1}
        paddingTop={"12px"}
        marginLeft={"20px"}
        marginRight={"20px"}
        marginBottom={"20px"}
      >
        {items.map((item, index) => {
          return (
            <Paper
              key={index}
              variant="outlined"
              sx={{
                padding: "4px 10px",
                cursor: "pointer",
                width: "100%",
                "&:hover": {
                  backgroundColor: "var(--rlm-input-color, #F9F9F9)",
                },
              }}
              onClick={() => navigate("/apps/lexicon/" + item.navlink)}
            >
              <Typography
                variant="subtitle1"
                fontWeight={"bold"}
                color="var(--rlm-text-color, #000)"
                style={{ opacity: 0.5 }}
                sx={{ wordBreak: "break-word" }}
              >
                {item.label}
              </Typography>
            </Paper>
          );
        })}
      </Stack>
    </>
  );
};
/*
 */
export default List;
