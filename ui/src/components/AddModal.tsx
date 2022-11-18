import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdKeyboardBackspace } from "react-icons/md"
import useLexiconStore from '../store/lexiconStore'

interface ModalProps {
  modalOpen: boolean
  setModalOpen: (val: boolean) => void
}

const AddModal = ({ modalOpen, setModalOpen }: ModalProps) => {
  const { ship, group } = useParams()
  const [word, setWord] = useState('')
  const [def, setDef] = useState('')
  const [sentence, setSentence] = useState('')
  const [related, setRelated] = useState('')

  const { addDefinition } = useLexiconStore()
  const space = `${ship}/${group}`


  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const rel = related.split(',')

    addDefinition({
      space,
      word,
      def,
      sentence: [sentence],
      related: rel
    })


    setModalOpen(false)

  }

  return modalOpen && (
    <>
      <MdKeyboardBackspace onClick={() => setModalOpen(false)} />

      <div>
        <div>
          <label className='my-2'>word &nbsp;</label>
          <input placeholder='type word' onChange={(e) => setWord(e.target.value)} />
        </div>
        <div>
          <label className='my-2'>definition &nbsp;</label>
          <input placeholder='type your definition..' onChange={(e) => setDef(e.target.value)} />
        </div>
        <div >
          <label className='my-2'>sentence &nbsp;</label>
          <input placeholder='an example of how it is used...' onChange={(e) => setSentence(e.target.value)} />
        </div>
        <div>
          <label className='my-2'>related &nbsp;</label>
          <input placeholder='add some related words, [word, word]' onChange={(e) => setRelated(e.target.value)} />
        </div>
        <div className='justify-end mt-5 gap-5'>
          <button onClick={(e) => setModalOpen(false)}>cancel</button>
          <button onClick={handleSubmit}>submit</button>
        </div>
      </div>
    </>
  )
}

export default AddModal