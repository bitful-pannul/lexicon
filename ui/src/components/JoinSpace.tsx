import React, { useState } from 'react'
import { MdKeyboardBackspace } from "react-icons/md"
import useLexiconStore from '../store/lexiconStore'
import { SpaceDropdown } from './'

interface ModalProps {
  modalOpen: boolean
  setModalOpen: (val: boolean) => void
}

const JoinSpace = ({ modalOpen, setModalOpen }: ModalProps) => {
  const [joinSpace, setJoinSpace] = useState('available spaces')
  const [createSpace, setCreateSpace] = useState('your spaces')

  const { createLex, joinLex, getSpaces, getSpaceMembers } = useLexiconStore()

  const our: string = (window as any)?.api?.ship || ''


  const handleJoin = (e: any) => {
    const joinable = !joinSpace.includes('(joined)')


    // or determine create/join flow based on if it's your @p or not
    joinable && joinLex(joinSpace)
    setJoinSpace('')
  }

  const handleCreate = (e: any) => {
    // verify group name sanity
    console.log('createspace, ', createSpace)
    createLex(createSpace)
    setCreateSpace('')
  }

  return modalOpen && (
    <>
      <div className='w-1/4'>
        <button onClick={() => setModalOpen(false)}>X</button>
        <div className='my-3'>

          <SpaceDropdown space={joinSpace} setSpace={setJoinSpace} onlyOur={false} />
          <button onClick={handleJoin} className='bg-blue-100 rounded'>join lex</button>
        </div>

        <div className='my-3'>
          <SpaceDropdown space={createSpace} setSpace={setCreateSpace} onlyOur={true} />
          <button onClick={handleCreate} className='bg-blue-100 rounded'>create lex</button>
        </div>
      </div>
    </>
  )
}

export default JoinSpace