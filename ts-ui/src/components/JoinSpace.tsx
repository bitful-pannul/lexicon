import React, { useState } from 'react'
import { MdKeyboardBackspace } from "react-icons/md"
import useLexiconStore from '../store/lexiconStore'
import { Radio } from './'

interface ModalProps {
  modalOpen: boolean
  setModalOpen: (val: boolean) => void
}

const JoinSpace = ({ modalOpen, setModalOpen }: ModalProps) => {
  const [space, setSpace] = useState('')
  const [createSpace, setCreateSpace] = useState('')
  const [perms, setPerms] = useState<'public' | 'private'>('public')
  const [members, setMembers] = useState('')

  const { createLex, joinLex } = useLexiconStore()


  const handleJoin = (e: any) => {
    // verify space + @p 

    // or determine create/join flow based on if it's your @p or not
    joinLex(space)
  }

  const handleCreate = (e: any) => {
    // verify group name sanity
    const mems = members.split(',')

    createLex(createSpace, perms, mems)
  }

  return modalOpen && (
    <>
      <div>
        <button onClick={() => setModalOpen(false)}>X</button>
        <div className='my-3'>
          <input placeholder='~zod/our' onChange={(e) => setSpace(e.target.value)} value={space} />
          <button onClick={handleJoin} className='bg-blue-100 rounded'>join space</button>
        </div>

        <div className='inline-flex grid-cols-2'>
          <input placeholder='name of your space' onChange={(e) => setCreateSpace(e.target.value)} value={createSpace} />
          <Radio setSelected={setPerms} />
        </div>
        <div className='my-3'>
          <input placeholder='~zod,~rus,~nec' onChange={(e) => setMembers(e.target.value)} value={members} />
          <button onClick={handleCreate} className='bg-blue-100 rounded'>create space</button>
        </div>
      </div>
    </>
  )
}

export default JoinSpace