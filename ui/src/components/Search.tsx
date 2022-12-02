import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLexiconStore from "../store/lexiconStore";
import List from "./styled/List";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSug, setFilteredSug] = useState<
    { label: string; navlink: string }[]
  >([]);

  const lex = useLexiconStore((state) => state.lex);
  const navigate = useNavigate();
  // ... so you thought map operations in hoon were bad?
  // const wordArray = Object?.values(lex)?.map((w, i) => [Object?.keys(w), Object?.keys(lex)[i]]) // ?.reduce((arr, words, i) => arr.concat(words))

  const wordsArray = () =>
    Object.values(lex)
      .map((w, i) => {
        // map through array of words and attach their corresponding spaces
        return Object.keys(w).map((word, index) => {
          return {
            label: word,
            navlink: Object.keys(lex)[i] + "/" + word,
          };
        });
      })
      .flat();

  // TODO, reimplement arrow key + enter buttons navigation properly

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearchQuery(e.target.value);

    const filtered = wordsArray()?.filter(
      (w) =>
        w.label
          .toString()
          .toLowerCase()
          .indexOf(searchQuery.toString().toLowerCase()) > -1
    );

    console.log("unlnked: ", filtered);

    if (filtered.length === 0) {
      setFilteredSug([
        {
          label: `not found! search web for: ${e.target.value}?`,
          navlink: `dict/${e.target.value}`,
        },
      ]);
    } else {
      setFilteredSug(filtered);
    }

    if (e.target.value === "") {
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
    }
  };

  return (
    <>
      <Stack direction={'column'}>
        <Paper
          component="form"
          variant="outlined"
          sx={{
            p: "1px 1px",
            display: "flex",
            alignItems: "center",
            width: 400,
            backgroundColor: "rgba(229, 231, 235)",
          }}
        >
          <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Lexicon"
            onChange={onChange}
            inputProps={{ "aria-label": "search lexicon" }}
          />
        </Paper>
        {showSuggestions && (
          <div style={{ width: 400, cursor: "pointer" ,}}>
            <List items={filteredSug} />
          </div>
        )}
      </Stack>
      
    </>
  );
};

export default Search;
