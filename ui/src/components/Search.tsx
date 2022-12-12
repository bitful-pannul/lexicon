import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLexiconStore from "../store/lexiconStore";
import List from "./styled/List";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CustomTextField from "./CustomTextField";
import WordItem from "./WordItem";
import WrapperBackground from "./WrappedBackground";

//TODO: update the search function UI...
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
  const clearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(false);
  };
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
      <Stack direction={"column"} sx={{ position: "relative" }}>
        <CustomTextField
          sx={{
            fontSize: "14px",
            lineHeight: "17px",
          }}
          variant="outlined"
          fullWidth
          id="search-input"
          placeholder="Search Words"
          value={searchQuery}
          onChange={onChange}
          InputProps={{
            "aria-label": "search Words",
            startAdornment: (
              <div style={{ width: 18, height: 18, marginRight: 8 }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5233 11.4628L15.7355 14.6743L14.6743 15.7355L11.4628 12.5233C10.2678 13.4812 8.7815 14.0022 7.25 14C3.524 14 0.5 10.976 0.5 7.25C0.5 3.524 3.524 0.5 7.25 0.5C10.976 0.5 14 3.524 14 7.25C14.0022 8.7815 13.4812 10.2678 12.5233 11.4628ZM11.0188 10.9063C11.9706 9.92741 12.5022 8.61532 12.5 7.25C12.5 4.349 10.1503 2 7.25 2C4.349 2 2 4.349 2 7.25C2 10.1503 4.349 12.5 7.25 12.5C8.61532 12.5022 9.92741 11.9706 10.9063 11.0188L11.0188 10.9063Z"
                    fill="var(--rlm-icon-color, #85898E)"
                  />
                </svg>
              </div>
            ),
          }}
        />
        {showSuggestions && (
          <WrapperBackground
            styles={{
              cursor: "pointer",
              position: "absolute",
              top: 35,
              left: -20,
              margin: 0,
              width: "120%",
              padding: 0,
              zIndex: 1,
            }}
          >
            <WordItem items={filteredSug} clearSearch={clearSearch} />
          </WrapperBackground>
        )}
      </Stack>
    </>
  );
};

export default Search;
