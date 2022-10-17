import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Text, Flex, Box, Button, Input } from '@holium/design-system'
import { MdKeyboardBackspace } from "react-icons/md"


const Dictionary = () => {
  const [defs, setDefs] = useState()

  const { word } = useParams()
  const history = useNavigate()


  const fetchDict = async () => {    
    const res = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)

    const definitions = res?.data[0]?.meanings[0]?.definitions?.map(d => d.definition)
    console.log('definitions: ', res)
    setDefs(definitions)
  }


  useEffect(() => {
    fetchDict()
  }, [])

  



return (
    // error handling necessary? do something global [not-found page]
    <>
    <Flex width='25%' flexDirection='column' mb='3'>
    </Flex>

      <MdKeyboardBackspace onClick={() => history('/apps/lexicon/', { replace: true }) } />

      <Text variant='h3' my='5'>{word}</Text>

      <Box mb='5'>
        <Button variant='minimal'>definitions</Button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Button variant='minimal'>sentences</Button>
      </Box>

      {defs ? defs?.map((def) => <WordView def={def} />) 
      : <Text variant='h4'>no definitions found for: {word}</Text>
      }



    </>
  )
}

const WordView = ({ def }) => (


  <Flex flexDirection='column' my='2'>
    <Box my='1'><Text variant='caption'>{def}</Text></Box>
    <Flex justifyContent='space-between' my='1'>

    </Flex>
    {/* <span>{new Date(def.posted).toISOString()}</span> */}
  </Flex>
)

export default Dictionary