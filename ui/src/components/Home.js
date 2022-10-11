import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown } from './index'
import { Text, Button, Input, theme, Page, Icons, Box, Flex, Ship } from '@holium/design-system'
import { ThemeConsumer, ThemeProvider } from 'styled-components'

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
          <Input placeholder='search' leftIcon={<Icons.Search aria-hidden />}/>
          
        </div>

        <Text variant='h6'>
          testing text
        </Text>

        <Box>
        <Text>receperint ad dictionary</Text>
        </Box>
        <Button onClick={() => history('/apps/lexicon/~rus/biolab', { replace: true })}>go to test space</Button> 


        <Box>
          <Input placeholder='join space' onChange={(e) => setJoinspace(e.target.value)}/>
          <Button onClick={handleJoinSpace}>join</Button> 
        </Box>
    </>
  )
}

export default Home
