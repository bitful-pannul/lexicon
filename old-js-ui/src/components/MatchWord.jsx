import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { LexContext } from '../context'
import { Text, Flex, Box, Button, Input } from '@holium/design-system'
import { MdThumbDownOffAlt, MdThumbDownAlt, MdThumbUpAlt, MdOutlineThumbUpOffAlt, MdKeyboardBackspace } from "react-icons/md"
import { Dropdown, Search } from './index'


const MatchWord = () => {
  const { lex } = useContext(LexContext)
  const [view, setView] = useState('defs') // defs | sentences
  const [inputdef, setInputdef] = useState('')
  const { ship, group, word } = useParams()
  const history = useNavigate()

  const defs = lex && lex[`${ship}/${group}`][word]

  const addDef = async (e) => {
    const addJson = {
      add: {
        space: `${ship}/${group}`,
        word: word,
        def: inputdef,
        sentence: [],
        related: [],
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

  // id=@uv votetype=?(%upvotes %downvotes)
  const handleVote = async (id, votetype) => {
    const voteJson = {
      vote: {
        space: `${ship}/${group}`,
        word: word,
        id,
        "vote-type": votetype,
      }
    }

    console.log(voteJson)

    await window.urbit.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: voteJson,
      onSuccess: () => console.log("success! voted on: ", voteJson),
      onError: () => console.log('error votin on: ', voteJson)
    })
  }


  const handleChange = (e) => {
    e.preventDefault()
    setInputdef(e.target.value)
  }




  const WordView = ({ def }) => (


    <Flex flexDirection='column' my='2'>
      <Box my='1'><Text variant='caption'>{def.def}</Text></Box>
      <Flex justifyContent='space-between' my='1'>
        <Box>
          {/* with votes, change state of upvote button by mocking & changing state... or through some kind of subscribe/event action instead? */}
          {/* reactions probably good to implement anyway.   */}
          {def.upvotes?.includes('~' + window.urbit.ship) ? <><MdThumbUpAlt />{def.upvotes.length}</> : <><MdOutlineThumbUpOffAlt onClick={() => handleVote(def.id, 'upvotes')} /> {def.upvotes.length} </>}
          {def.downvotes?.includes('~' + window.urbit.ship) ? <><MdThumbDownAlt />{def.downvotes.length}</> : <><MdThumbDownOffAlt onClick={() => handleVote(def.id, 'downvotes')} /> {def.downvotes.length} </>}
        </Box>
        <Flex justifyContent='flex-end'>
          <Text variant='caption'>{def.poster}</Text>
        </Flex>
      </Flex>
      {/* <span>{new Date(def.posted).toISOString()}</span> */}
    </Flex>
  )




  if (view === 'defs') return (
    // error handling necessary? do something global [not-found page]
    <>
    <Flex width='25%' flexDirection='column' mb='3'>
      <Dropdown />
      <Search />
    </Flex>

      <MdKeyboardBackspace onClick={() => history('/apps/lexicon/' + ship + '/' + group)}/>

      <Text variant='h3' my='5'>{word}</Text>

      <Box mb='5'>
        <Button variant='minimal' onClick={() => setView('defs')}>definitions</Button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Button variant='minimal' onClick={() => setView('sentences')}>sentences</Button>
      </Box>



      {defs?.map((d, i) => {
        console.log(d)
        return <WordView def={d} />
      })}
      <Flex flexDirection='column' width='25%'>
        <Input placeholder='add a definition' onChange={handleChange} />
        <Button variant='minimal' onClick={addDef}>submit</Button>
      </Flex>
    </>
  )

  if (view === 'sentences') return (
    <>
      <Text variant='h3' my='5'>{word}</Text>

      <Box mb='5'>
        <Button variant='minimal' onClick={() => setView('defs')}>definitions</Button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Button variant='minimal' onClick={() => setView('sentences')}>sentences</Button>
      </Box>



      {defs?.map((d, i) => {
        return (
          d.sentence?.map((sen, i) => {
            return (
              <Flex justifyContent='space-between' key={'sen' + i}>
                <Text variant='caption'>{sen} {d.poster}</Text>
                {/*<Text variant='caption'>tt test </Text>*/}
              </Flex>
            )
          })
        )
      })}
    </>
  )
}

export default MatchWord