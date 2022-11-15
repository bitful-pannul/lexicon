import { GetState, SetState } from "zustand";
import { Definition, Definitions, Lexicon } from "../../types";
import useLexiconStore, { LexiconStore } from "../lexiconStore";
import produce from 'immer' // immer gets weird w/ objects

export const handleLexiconUpdate = (get: GetState<LexiconStore>, set: SetState<LexiconStore>) => (reaction: any) => {
    console.log('reaction: ', reaction)
    let mark = Object.keys(reaction)[0];
    
    switch (mark) {
        case 'lex':
            const lex = reaction['lex']
            set({ lex })
        case 'def-added':
            const def = reaction['def-added']
            const definition: Definition = def?.def
            const word: string = def?.word
            const space: string = def?.space


            var prevlex: Lexicon = get().lex
            if (prevlex[space][word]) {
                prevlex[space][word] = [...prevlex[space][word], definition]
            } else {
                prevlex[space][word] = [definition] 
            }
            
             set({ lex: prevlex })           
            //const modstate = produce(prevlex, draft => {
            //    draft[space][word] = [...draft[space][word], definition]
            //}) 
            //set({ lex: modstate })
        case 'voted': 
            const voteobj = reaction['voted']
            var prevlex: Lexicon = get().lex

            // @ts-ignore: vote-id that's incoming is most likely in our lex.
            var voting: Definition = prevlex[voteobj.space][voteobj.word].find(d => d.id === voteobj.id)
            
            if (voteobj['vote-type'] === "upvotes") {
                voting.upvotes = voting.upvotes.concat(voteobj.voter)
            } else {
                voting.downvotes.concat(voteobj.voter)
            }
            // voteobj['vote-type'] === "upvotes" ?  voting?.upvotes.concat(voteobj.voter) : voting?.downvotes.concat(voteobj.voter)
            prevlex[voteobj.space][voteobj.word].map(def => def.id === voteobj.id || voting)
            set({ lex: prevlex})
        case 'def-deleted':
            const delobj = reaction['def-deleted']
            var prevlex: Lexicon = get().lex

            prevlex[delobj.space][delobj.word] = prevlex[delobj.space][delobj.word].filter(def => def.id !== delobj.id)
            set({ lex: prevlex })
        case 'defs':
            const defs = reaction['defs']
            var prevlex: Lexicon = get().lex

            prevlex[defs.space] = defs.definitions
            set({ lex: prevlex })
        }
}
