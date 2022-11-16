import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useLexiconStore from '../store/lexiconStore'
import { MdKeyboardBackspace } from 'react-icons/md'
import AddModal from './AddModal'
import List from './styled/List'


const Space = () => {
  const lex = useLexiconStore(state => state.lex)
  const modalOpen = useLexiconStore(state => state.modalOpen)
  const { setModalOpen } = useLexiconStore()
  const navigate = useNavigate()

  const { ship, group } = useParams()
  

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

  const items = spaceLex() && Object.keys(lex[`${ship}/${group}`])?.map((word, i) => ({ label: word, navlink: `${ship}/${group}/${word}` }))

  //@ts-ignore if modalOpen then AddModal will render
  return modalOpen ? <AddModal modalOpen={modalOpen} setModalOpen={setModal} />
    : (
      <>
        <div className=''>
          {/* <Search />*/}
          <MdKeyboardBackspace className='-mt-5 ml-2' onClick={() => navigate('/apps/lexicon/')} />

        </div>
        <button onClick={() => setModalOpen(true)}>Add word</button>


        <div className='w-1/2'>
          {/*@ts-ignore nullcheck in place*/} 
          {spaceLex() && <List items={items} />}
        </div>
      </>
    )
}

export default Space