import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown } from './index'
import { Text, Button } from '@holium/design-system'

const Home = () => {
  // welcome page, check if app installed or not
  // browse spaces?
  const [lex, setLex] = useState({})
  const [dropdown, setDropdown] = useState('~')
  const [joinspace, setJoinspace] = useState('')
  const history = useNavigate()

  const handleEvent = (e) => {
    console.log('incoming event.. ', e)
  }

  const handleJoinSpace = async (e) => {
    e.preventDefault()
    
    const res = await window.urbit.subscribe({
      app: "lexicon",
      path: joinspace,
      event: handleEvent,
      err: console.log,
      quit: console.log
    })

    console.log('joined! ', res)
  }


  return (
    <>
        <Dropdown /> 
        <div>
          <input placeholder='search' />
        </div>

        <Text variant='body'>
          testing
        </Text>

        <div>
        receperint ad dictionary
        </div>

        <div>
          <input placeholder='join space' onChange={(e) => setJoinspace(e.target.value)}/>
          <Button onClick={handleJoinSpace}>join</Button> 
        </div>
    </>
  )
}

export default Home