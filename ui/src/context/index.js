import React, { useState, useEffect } from 'react'

const LexContext = React.createContext({ lex: {} })

const SpacesContext = React.createContext({ spaces: {} })

const LexContextProvider = ({ children }) => {
  const [lex, setLex] = useState()

  
  const getLexicon = async () => {
    const path = '/definitions/all'
    const res = await window.urbit.scry({
      app: "lexicon",
      path: path,
    })
    console.log('fetched lex in context.', res)
    setLex(res)
  }

  useEffect(() => {
    setTimeout(() => getLexicon(), 300)
  }, [])

  return <LexContext.Provider value={{lex: lex}}>{children}</LexContext.Provider>
}

const SpacesContextProvider = ({ children }) => {
  const [spaces, setSpaces] = useState()

  
  const getSpaces = async () => {
    const path = '/spaces/all'
    const res = await window.urbit.scry({
      app: "lexicon",
      path: path,
    })
    console.log('fetched spaces in context.', res?.spaces)
    setSpaces(res?.spaces)
  }

  useEffect(() => {
    setTimeout(() => getSpaces(), 300)
  }, [])

  return <SpacesContext.Provider value={{spaces: spaces}}>{children}</SpacesContext.Provider>
}

export { LexContext, LexContextProvider, SpacesContext, SpacesContextProvider }