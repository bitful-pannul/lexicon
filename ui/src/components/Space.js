import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Dropdown, Word, AddModal } from './index'
import { LexContext } from '../context'
import { Button, Input } from '@holium/design-system'

const Space = () => {
  // check if space exist, joined or not. 
  //
  const { lex } = useContext(LexContext)
  const { ship, group } = useParams()
  const [currentword, setCurrentword] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  
  const setModal = (val) => {
    setModalOpen(val)
  }


  return !modalOpen ? (
    <>
    <Dropdown />
    <div>
      <input placeholder='search' />
      <Button onClick={() => setModalOpen(true)}>add word</Button>
    </div> 

        { currentword && <div onClick={() => setCurrentword('')}>{'<-'}</div> }

        <div>
          { (lex && currentword === '') ? 
          (
            Object.keys(lex[`${ship}/${group}`]).map((word, i) => {
              
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
          <Word word={currentword} definitions={lex[`${ship}/${group}`][currentword]}/>  //  some real weirdness with setting object to state instead of word
          :
          (<div>no definitions for this space yet</div>)
          }
        </div>
    </>
  ) : <AddModal modalOpen={modalOpen} setModalOpen={setModal} />
}

export default Space