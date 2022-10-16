import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown, Search } from './index'
import { Text, Button, Input, theme, Page, Icons, Box, Flex, Ship } from '@holium/design-system'
import { ThemeConsumer, ThemeProvider } from 'styled-components'
import { useLexiconStore } from '../store'

const Home = () => {
  // welcome page, check if app installed or not
  // browse spaces?
  const [joinspace, setJoinspace] = useState('')
  const history = useNavigate()
  const { init, loading, setLoading } = useLexiconStore()

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


  useEffect(() => {
    console.log('at the start. loading: ', loading)
    console.log('setting loading now, ', setLoading('we fetching dawg.'))
    console.log('loading again: ', loading)
    console.log('does this return anything? ', init().then((r)=>console.log(r)))
  }, [])

  return (
    <>
      <Dropdown />
      <Flex width='20%'><Search  /></Flex>

      <Text variant='h6'>
        testing text
      </Text>
      <Flex>
        <Box m={2}>
          <Text>receperint ad dictionary</Text>
        </Box>
        <Box m={1}>
          <Button onClick={() => history('/apps/lexicon/~rus/biolab', { replace: true })}>go to test space</Button>
        </Box>
      </Flex>

      <Box w={5} pt={2}>
        <Input placeholder='join space' onChange={(e) => setJoinspace(e.target.value)} />
        <Button p={4} onClick={handleJoinSpace}> join </Button>
      </Box>
    </>
  )
}

export default Home
