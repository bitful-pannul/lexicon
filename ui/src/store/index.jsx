//import create from 'zustand'
//// import { persist } from 'zustand/middleware'
//
//export const useLexiconStore = create((set, get) => ({
//  loading: '',
//  spaces: {},
//  lex: {},
//  init: async () => {
//    // /api file would be very nice here. 
//    const lex = await window.urbit.scry({
//      app: "lexicon",
//      path: '/definitions/all',
//    })
//  return lex
//  },
//  setLoading: (loading) => set({ loading }),
//}))