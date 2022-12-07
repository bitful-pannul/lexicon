import React, { useState, useEffect } from "react";
import useLexiconStore from "../store/lexiconStore";
import { List } from "./";

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
  return <List items={items} />;
};

export default Home;
