import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Dropdown, Word, AddModal, } from './index'
import { LexContext } from '../context'
import { Button, Input, Text } from '@holium/design-system'

const NoMatch = () => {
  // check if space exist, joined or not. 
  //
  const { lex } = useContext(LexContext)
  const { ship, group } = useParams()
  const [joinSpace, setJoinSpace] = useState('')

  const isour = ship.substring(1) === window?.urbit?.ship


  useEffect(() => {
    console.log('our? ', isour)
  }, [])

  return (isour && lex) ? (
    <>
      <Text>no lexicon yet for {`${ship}/${group}`}</Text>
      <Text>do you want to create one?</Text>
      <Button>create lexicon</Button>
    </>
  ) : (
    <>
      <Text>not joined this spaces' lexicon yet</Text>
      <Text>you can try joining</Text>
      <Button>join {`${ship}/${group}`}</Button>
    </>
  )
}

export default NoMatch