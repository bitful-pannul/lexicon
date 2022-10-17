import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Dropdown, Word, AddModal, NoMatch, Search } from './index'
import { LexContext } from '../context'
import { Button, Input, Flex, Text, MenuItem, Box} from '@holium/design-system'
import { MdKeyboardBackspace } from 'react-icons/md'

const Space = () => {
  //
  const { lex } = useContext(LexContext)
  const { ship, group } = useParams()
  const [currentword, setCurrentword] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  
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


  return !modalOpen ? (
    <>
    <Dropdown />
    <Flex width='25%' gap='4' my='2'>
      <Search />
      <Button variant='minimal'onClick={() => setModalOpen(true)}>add word</Button>
    </Flex> 

        { currentword && <MdKeyboardBackspace onClick={() => setCurrentword('')}/>}

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