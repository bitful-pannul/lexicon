import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown, Search } from './index'
import { Text, Button, Input, theme, Page, Icons, Box, Flex, Ship } from '@holium/design-system'
import { ThemeConsumer, ThemeProvider } from 'styled-components'

const Home = () => {
  const [joinspace, setJoinspace] = useState('')
  const history = useNavigate()
  //const { init, loading, setLoading } = useLexiconStore()

  const handleEvent = (e) => {
    console.log('incoming event.. ', e)
  }



  return (
    <>
      <Dropdown />
      <Flex width='20%'><Search  /></Flex>
      <Flex>
        <Box mt='8'>
          <Text>receperint ad dictionary</Text>
        </Box>
      </Flex>
    </>
  )
}

export default Home
