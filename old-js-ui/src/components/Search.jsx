import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { compose, space, color, typography } from "styled-system";
import {
  Icons,
  Menu,
  Spinner,
  Flex,
  Input,
  Text,
  Box,
} from "@holium/design-system";
import { useNavigate } from "react-router-dom";
import { MenuItemStyle } from "./MenuItemStyle";
import { LexContext } from "../context";

// <Search /> component from @holium/design-system, but with non-mock-results

const SearchWrapper = styled.div`
  position: relative;
  z-index: 2;
  flex: 3;
  -webkit-app-region: no-drag;
`;

const ResultList = styled(styled.div`
  display: inline-flex;
  flex-direction: column;
`)(compose(space, color, typography));

const SearchResultList = React.memo((props) => {
  // results { word: @t, def: @t, space: [@p @t], poster?: @p }
  const history = useNavigate();

  const handleNavigate = (word, space) => {
    console.log("word & space: ", word, space);
    history("/apps/lexicon/" + space + "/" + word, { replace: true });
  };

  const hasResults = props.results.length;

  return (
    <ResultList>
      {!hasResults ? (
        <MenuItemStyle>
          <Box
            onClick={() => history("/apps/lexicon/dict/" + props.searchQuery)}
            width="100%"
            height="100%"
          >
            <span role="img" aria-label="tear emoji">
              😪
            </span>{" "}
            <Text variant="caption">not found, search web?</Text>
          </Box>
        </MenuItemStyle>
      ) : (
        props.results.map((result, index) => (
          <MenuItemStyle key={`${index}`}>
            <Box
              width="100%"
              height="100%"
              onClick={() => handleNavigate(result.word, result.space)}
            >
              <Text variant="caption">{result.word}</Text>
            </Box>
          </MenuItemStyle>
        ))
      )}
      {/* {loading && (
        <Flex justifyContent="center" alignItems="center">
          <Spinner size={2} />
        </Flex>
      )} */}
    </ResultList>
  );
});

export const Search = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setInputSearchQuery] = useState("");

  const { lex } = useContext(LexContext);

  // ... so you thought map operations in hoon were bad?
  // const wordArray = Object?.values(lex)?.map((w, i) => [Object?.keys(w), Object?.keys(lex)[i]]) // ?.reduce((arr, words, i) => arr.concat(words))

  const wordsArray = () =>
    Object?.values(lex)
      ?.map((w, i) => {
        // map through array of words and attach their corresponding spaces
        return Object.keys(w).map((word, index) => {
          return {
            word: word,
            space: Object.keys(lex)[i],
          };
        });
      })
      ?.flat();

  const [filteredSuggestions, setFilteredSuggestions] = useState();
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);

  // TODO, reimplement arrow key + enter buttons navigation properly

  const onChange = (e) => {
    const userInput = e.target.value;

    console.log("before filter: ", wordsArray());
    console.log("after filter: ", filteredSuggestions);

    // Filter our suggestions that don't contain the user's searchQuery
    const unLinked = wordsArray()?.filter(
      (w) =>
        w.word.toString().toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    console.log("unlnked: ", unLinked);

    setInputSearchQuery(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  // const onClick = (e) => {
  //   setFilteredSuggestions([]);
  //   setInputSearchQuery(e.target.innerText);
  //   setActiveSuggestionIndex(0);
  //   setShowSuggestions(false);
  // };

  //const onKeyDown = (e) => {
  //  // User pressed the enter key
  //  if (e.keyCode === 13) {
  //    setInputSearchQuery(e.target.value);
  //    setActiveSuggestionIndex(0);
  //    setShowSuggestions(false);
  //  }
  //  // User pressed the up arrow
  //  else if (e.keyCode === 38) {
  //    if (activeSuggestionIndex === 0) {
  //      return;
  //    }
  //
  //    setActiveSuggestionIndex(activeSuggestionIndex - 1);
  //  }
  //  // User pressed the down arrow
  //  else if (e.keyCode === 40) {
  //    if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
  //      return;
  //    }
  //
  //    setActiveSuggestionIndex(activeSuggestionIndex + 1);
  //  }
  //};

  return (
    <SearchWrapper>
      <Input
        name="topbar-search"
        spellCheck={false}
        borderRadius={30}
        autoComplete="off"
        pt="6px"
        pb="6px"
        onChange={onChange}
        // onKeyDown={onKeyDown} messes up onclick a bit.
        value={searchQuery}
        placeholder="Search..."
        leftIcon={<Icons.Search aria-hidden />}
      />

      {searchQuery && (
        <Menu
          style={{
            top: "100%",
            padding: "8px 12px",
            width: "calc(100% - 20px)",
            margin: "0 10px",
            marginTop: 4,
          }}
          isOpen
          onClose={() => {
            setInputSearchQuery("");
          }}
        >
          {!showSuggestions && (
            <Flex justifyContent="center" alignItems="center">
              <Spinner size={2} />
            </Flex>
          )}
          {showSuggestions && (
            <SearchResultList
              results={filteredSuggestions}
              searchQuery={searchQuery}
            />
          )}
        </Menu>
      )}
    </SearchWrapper>
  );
};

export default Search;
