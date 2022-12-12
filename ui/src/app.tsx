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
    error: { main: "#FF6240" },
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
    <main
      style={{
        overflowY: "auto",
        height: "100vh",
        backgroundColor: "var(--rlm-window-color, #FBFBFB)",
      }}
    >
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            padding: "0px!important",
          }}
          maxWidth="sm"
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
                <Route
                  path="/apps/lexicon/dict/:word"
                  element={<Dictionary />}
                />
                <Route path="/apps/lexicon/" element={<Home />} />
              </Route>
            </Routes>
          </Router>
        </Container>
      </ThemeProvider>
    </main>
  );
}
