import React, { useState, useEffect } from 'react'
import useLexiconStore from '../store/lexiconStore'
import { JoinSpace, List } from './'

const Home = () => {
  const [joinModalOpen, setJoinModalOpen] = useState(false)
  const lex = useLexiconStore(state => state.lex)

  const spaces = Object.keys(lex)

  const items = spaces.map((s) => ({ label: s, navlink: s }))

  return (
    <>
      <div className=''>
        {!joinModalOpen && <button onClick={() => setJoinModalOpen(true)}>join/create</button>}
        {/*@ts-ignore returning undefined is handled*/}
        {joinModalOpen && <JoinSpace modalOpen={joinModalOpen} setModalOpen={setJoinModalOpen} />}
        <List items={items} />
      </div>
    </>
  )
}

export default Home
