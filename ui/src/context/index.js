import React, { useState, useEffect } from 'react'

const LexContext = React.createContext({ lex: {} })

const LexContextProvider = ({ children }) => {
  const [lex, setLex] = useState()

  
  const getLexicon = async () => {
    const path = '/definitions/all'
    const res = await window.urbit.scry({
      app: "lexicon",
      path: path,
    })
    console.log('fetched stuff in context.', res)
    setLex(res)
  }

  useEffect(() => {
    setTimeout(() => getLexicon(), 300)
  }, [])

  return <LexContext.Provider value={{lex: lex}}>{children}</LexContext.Provider>
}

export { LexContext, LexContextProvider }