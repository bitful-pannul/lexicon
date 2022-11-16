import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useLexiconStore from '../store/lexiconStore'
import { MdKeyboardBackspace } from 'react-icons/md'
// import { Dropdown, Word, AddModal, NoMatch, Search } from './index'
// import { Button, Input, Flex, Text, MenuItem, Box, theme, IconButton} from '@holium/design-system'


const Space = () => {
  const lex = useLexiconStore(state => state.lex)
  const navigate = useNavigate()

  const { ship, group } = useParams()
  const [currentword, setCurrentword] = useState('')
  const [modalOpen, setModalOpen] = useState(false)


  const setModal = (val: boolean) => {
    setModalOpen(val)
  }

  const spaceLex = () => {
    try {
      //@ts-ignore handled if undefined
      return lex[`${ship}/${group}`]
    } catch {
      return undefined
    }
  }

  const navigateToWord = (word: string) => {
    navigate('/apps/lexicon/' + ship + '/' + group + '/' + word)
  }


  return !modalOpen ? (
    <>
      <div className=''>
        {/* <Search />*/}
        <MdKeyboardBackspace onClick={() => navigate('/apps/lexicon/')} />

      </div>
      <button onClick={() => setModalOpen(true)}>Add word</button>


      {/* currentword && <><onClick={() => setCurrentword('')}/></> */}

      <div className=''>
        {(spaceLex() && currentword === '') &&
          ( //@ts-ignore
            Object.keys(lex[`${ship}/${group}`])?.map((word, i) => {

              return (
                <ul>
                  <li key={'word' + i} onClick={() => navigateToWord(word)}> <h4>{word}</h4></li>
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
                </ul>
              )
            })
          )
        }
      </div>
    </>
  ) : <div>modal.</div>  /* <AddModal modalOpen={modalOpen} setModalOpen={setModal} /> */
}

export default Space