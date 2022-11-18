import { GetState, SetState } from "zustand";
import { Definition, Definitions, Lexicon, Whitelist } from "../../types";
import useLexiconStore, { LexiconStore } from "../lexiconStore";
import produce from 'immer' // immer gets weird w/ objects

const our: string = (window as any)?.api?.ship || ''


export const handleLexiconUpdate = (get: GetState<LexiconStore>, set: SetState<LexiconStore>) => (reaction: any) => {
    console.log('reaction: ', reaction)
    let mark = Object.keys(reaction)[0];
    
    switch (mark) {
        case 'lex':
            const lex = reaction['lex']
            set({ lex })

        case 'whiteliste':
            var wl = reaction['whiteliste']
            set({  whitelist: wl })   
        
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
                voting.downvotes = voting.downvotes.concat(voteobj.voter)
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

        case 'whitelist-added':
            const wla = reaction['whitelist-added']

            var prevwl: Whitelist = get().whitelist
            var prevlex: Lexicon = get().lex

            var newl: Whitelist = Object.assign(prevwl, wla)
            
            var sp = Object.keys(wla)[0] // incoming wl space
            prevlex[sp] = {}

            set({ lex: prevlex })

            set({ whitelist: newl })

        case 'success':
            var m: string = reaction['success']

            // adding member adding + lex creation here instead of 2 new reactions in /sur
            
            console.log(m)

            if (m.substring(0, 7) === 'created') {
                var spname = m.substring(
                    m.indexOf("'") + 1, 
                    m.lastIndexOf("'")
                );

                var sp = our + '/' + spname

                var prevlex: Lexicon = get().lex
                prevlex[sp] = {}

                // note, creating a space for an existing one would null it temporarily on frontend

                set({ lex: prevlex })
            }

            if (m.substring(0, 5) === 'added') {

                var spname = m.substring(
                    m.indexOf("'") + 1, 
                    m.lastIndexOf("'")
                );

                const re = /~\S+/
                
                const matc = m.match(re)
                const added = matc![0] 
                var sp = '~' + our + '/' + spname


                var whitel: Whitelist = get().whitelist

                whitel[sp].members = whitel[sp].members.concat(added)


                set({ whitelist: whitel })
            }   


            set({ popup: { type: 'success', message: m }})
            setTimeout(() => {
                set({ popup: undefined })
            }, 5000)    

        case 'error':
            var m: string = reaction['success']
            set({ popup: { type: 'success', message: m }})
            setTimeout(() => {
                set({ popup: undefined })
            }, 5000)    
                 
        }
}
