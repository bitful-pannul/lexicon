import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useLexiconStore from '../store/lexiconStore'
import List from './styled/List'

const Home = () => {
  const [joinspace, setJoinspace] = useState('')
  const lex = useLexiconStore(state => state.lex)

  const spaces = Object.keys(lex)

  const items = spaces.map((s) => ({ label: s, navlink: s }))

  return (
    <>
      <div className=''>
        <List items={items} />
      </div>
    </>
  )
}

export default Home
