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
      <div className="flex-col mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
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
