import React, { useState, useEffect } from "react";
import useLexiconStore from "../store/lexiconStore";
import { JoinSpace, List } from "./";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const Home = () => {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const lex = useLexiconStore((state) => state.lex);
  const setJoinSpaceModalOpen = useLexiconStore(
    (state) => state.setJoinSpaceModalOpen
  );
  const setCreateSpaceModalOpen = useLexiconStore(
    (state) => state.setCreateSpaceModalOpen
  );

  const spaces = Object.keys(lex);

  const items = spaces.map((s) => ({ label: s, navlink: s }));
  return (
    <>
      {/*@ts-ignore returning undefined is handled*/}
      {joinModalOpen ? (
        <JoinSpace modalOpen={joinModalOpen} setModalOpen={setJoinModalOpen} />
      ) : (
        <Stack
          direction="row"
          spacing={1}
          marginTop={2}
          marginBottom={2}
          alignItems="center"
        >
          <Button
            size="small"
            variant="contained"
            sx={{ fontWeight: "bold" }}
            onClick={() => setJoinSpaceModalOpen(true)}
          >
            join
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{ fontWeight: "bold" }}
            onClick={() => setCreateSpaceModalOpen(true)}
          >
            create
          </Button>
        </Stack>
      )}

      <List items={items} />
    </>
  );
};

export default Home;
