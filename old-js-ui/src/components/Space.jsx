import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Dropdown, Word, AddModal, NoMatch, Search } from './index'
import { LexContext, SpacesContext, useSpaceTheme } from '../context'
import { Button, Input, Flex, Text, MenuItem, Box, theme, IconButton} from '@holium/design-system'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useTheme} from 'styled-components'

const Space = () => {
  //TODO, how to acess appropriate themeing values from components? 
  // styled-themeing one way, reactive components with $props: inside css is another
  // hard to do with components from @design-system though, need a way to export it too. 

  // turns out useTheme() might work. As long as we specify the theme from somewhere... Another scry..?

  const { lex } = useContext(LexContext)
  const { spaces } = useContext(SpacesContext)

  const { setSpaceTheme, spaceTheme } = useSpaceTheme()

  const { ship, group } = useParams()
  const [currentword, setCurrentword] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const theme = useTheme()
  
  
  const setModal = (val) => {
    setModalOpen(val)
  }

  const spaceLex = () => {
    try {
      return lex[`${ship}/${group}`]
    } catch {
      return undefined
    }
  }

  const space = () => {
    try {
      return spaces[`/${ship}/${group}`]
    } catch {
      return undefined 
    }
  }

  useEffect(() => {
    // set global theme, bg not being rendered by <ThemeProvider> rn 
    try {
      const spTheme = space()

      const newTheme = spaceTheme
      newTheme.colors.text.primary = spTheme.theme.textColor
      newTheme.colors.bg.primary = spTheme.color
      // wallpaper
  
      // document.body.style.backgroundColor = spTheme.color

  
      // console.log('tje,e', spaceTheme)
      // console.log('sptheme', spTheme)
      // console.log('saces', spaces)
      // console.log('newTheme', newTheme)
      // console.log('theme ', theme)

  
      if (spTheme && spaces) {
        setSpaceTheme(newTheme)
      }
    } catch {
      console.log('error fetching')
    }


  }, [spaces, group]) 

  return !modalOpen ? (
    <>
    <Dropdown />
    <Flex width='25%' gap='4' my='2'>
      <Search />
      <Button variant='minimal' onClick={() => setModalOpen(true)}>Add word</Button>
    </Flex> 

        { currentword && <><MdKeyboardBackspace color={theme.colors.ui.primary} onClick={() => setCurrentword('')}/></>}

        <Flex flexDirection='column' width='25%'>
          { (spaceLex() && currentword === '') ? 
          (
            Object.keys(lex[`${ship}/${group}`])?.map((word, i) => {
              
             return (
              <>
              <MenuItem key={'word' + i} onClick={() => setCurrentword(word)} label={<Box bg='primary'><Text variant='h5'>{word}</Text></Box>} />
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
          <Word word={currentword} definitions={lex[`${ship}/${group}`][currentword]}/>  //  some real weirdness with setting object to state instead of word
          :
          (<NoMatch />)
          }
        </Flex>
    </>
  ) : <AddModal modalOpen={modalOpen} setModalOpen={setModal} />
}

export default Space