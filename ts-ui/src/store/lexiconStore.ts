import create from "zustand"
import api from "../api"
import { Lexicon, AddDef, AddVote, DelDef, Whitelist } from "../types";
import { createSubscription } from "./subscriptions/createSubscription"
import { handleLexiconUpdate } from "./subscriptions/lexicon";
import produce from 'immer'

const our: string = (window as any)?.api?.ship || ''

export interface LexiconStore {
    loading: string | null,
    lex: Lexicon;
    whitelist: Whitelist,
    modalOpen: boolean,
    popup: {type: string, message: string} | undefined,
    init: () => Promise<void>,
    setLoading: (loading: string | null) => void,
    setPopup: (type?: string, message?: string) => void,
    getLexicon: () => Promise<void>,
    getSpaces: () => Promise<void>,
    joinLex: (space: string) => Promise<void>,
    addDefinition: (add: AddDef) => Promise<void>,
    voteDef: (add: AddVote) => Promise<void>,
    delDef: (del: DelDef) => Promise<void>,
    setModalOpen: (val: boolean) => void,
    addMember: (space: string, member: string) => Promise<void>
    createLex: (space: string, perms: string, members: string[]) => Promise<void>,
  }

const useLexiconStore = create<LexiconStore>((set, get) => ({
  loading: "loading lexicon...",
  popup: undefined,
  lex: [] as unknown as Lexicon, // initial empty array issues with never[] assingment
  modalOpen: false,
  whitelist: [] as unknown as Whitelist,
  init: async () => {
    set({ loading: 'Loading lexicon...' })
    const { getLexicon, getSpaces } = get()

    await api.subscribe(createSubscription("lexicon", "/updates", handleLexiconUpdate(get, set)))  // handleLexupdate
    set({ loading: '' })
  },

  getLexicon: async () => {
    const rawLex = await api.scry({ app: 'lexicon', path: '/definitions/all' })
    
    //  const projects = generateProjects(rawProjects, get().projects)
    console.log('rawlex:', rawLex)
    return rawLex
  },   
       // ~zod/our?
  setLoading: (loading: string | null) => set({ loading }),

  setPopup: (type: string | undefined, message: string | undefined) => {
    if (type && message) {
      set({ popup: { type, message }})
      setTimeout(() => {
        set({ popup: undefined })
      }, 5000)
    } else {
      set({ popup: undefined })
    }

  },

  setModalOpen: (val: boolean) => set({ modalOpen: val }),

  getSpaces: async () => {
    const rawSpaces = await api.scry({ app: 'spaces', path: '/all'})
    
    console.log('rawspaces: ', rawSpaces)
  },
  
  joinLex: async (space: string) => {
    const joinJson = {
      "join-space": {
        space
      }
    }

    await api.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: joinJson,
      onSuccess: () => set({ popup: {type: 'success', message: 'joined space: ' + space}}),
      onError: () => set({ popup: {type: 'error', message: 'failed joining space: ' + space}}), // no timeout here..
    })
  },

  addDefinition: async (add: AddDef) => {
    const { space, word, def, sentence, related } = add
    
    const addJson = {
      add: {
        space,
        word,
        def,
        sentence,
        related
      }
    }

    await api.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: addJson,
      onSuccess: () => set({ popup: { type: "success", message: "added definition: " + def + "to word: " + word }}),
      onError: () => set({ popup: { type: "error", message: "when adding definition: " + def + "to word: " + word }}),
    })
  },

  voteDef: async (add: AddVote) => {
    const { space, word, id } = add

    const voteJson = {
      vote: {
        space,
        word,
        id,
        'vote-type': add["vote-type"]
      }
    }
    
    await api.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: voteJson,
      onSuccess: () => console.log('success! voted: ', voteJson),
      onError: () => console.log("error! voted: ", voteJson),
    })
  },

  addMember: async (space: string, member: string) => {
    const memJson = {
      "add-whitelist": {
        space,
        member,
      }
    }

    await api.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: memJson,
      onSuccess: () => () => set({ popup: { type: "success", message: "added member " + member + "to lex: " +  space}}),
      onError: () => set({ popup: { type: "error", message: "when adding member " + member + "to lex: " +  space}})
    })
  },

  createLex: async (space: string, perms: string, members: string[]) => {
    const sp = `~${our}/${space}`

    const createJson = {
      "create-space": {
        space: sp,
        perms,
        members,
      }
    }

    await api.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: createJson,
      onSuccess: () => set({ popup: { type: "success", message: "created" + perms + "lex " + sp }}),
      onError: () => set({ popup: { type: "error", message: "when creating" + perms + "lex " + sp }})
    })
  },

  delDef: async (add: DelDef) => {
    const { space, word, id } = add

    const delJson = {
      delete: {
        space,
        word,
        id,
      }
    }
    
    await api.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: delJson,
      onSuccess: () => console.log('success! deleted: ', delJson),
      onError: () => console.log("error! deleted: ", delJson),
    })
  },

}))

export default useLexiconStore
