import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { theme } from '@holium/design-system'
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
    getLexicon()
  }, [setLex])

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
    getSpaces()
  }, [setSpaces])

  return <SpacesContext.Provider value={{spaces: spaces}}>{children}</SpacesContext.Provider>
}


const useSpaceTheme = () => {
  const [spaceTheme, setSpaceTheme] = useState(theme.light)

  return { spaceTheme, setSpaceTheme }

}

export { LexContext, LexContextProvider, SpacesContext, SpacesContextProvider, useSpaceTheme }