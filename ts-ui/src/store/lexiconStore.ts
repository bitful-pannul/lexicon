import create from "zustand"
import api from "../api"
import { Lexicon, Definition, Definitions, AddDef, AddVote } from "../types";
import { createSubscription } from "./subscriptions/createSubscription"
import { handleLexiconUpdate } from "./subscriptions/lexicon";
import produce from 'immer'

const our: string = (window as any)?.api?.ship || ''


export interface LexiconStore {
    loading: string | null,
    lex: Lexicon;
    pathname: string,
    init: () => Promise<void>,
    setLoading: (loading: string | null) => void,
    getLexicon: () => Promise<void>,
    getSpaces: () => Promise<void>,
    addDefinition: (add: AddDef) => Promise<void>,
    joinLex: (space: string) => Promise<void>,
    voteDef: (add: AddVote) => Promise<void>,
  }

const useLexiconStore = create<LexiconStore>((set, get) => ({
  loading: "loading lexicon...",
  lex: [] as unknown as Lexicon, // initial empty array issues with never[] assingment
  pathname: "/",    
  init: async () => {
    set({ loading: 'Loading lexicon...' })
    const { getLexicon, getSpaces } = get()

    const sub = await api.subscribe(createSubscription("lexicon", "/updates", handleLexiconUpdate(get, set)))  // handleLexupdate
    console.log('sub?', sub)
  },
  getLexicon: async () => {
    const rawLex = await api.scry({ app: 'lexicon', path: '/definitions/all' })
    
    //  const projects = generateProjects(rawProjects, get().projects)
    console.log('rawlex:', rawLex)
    return rawLex
  },        // ~zod/our?
  setLoading: (loading: string | null) => set({ loading }),
  getSpaces: async () => {
    const rawSpaces = await api.scry({ app: 'spaces', path: '/all'})
    
    console.log('rawspaces: ', rawSpaces)
  },
  addDefinition: async (add: AddDef) => {
    const { space, def, sentence, related } = add
    
    const addJson = {
      add: {
        space,
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
  joinLex: async (space: string) => {},
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
}))

export default useLexiconStore
