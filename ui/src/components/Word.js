import React, { useEffect, useState } from 'react'

const Word = (word, definitions) => {
  const [view, setView] = useState('defs') // defs |


  

  // const upvote = ()

  // const downvote = ()
  useEffect(() => {
    console.log('defs: ', definitions)
    console.log('word: ', word)
  }, [])

  if (view === 'defs') return (
    // error handling necessary? do something global [not-found page]
    <>
    <h3>{word.word}</h3>
    
    <div>
      <button onClick={() => setView('defs')}>definitions</button>
      <span>||||</span>
      <button onClick={() => setView('sentences')}>sentences</button>
    </div>


   
    {word.definitions?.map((d, i) => {
      return (
        <div>
          <span>{d.def}</span>
          <span>{d.poster}</span>
          ||
          <span>up: {d.upvotes.length}</span>
          <span>down: {d.downvotes.length}</span>
          <div>

          </div>
        </div>
      )
    })}
    </>
  )

  if (view === 'sentences') return (
    <>
    <h3>{word.word}</h3>
    
    <div>
      <button onClick={() => setView('defs')}>definitions</button>
      <span>||||</span>
      <button onClick={() => setView('sentences')}>sentences</button>
    </div>


   
    {word.definitions.map((d, i) => {
      return (
        d.sentence?.map((sen, i) => {
          return (
            <div key={'sen'+i}> 
              <span>{sen} {d.poster}</span>
            </div>
          )
        })
      )
    })}
    </>
  )
} 

export default Word
