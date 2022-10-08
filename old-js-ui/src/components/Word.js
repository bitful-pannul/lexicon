import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Word = ({ word, definitions }) => {
  const [view, setView] = useState('defs') // defs | sentences
  const [inputdef, setInputdef] = useState('')
  const { ship, group } = useParams()

  const addDef = async (e) => {
    const addJson = {
      add: {
        space: `${ship}/${group}`,
        word: word,
        def: inputdef,
        sentence: [],
        related: [],
      }
    }

    await window.urbit.poke({
        app: "lexicon",
        mark: "lexicon-action",
        json: addJson,
        onSuccess: () => console.log('success!'),
        onError: () => console.log("wrong, very wrong"),
      })
  }

  const handleChange = (e) => {
    e.preventDefault()
    setInputdef(e.target.value)
  }

  // const upvote = ()

  // const downvote = ()
  useEffect(() => {
    console.log('defs: ', definitions)
    console.log('word: ', word)
  }, [])

  if (view === 'defs') return (
    // error handling necessary? do something global [not-found page]
    <>
    <h3>{word}</h3>
    
    <div>
      <button onClick={() => setView('defs')}>definitions</button>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <button onClick={() => setView('sentences')}>sentences</button>
    </div>


   
    {definitions?.map((d, i) => {
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
    <input placeholder='add a definition' onChange={handleChange}/>
    <button onClick={addDef}>submit</button>
    </>
  )

  if (view === 'sentences') return (
    <>
    <h3>{word}</h3>
    
    <div>
      <button onClick={() => setView('defs')}>definitions</button>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <button onClick={() => setView('sentences')}>sentences</button>
    </div>


   
    {definitions?.map((d, i) => {
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
