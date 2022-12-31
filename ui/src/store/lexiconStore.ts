import create from "zustand";
import api from "../api";
import { Lexicon, AddDef, Vote, DelDef, Whitelist } from "../types";
import { createSubscription } from "./subscriptions/createSubscription";
import { handleLexiconUpdate } from "./subscriptions/lexicon";
import produce from "immer";

const our: string = (window as any)?.api?.ship || "";

export interface LexiconStore {
  loading: string | null;
  isAdmin: boolean; //wether we are admins in the current space

  lex: Lexicon;
  whitelist: Whitelist;
  modalOpen: boolean;
  joinSpaceModalOpen: boolean;
  createSpaceModalOpen: boolean;
  popup: { type: string; message: string } | undefined;
  init: () => Promise<void>;
  setLoading: (loading: string | null) => void;
  setPopup: (type?: string, message?: string) => void;
  getLexicon: () => Promise<void>;
  getSpaces: () => Promise<void>;
  joinLex: (space: string) => Promise<void>;
  addDefinition: (add: any) => Promise<void>;
  voteDef: (add: Vote) => Promise<void>;
  delDef: (del: DelDef) => Promise<void>;
  setModalOpen: (val: boolean) => void;
  setJoinSpaceModalOpen: (val: boolean) => void;
  setCreateSpaceModalOpen: (val: boolean) => void;
  addDefinitionToWord: (add: any) => void;
  addSentenceToWord: (add: any) => void;
  addMember: (space: string, member: string) => Promise<void>;
  createLex: (space: string, perms: string, members: string[]) => Promise<void>;
  isAdminScry: (space: string) => Promise<void>;
  deleteWord: (space: string, word: string | undefined) => Promise<void>;
}

const useLexiconStore = create<LexiconStore>((set, get) => ({
  loading: "loading lexicon...",
  isAdmin: false,
  popup: undefined,
  lex: [] as unknown as Lexicon, // initial empty array issues with never[] assingment
  modalOpen: false,
  joinSpaceModalOpen: false,
  createSpaceModalOpen: false,
  whitelist: [] as unknown as Whitelist,
  init: async () => {
    set({ loading: "Loading lexicon..." });
    const { getLexicon, getSpaces } = get();

    await api.subscribe(
      createSubscription("lexicon", "/updates", handleLexiconUpdate(get, set))
    ); // handleLexupdate
    set({ loading: "" });
  },

  getLexicon: async () => {
    const rawLex = await api.scry({ app: "lexicon", path: "/definitions/all" });

    //  const projects = generateProjects(rawProjects, get().projects)
    console.log("rawlex:", rawLex);
    return rawLex;
  },
  // ~zod/our?
  setLoading: (loading: string | null) => set({ loading }),

  setPopup: (type: string | undefined, message: string | undefined) => {
    if (type && message) {
      set({ popup: { type, message } });
      setTimeout(() => {
        set({ popup: undefined });
      }, 5000);
    } else {
      set({ popup: undefined });
    }
  },

  setModalOpen: (val: boolean) => set({ modalOpen: val }),
  setJoinSpaceModalOpen: (state: boolean) => set({ joinSpaceModalOpen: state }),
  setCreateSpaceModalOpen: (state: boolean) =>
    set({ createSpaceModalOpen: state }),

  getSpaces: async () => {
    const rawSpaces = await api.scry({ app: "spaces", path: "/all" });

    console.log("rawspaces: ", rawSpaces);
  },

  joinLex: async (space: string) => {
    const joinJson = {
      "join-space": {
        space,
      },
    };
    console.log("joinjson:", joinJson);

    await api.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: joinJson,
      onSuccess: () =>
        set({ popup: { type: "success", message: "joined space: " + space } }),
      onError: () =>
        set({
          popup: { type: "error", message: "failed joining space: " + space },
        }), // no timeout here..
    });
  },
  isAdminScry: async (space: string) => {
    try {
      const result = await api.scry({
        app: "lexicon",
        path: "/am-admin/" + space,
      });
      console.log("isAdmin result => ", result);
      set({
        isAdmin: result,
      });
      return result;
    } catch (e) {
      console.log("isAdmin error => ", e);
    }
  },
  addDefinition: async (add: any) => {
    const { space, word, def, sentence, related } = add;
    const addJson = {
      "add-word": {
        space,
        word,
        definitions: def,
        sentences: sentence,
        related: related,
      },
    };
    console.log("here", addJson);

    try {
      const result = await api.poke({
        app: "lexicon",
        mark: "lexicon-action",
        json: addJson,
        onSuccess: () =>
          set({
            popup: {
              type: "success",
              message: "added definition: " + def + "to word: " + word,
            },
          }),
        onError: () =>
          set({
            popup: {
              type: "error",
              message: "when adding definition: " + def + "to word: " + word,
            },
          }),
      });
      console.log("addDefinition result => ", result);
    } catch (e) {
      console.log("addDefinition error => ", e);
    }
  },
  deleteWord: async (space: string, word: string) => {
    const deleteWord = {
      "del-word": {
        space,
        word,
      },
    };
    try {
      const result = await api.poke({
        app: "lexicon",
        mark: "lexicon-action",
        json: deleteWord,
        onSuccess: () =>
          set({
            popup: {
              type: "success",
              message: "deleted word: " + word,
            },
          }),
        onError: () =>
          set({
            popup: {
              type: "error",
              message: "when trying to delete word: " + word,
            },
          }),
      });
      console.log("addDefinition result => ", result);
    } catch (e) {
      console.log("addDefinition error => ", e);
    }
  },
  addDefinitionToWord: async (add: {
    space: string;
    word: string;
    def: string;
  }) => {
    const { space, word, def } = add;
    const addDefToWord = {
      "add-def": {
        space,
        word,
        def,
      },
    };

    try {
      const result = await api.poke({
        app: "lexicon",
        mark: "lexicon-action",
        json: addDefToWord,
        onSuccess: () =>
          set({
            popup: {
              type: "success",
              message: "added definition: " + def + "to word: " + word,
            },
          }),
        onError: () =>
          set({
            popup: {
              type: "error",
              message: "when adding definition: " + def + "to word: " + word,
            },
          }),
      });
      console.log("addDefinitionToWord result => ", result);
    } catch (e) {
      console.log("addDefinitionToWord error => ", e);
    }
  },
  addSentenceToWord: async (add: {
    space: string;
    word: string;
    sen: string;
  }) => {
    const { space, word, sen } = add;
    const addSenToWord = {
      "add-sen": {
        space,
        word,
        sen,
      },
    };

    try {
      const result = await api.poke({
        app: "lexicon",
        mark: "lexicon-action",
        json: addSenToWord,
        onSuccess: () =>
          set({
            popup: {
              type: "success",
              message: "added sentence: " + sen + "to word: " + word,
            },
          }),
        onError: () =>
          set({
            popup: {
              type: "error",
              message: "when adding sentence: " + sen + "to word: " + word,
            },
          }),
      });
      console.log("addSentenceToWord result => ", result);
    } catch (e) {
      console.log("addSentenceToWord error => ", e);
    }
  },

  voteDef: async (vote: Vote) => {
    const { space, word, id, voteType } = vote;
    console.log("vote", vote);
    const voteDef = {
      ["vote-" + voteType]: {
        space,
        word,
        id,
        vote: vote.vote,
      },
    };

    await api.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: voteDef,
      onSuccess: () => console.log("success! voted: ", voteDef),
      onError: () => console.log("error! voted: ", voteDef),
    });
  },

  addMember: async (space: string, member: string) => {
    const memJson = {
      "add-whitelist": {
        space,
        member,
      },
    };

    await api.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: memJson,
      onSuccess: () => () =>
        set({
          popup: {
            type: "success",
            message: "added member " + member + "to lex: " + space,
          },
        }),
      onError: () =>
        set({
          popup: {
            type: "error",
            message: "when adding member " + member + "to lex: " + space,
          },
        }),
    });
  },

  createLex: async (space: string, perms: string, members: string[]) => {
    const sp = `~${our}/${space}`;

    const createJson = {
      "create-space": {
        space: sp,
        perms,
        members,
      },
    };
    console.log("createJson", createJson);
    await api.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: createJson,
      onSuccess: () =>
        set({
          popup: { type: "success", message: "created" + perms + "lex " + sp },
        }),
      onError: () =>
        set({
          popup: {
            type: "error",
            message: "when creating" + perms + "lex " + sp,
          },
        }),
    });
  },

  delDef: async (add: DelDef) => {
    const { space, word, id } = add;

    const delJson = {
      delete: {
        space,
        word,
        id,
      },
    };

    await api.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: delJson,
      onSuccess: () => console.log("success! deleted: ", delJson),
      onError: () => console.log("error! deleted: ", delJson),
    });
  },
}));

export default useLexiconStore;
