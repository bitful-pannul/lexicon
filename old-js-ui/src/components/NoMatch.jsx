import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Dropdown, Word, AddModal, } from './index'
import { LexContext } from '../context'
import { Button, Input, Text, Box, Flex } from '@holium/design-system'

const NoMatch = () => {
  // check if space exist, joined or not. 
  //
  const { lex } = useContext(LexContext)
  const { ship, group } = useParams()
  const [joinSpace, setJoinSpace] = useState('')

  const isour = () => ship.substring(1) === window?.urbit?.ship

  const spaceLex = () => {
    try {
      return lex[`${ship}/${group}`]
    } catch {
      return undefined
    }
  }
  const joinLex = async () => {
    const joinJson = {
      'join-space': {
        space: `${ship}/${group}`,
      }
    }

    await window.urbit.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: joinJson,
      onSuccess: () => console.log('success! added definition: ', joinJson),
      onError: () => console.log("error! adding definition: ", joinJson),
    })
  }



  const addLex = async () => {
    const addJson = {
      add: {
        space: `${ship}/${group}`,
        word: 'lexicon',
        def: 'lexicon is a dictionary for your own space & others',
        sentence: ['based? ..based on what? just look it up on %lexicon'],
        related: ['urban dictionary', 'gloss']
      }
    }

    await window.urbit.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: addJson,
      onSuccess: () => console.log('success! added definition: ', addJson),
      onError: () => console.log("error! adding definition: ", addJson),
    })
  }

  return (isour() && !spaceLex()) ? (
    <>
      <Flex my='3' flexDirection='column' justifyContent='space-between'>
        <Text variant='h6'>no lexicon yet for your space {`${ship}/${group}`}, want to create one?</Text>
        <Button mt='3' variant='minimal' onClick={() => addLex()}>create lexicon</Button>
      </Flex>
    </>
  ) : (
    <Flex my='3' flexDirection='column' justifyContent='space-between'>
      <Text variant='h6'>not joined this spaces' lexicon yet, try joining?</Text>
      <Button mt='3' variant='minimal' onClick={() => joinLex()}>join {`${ship}/${group}`}</Button>
    </Flex>
  )
}

export default NoMatch