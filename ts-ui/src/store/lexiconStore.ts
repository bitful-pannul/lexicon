import create from "zustand"
import api from "../api"
import { Lexicon, AddDef, AddVote, DelDef } from "../types";
import { createSubscription } from "./subscriptions/createSubscription"
import { handleLexiconUpdate } from "./subscriptions/lexicon";
import produce from 'immer'

const our: string = (window as any)?.api?.ship || ''

export interface LexiconStore {
    loading: string | null,
    lex: Lexicon;
    modalOpen: boolean,
    init: () => Promise<void>,
    setLoading: (loading: string | null) => void,
    getLexicon: () => Promise<void>,
    getSpaces: () => Promise<void>,
    joinLex: (space: string) => Promise<void>,
    addDefinition: (add: AddDef) => Promise<void>,
    voteDef: (add: AddVote) => Promise<void>,
    delDef: (del: DelDef) => Promise<void>,
    setModalOpen: (val: boolean) => void,
  }

const useLexiconStore = create<LexiconStore>((set, get) => ({
  loading: "loading lexicon...",
  lex: [] as unknown as Lexicon, // initial empty array issues with never[] assingment
  modalOpen: false,
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
    // wait this is a poke 
    await api.subscribe(createSubscription("lexicon", space, handleLexiconUpdate(get, set)))  // handleLexupdate
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
      onSuccess: () => console.log('success! added definition: ', addJson),
      onError: () => console.log("error! adding definition: ", addJson),
    })
  },

  voteDef: async(add: AddVote) => {
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
  delDef: async(add: DelDef) => {
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
