import React, { useState, useEffect } from "react";
import useLexiconStore from "../store/lexiconStore";
import { JoinSpace, List } from "./";
import Button from "@mui/material/Button";
const Home = () => {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const lex = useLexiconStore((state) => state.lex);

  const spaces = Object.keys(lex);

  const items = spaces.map((s) => ({ label: s, navlink: s }));
  return (
    <>
      {/*@ts-ignore returning undefined is handled*/}
      {joinModalOpen ? (
        <JoinSpace modalOpen={joinModalOpen} setModalOpen={setJoinModalOpen} />
      ) : (
        <Button size="small" variant="contained" onClick={() => setJoinModalOpen(true)}>
          join/create
        </Button>
      )}

      <List items={items} />
    </>
  );
};

export default Home;
