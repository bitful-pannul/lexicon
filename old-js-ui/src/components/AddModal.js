import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Dropdown } from './index'

const AddModal = ({modalOpen, setModalOpen}) => {
  const { ship, group } = useParams()
  const [word, setWord] = useState('')
  const [def, setDef] = useState('')
  const [sentence, setSentence] = useState('')
  const [related, setRelated] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const addJson = {
      add: {
        space: `${ship}/${group}`,
        word,
        def,
        sentences: [sentence],
        related: related.split(','),
      }
    }

    const res = await window.urbit.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: addJson,
      onSuccess: () => console.log('success!'),
      onError: () => console.log("wrong, very wrong"),
    })

    console.log('added this: ', res)


  }

  return modalOpen && (
    <>
      <Dropdown />
      <div onClick={() => setModalOpen(false)}>{'<-'}</div>
      <div>
        <span>word*: &nbsp;&nbsp;</span>
        <input type='text' placeholder='type word' onChange={(e) => setWord(e.target.value)}/> 
      </div>
      <div>
        <span>definition*: &nbsp;&nbsp;</span>
        <input type='text' placeholder='your definition' onChange={(e) => setDef(e.target.value)}/> 
      </div>
      <div>
        <span>sentence: &nbsp;&nbsp;</span>
        <input type='text' placeholder='an example of how it is used' onChange={(e) => setSentence(e.target.value)}/> 
      </div>
      <div>
        <span>related: &nbsp;&nbsp;</span>
        <input type='text' placeholder='add some related words, [word, word]' onChange={(e) => setRelated(e.target.value)}/> 
      </div>
      <div>
        <button onClick={(e) => setModalOpen(false)}>cancel</button>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </>
  )  
}

export default AddModal