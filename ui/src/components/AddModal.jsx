import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Dropdown } from './index'
import { Button, Input, Text, Box, Flex, Label } from '@holium/design-system'
import { MdKeyboardBackspace } from "react-icons/md"
import { useTheme } from 'styled-components'

const AddModal = ({ modalOpen, setModalOpen }) => {
  const { ship, group } = useParams()
  const [word, setWord] = useState('')
  const [def, setDef] = useState('')
  const [sentence, setSentence] = useState('')
  const [related, setRelated] = useState('')
  const theme = useTheme()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const addJson = {
      add: {
        space: `${ship}/${group}`,
        word,
        def,
        sentence: [sentence],
        related: related.split(','),
      }
    }

    const res = await window.urbit.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: addJson,
      onSuccess: () => console.log('success!'),
      onError: () => console.log("wrong, very wrong"),
    })

    console.log('added this: ', res)

    setModalOpen(false)
    window.location.reload(false)

  }

  return modalOpen && (
    <>
      <Dropdown />
      <MdKeyboardBackspace color={theme.colors.ui.primary} onClick={() => setModalOpen(false)} />

      <Flex flexDirection='column' width='50%'>
        <Flex flexDirection='column'>
          <Label required my='2'>word &nbsp;</Label>
          <Input placeholder='type word' onChange={(e) => setWord(e.target.value)} />
        </Flex>
        <Flex flexDirection='column'>
          <Label required my='2'>definition &nbsp;</Label>
          <Input placeholder='type your definition..' onChange={(e) => setDef(e.target.value)} />
        </Flex>
        <Flex flexDirection='column'>
          <Label my='2'>sentence &nbsp;</Label>
          <Input placeholder='an example of how it is used...' onChange={(e) => setSentence(e.target.value)} />
        </Flex>
        <Flex flexDirection='column'>
          <Label my='2'>related &nbsp;</Label>
          <Input placeholder='add some related words, [word, word]' onChange={(e) => setRelated(e.target.value)} />
        </Flex>
        <Flex justifyContent='flex-end' mt='5' gap='5'>
          <Button variant='minimal' onClick={(e) => setModalOpen(false)}>cancel</Button>
          <Button variant='minimal' onClick={handleSubmit}>submit</Button>
        </Flex>
      </Flex>
    </>
  )
}

export default AddModal