import React, { useState } from 'react'
import useLexiconStore from '../store/lexiconStore'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useParams } from 'react-router-dom'

interface PermsProps {
  perms: string
  members: string[]
}

const Perms = ({ perms, members }: PermsProps) => {
  const [showMembers, setShowMembers] = useState(false)
  const [member, setMember] = useState('')

  const { ship, group } = useParams()
  const { addMember } = useLexiconStore()

  const handleChange = (e: any) => {
    setMember(e.target.value)
  }

  const handleAddMember = (e: any) => {
    // validate proper planet name? 
    const sp = `${ship}/${group}`
    addMember(sp, member)
    setMember('')
  }

  return !showMembers ? (
    <div className='flex-row'>
      <div>
        %{perms}{'  '}
        <button onClick={() => setShowMembers(true)} className='my-3 bg-blue-100'>handle members</button>
      </div>
    </div>
  )
  : (
    <div className='flex-col'>
      <MdKeyboardBackspace onClick={() => setShowMembers(false)} className='ml-2'/>
      <ul>
        {members.map((m, i) => <li>{m}</li>)}

        <input placeholder='add member' onChange={handleChange} value={member} />
        <button onClick={handleAddMember} className='my-3 bg-blue-100'>add member to lex</button>
      </ul>
    </div>
  )
}

export default Perms