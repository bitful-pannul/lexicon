import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useLexiconStore from '../store/lexiconStore'

const Home = () => {
  const [joinspace, setJoinspace] = useState('')
  const lex = useLexiconStore(state => state.lex)
  const { loading } = useLexiconStore()

  const navigate = useNavigate()

  const spaces = Object.keys(lex)

  return (
    <>

      <div className=''>
      {spaces.map((s) => {
        return (
          <div onClick={() => navigate('/apps/lexicon/' + s)}>{s}</div>
        )
      })}
      </div>
    </>
  )
}

export default Home
