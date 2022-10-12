import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LexContext, SpacesContext } from '../context'
import { Context, Box, Flex } from '@holium/design-system'
import { useParams } from 'react-router-dom'

const Dropdown = () => {
    const { lex } = useContext(LexContext)
    const { spaces } = useContext(SpacesContext)
    const [space, setSpace] = useState({})
    const history = useNavigate()
    const { ship, group } = useParams()


    const handleChange = (e) => {  
      console.log('select: ', e)
    //   e.preventDefault()
      history('/apps/lexicon/' + e.name, { replace: true })
      setSpace(e.name)
    }

    const firstContext = 
      {
        type: 'group',
        name: '~dev/our',
        meta: {
          color: "#ff810a",
          picture: 'https://i.imgur.com/JRw8tTj.jpeg'
        }
      }

    const testSpaces = spaces && Object.keys(spaces).map((s, i) => {
      return {
        type: 'group',
        name: s.substring(1),
        meta: {
          color: spaces[s].color,
          picture: spaces[s].picture
        }
      }
    })

    useEffect(() => {
      
      console.log('testspaces', testSpaces)
    }, [ship, group])

    return spaces ? (
      <>
      {/* <select onChange={handleChange}>
        { space ? <option key={0} value={space}>{space}</option> : null }

      { lex && Object.keys(lex).map((item , i) => {
        return <option key={i} value={item}>{item}</option>
      }) } */}

      {/* { spaces && Object.keys(spaces).map((item, i) => {
        return <option key={i*2} value={item?.substring(1)}>{item?.substring(1)}</option>
      }) }
      </select> */}
      <Flex>
      <Context availableContexts={testSpaces} selectedContext={firstContext} menuOrientation='top-left' onContextClick={handleChange}/>
      </Flex>
      </>
    ) : 'loading...'
}

export default Dropdown