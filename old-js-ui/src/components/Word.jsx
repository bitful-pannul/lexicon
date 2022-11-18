import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Text, Flex, Box, Button, Input, IconButton } from '@holium/design-system'
import { MdThumbDownOffAlt, MdThumbDownAlt, MdThumbUpAlt, MdOutlineThumbUpOffAlt } from "react-icons/md"
import { useTheme } from 'styled-components'

const Word = ({ word, definitions }) => {
  const [view, setView] = useState('defs') // defs | sentences
  const [inputdef, setInputdef] = useState('')
  const { ship, group } = useParams()

  const [defs, setDefs] = useState(definitions)
  const theme = useTheme()

  const handleAdd = async (e) => {
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

    const def = {
      poster: window.urbit.ship,
      def: inputdef,
      upvotes: [],
      downvotes: [],
    }

    setDefs([...defs, def])
  }

  // id=@uv votetype=?(upvotes downvotes)
  const handleVote = async (id, votetype) => {
    const voteJson = {
      vote: {
        space: `${ship}/${group}`,
        word: word,
        id,
        "vote-type": votetype,
      }
    }


    await window.urbit.poke({
      app: "lexicon",
      mark: "lexicon-action",
      json: voteJson,
      onSuccess: () => console.log("success! voted on: ", voteJson),
      onError: () => console.log('error votin on: ', voteJson)
    })

    const updatedDefs = defs.map((d) => {
      if (d.id === id) {
        const tempDef = d
        tempDef[votetype] = d[votetype].concat('~' + window.urbit.ship)
        return tempDef
      }
      return d
    })

    setDefs(updatedDefs)
  }


  const handleChange = (e) => {
    e.preventDefault()
    setInputdef(e.target.value)
  }



  const WordView = ({ def }) => (


    <Flex flexDirection='column' my='2' ml='2'>
      <Box my='1'><Text variant='caption'>{def.def}</Text></Box>
      <Flex justifyContent='space-between' my='1'>
        <Box>
          {/* with votes, change state of upvote button by mocking & changing state... or through some kind of subscribe/event action instead? */}
          {/* reactions probably good to implement anyway.   */}
          {/* slight problem with dark/light mode w/ the buttons, how to change color based on theme? wrapping in IconButton doesn't work*/}
          {def.upvotes?.includes('~' + window.urbit.ship) ? <><MdThumbUpAlt color={theme.colors.ui.primary} /><span style={{color: theme.colors.ui.primary}}>{def.upvotes.length}</span></> : <><MdOutlineThumbUpOffAlt onClick={() => handleVote(def.id, 'upvotes')} color={theme.colors.ui.primary} /> <span style={{color: theme.colors.ui.primary}}>{def.upvotes.length}</span></>}
          {def.downvotes?.includes('~' + window.urbit.ship) ? <><MdThumbDownAlt color={theme.colors.ui.primary} /><span style={{color: theme.colors.ui.primary}}>{def.downvotes.length}</span></> : <><MdThumbDownOffAlt onClick={() => handleVote(def.id, 'downvotes')} color={theme.colors.ui.primary} /> <span style={{color: theme.colors.ui.primary}}>{def.downvotes.length}</span> </>}
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
        <Button variant='minimal' onClick={() => setView('defs')}>Definitions</Button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Button variant='minimal' onClick={() => setView('sentences')}>Sentences</Button>
      </Box>



      {defs?.map((d, i) => {
        return <WordView key={'word' + i} def={d} />
      })}
      <Flex flexDirection='column'>
        <Input placeholder='add a definition' onChange={handleChange} />
        <Button variant='minimal' onClick={handleAdd}>Submit</Button>
      </Flex>
    </>
  )

  if (view === 'sentences') return (
    <>
      <Text variant='h3' my='5'>{word}</Text>

      <Box mb='5'>
        <Button variant='minimal' onClick={() => setView('defs')}>Definitions</Button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Button variant='minimal' onClick={() => setView('sentences')}>Sentences</Button>
      </Box>



      {defs?.map((d, i) => {
        return (
          d.sentence?.map((sen, i) => {
            return (
              <Flex justifyContent='space-between' key={'sen' + i}>
                {/* sometimes sentence empty, don't render the whole thing */}
                { sen && <><Text variant='caption'>{sen}</Text><Text variant='caption'>{d.poster}</Text></>}
              </Flex>
            )
          })
        )
      })}
    </>
  )
}


export default Word
