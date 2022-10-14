import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Text, Flex, Box, Button, Input } from '@holium/design-system'
import { MdThumbDownOffAlt, MdThumbDownAlt, MdThumbUpAlt, MdOutlineThumbUpOffAlt } from "react-icons/md"

const Word = ({ word, definitions }) => {
  const [view, setView] = useState('defs') // defs | sentences
  const [inputdef, setInputdef] = useState('')
  const { ship, group } = useParams()

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
        id, id,
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

  // const upvote = ()

  // const downvote = ()
  useEffect(() => {
    console.log('defs: ', definitions)
    console.log('word: ', word)
  }, [])


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
      <Text variant='h3' my='5'>{word}</Text>

      <Box mb='5'>
        <Button variant='minimal' onClick={() => setView('defs')}>definitions</Button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Button variant='minimal' onClick={() => setView('sentences')}>sentences</Button>
      </Box>



      {definitions?.map((d, i) => {
        console.log(d)
        return <WordView def={d} />
      })}
      <Flex flexDirection='column'>
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



      {definitions?.map((d, i) => {
        return (
          d.sentence?.map((sen, i) => {
            return (
              <div key={'sen' + i}>
                <span>{sen} {d.poster}</span>
              </div>
            )
          })
        )
      })}
    </>
  )
}


export default Word
