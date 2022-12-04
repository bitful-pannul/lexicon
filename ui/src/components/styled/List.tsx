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
      <Stack direction="column" spacing={1} paddingBottom={5}>
        {items.map((item, index) => {
          return (
            <Paper
              key={index}
              variant="outlined"
              sx={{ padding: "4px 10px", cursor: "pointer", width: "100%" }}
              onClick={() => navigate("/apps/lexicon/" + item.navlink)}
            >
              <Typography
                variant="subtitle1"
                fontWeight={"bold"}
                color="text.secondary"
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
