import { GetState, SetState } from "zustand";
import { Definition, Definitions, Lexicon, Whitelist } from "../../types";
import useLexiconStore, { LexiconStore } from "../lexiconStore";
import produce from "immer"; // immer gets weird w/ objects

const our: string = (window as any)?.api?.ship || "";

export const handleLexiconUpdate =
  (get: GetState<LexiconStore>, set: SetState<LexiconStore>) =>
  (reaction: any) => {
    console.log("reaction: ", reaction);
    let mark = Object.keys(reaction)[0];

    switch (mark) {
      case "lexicon": {
        const lex = reaction["lexicon"];
        console.log("lexicon", lex);
        set({ lex });
        break;
      }

      case "def-added": {
        const updateDate = reaction["def-added"];
        const word: string = updateDate?.word;
        const space: string = updateDate?.space;
        const newEntry = updateDate.entry;
        var prevlex: Lexicon = get().lex;

        prevlex[space][word] = newEntry;

        set({ lex: prevlex });
        break;
      }
      case "sen-added": {
        const updateDate = reaction["sen-added"];
        const word: string = updateDate?.word;
        const space: string = updateDate?.space;
        const newEntry = updateDate.entry;
        var prevlex: Lexicon = get().lex;

        prevlex[space][word] = newEntry;

        set({ lex: prevlex });
        break;
      }
      case "word-added": {
        const updateDate = reaction["word-added"];
        const word: string = updateDate?.word;
        const space: string = updateDate?.space;
        const newEntry = updateDate.entry;
        var prevlex: Lexicon = get().lex;

        prevlex[space][word] = newEntry;
        set({ lex: prevlex });
        break;
      }
      case "word-voted": {
        const updateDate = reaction["word-voted"];
        const word: string = updateDate?.word;
        const space: string = updateDate?.space;
        const newVoteList = updateDate.votes;
        console.log("newVoteList", newVoteList);
        var prevlex: Lexicon = get().lex;
        prevlex[space][word] = { ...prevlex[space][word], votes: newVoteList };

        set({ lex: prevlex });
        break;
      }
      case "def-voted": {
        const updateDate = reaction["def-voted"];
        const word: string = updateDate?.word;
        const space: string = updateDate?.space;
        const id: string = updateDate?.id;
        const newVoteList = updateDate.votes;
        console.log("newVoteList", newVoteList);
        var prevlex: Lexicon = get().lex;
        prevlex[space][word].definitions = prevlex[space][word].definitions.map(
          (def: any, index: number) => {
            if (id === def.id) {
              return { ...def, votes: newVoteList };
            }
            return def;
          }
        );

        set({ lex: prevlex });
        break;
      }
      case "sen-voted": {
        const updateDate = reaction["sen-voted"];
        const word: string = updateDate?.word;
        const space: string = updateDate?.space;
        const id: string = updateDate?.id;
        const newVoteList = updateDate.votes;

        var prevlex: Lexicon = get().lex;
        prevlex[space][word].sentences = prevlex[space][word].sentences.map(
          (def: any, index: number) => {
            if (id === def.id) {
              return { ...def, votes: newVoteList };
            }
            return def;
          }
        );

        set({ lex: prevlex });
        break;
      }

      default:
        break;
    }
  };
