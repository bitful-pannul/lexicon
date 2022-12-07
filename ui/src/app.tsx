import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Space,
  Dictionary,
  Navigation,
  Word,
  AddModal,
  JoinSpaceModal,
  CreateSpaceModal,
} from "./components";
import useLexiconStore from "./store/lexiconStore";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({

  palette: {
    primary: { main: "#4E9EFD" },
  },
  typography: {
    fontFamily: ["Rubik"].join(","),
  },

});
export function App() {
  const { init, loading } = useLexiconStore();

  useEffect(() => {
    init();
  }, []);
  //TODO: reinstate loader
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          backgroundColor: "#FBFBFB",
          width: "432px",
          padding: "0px!important",
        }}
      >
        <JoinSpaceModal />
        <CreateSpaceModal />
        <Router>
          <Routes>
            <Route element={<Navigation />}>
              <Route
                path="/apps/lexicon/:ship/:group/:word"
                element={<Word />}
              />
              <Route path="/apps/lexicon/:ship/:group" element={<Space />} />
              <Route path="/apps/lexicon/dict/:word" element={<Dictionary />} />
              <Route path="/apps/lexicon/" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}
