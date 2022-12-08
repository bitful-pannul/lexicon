import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLexiconStore from "../store/lexiconStore";
import { WrappedBackground, WordItem } from "./index";

//TODO: add upvote and downvote elements the word element
const Space = () => {
  const lex = useLexiconStore((state) => state.lex);
  const modalOpen = useLexiconStore((state) => state.modalOpen);
  const wl = useLexiconStore((state) => state.whitelist);

  const { setModalOpen } = useLexiconStore();
  const navigate = useNavigate();

  const { ship, group } = useParams();

  const setModal = (val: boolean) => {
    setModalOpen(val);
  };

  const spaceLex = () => {
    try {
      //@ts-ignore handled if undefined
      return lex[`${ship}/${group}`];
    } catch {
      return undefined;
    }
  };

  const spacePerms = () => {
    try {
      //@ts-ignore handled if undefined
      return wl[`${ship}/${group}`];
    } catch {
      return undefined;
    }
  };

  const isOur = () => {
    const our: string = "~" + (window as any)?.api?.ship || "";
    return our === ship;
  };

  const items =
    spaceLex() &&
    Object.keys(lex[`${ship}/${group}`])?.map((word, i) => ({
      label: word,
      navlink: `${ship}/${group}/${word}`,
    }));

  //@ts-ignore if modalOpen then AddModal will render
  return (
    <>
      {/* @ts-ignore is defined if goes through*/}
      {/*isOur() && spacePerms() && (
        <Perms members={spacePerms()?.members} perms={spacePerms()?.perms} />
      )*/}

      {/*@ts-ignore nullcheck in place*/}
      <WrappedBackground styles={{ padding: "6px 8px" }}>
        {spaceLex() && (
          <WordItem items={items} clearSearch={() => null} largeText />
        )}
      </WrappedBackground>
    </>
  );
};

export default Space;
