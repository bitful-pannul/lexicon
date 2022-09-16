import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Space = () => {
  // check if space exist, joined or not. 
  //
  const [lex, setLex] = useState({})
  const [defs, setDefs] = useState([])
  const { ship, group } = useParams()
  
  
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
    
    console.log(res)
    setDefs(Object.values(res))
  }

  useEffect(() => {
    getDefinitions(ship, group)

  }, [])

  return (
    <>
      <div className='buttonz'>
        <div>
          <button onClick={getLexicon}>
            get lex
          </button>
          <button onClick={() => getDefinitions(ship, group)}>
            get defs
          </button>
        </div>
        {`hey there, we're in: ${ship}/${group}`}

        <div>
          { defs ? 
          (
            defs.map((space, i) => {
              
             return (
              <>
              <span>word: {}</span>
              <span>definitions: </span>
              </>
              ) 
            })
          )  
          : (<div>no definitions for this space yet?</div>)
          }
        </div>
      </div>
    </>
  )
}

export default Space