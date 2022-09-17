import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Dropdown, Word } from './index'

const Space = () => {
  // check if space exist, joined or not. 
  //
  const [lex, setLex] = useState({})
  const [defs, setDefs] = useState([])
  const { ship, group } = useParams()
  const [currentword, setCurrentword] = useState('')
  
  
  const getLexicon = async () => {
    const path = '/definitions/all'
    const res = await window.urbit.scry({
      app: "lexicon",
      path: path,
    })
    console.log(res)
    setLex(res)
  }
  
  const getDefinitions = async (ship, group) => {
    const path = `/definitions/${ship}/${group}`
    const res = await window.urbit.scry({
      app: "lexicon",
      path: path,
    })
    
    setDefs(res)
  }

  useEffect(() => {
    // setTimeout()
    setTimeout(() => getDefinitions(ship, group), 300)
    console.log('in effect: ', defs)
  }, [ship, group])

  return (
    <>
    <Dropdown />
      <div className='buttonz'>
        <div>
          <button onClick={getLexicon}>
            get lex
          </button>
          <button onClick={() => getDefinitions(ship, group)}>
            get defs
          </button>
        </div>
        {`space: ${ship}/${group}`}

        { currentword && <div onClick={() => setCurrentword('')}>back to wordlist</div> }

        <div>
          { (defs.length !== 0 && currentword === '') ? 
          (
            Object.keys(defs).map((word, i) => {
              
             return (
              <>
              <div key={i} onClick={() => setCurrentword(word)}>{word}</div>
              {/* <div>definitions: {defs[word].map((d, i) => {
                return (
                  <>
                  <span>{d.def}</span>
                    <span>{d.poster}</span>
                      <div>upvotes: {d.upvotes.length}</div>
                      <div>downvotes: {d.downvotes.length}</div>
                  </>
                )
                })}
                </div> */}
              </>
              ) 
            })
          ) 
          : (currentword !== '') ?
          <Word word={currentword} definitions={defs[currentword]}/>  //  some real weirdness with setting object to state instead of word
          :
          (<div>no definitions for this space yet?</div>)
          }
        </div>
      </div>
    </>
  )
}

export default Space