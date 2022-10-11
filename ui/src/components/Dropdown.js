import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LexContext, SpacesContext } from '../context'
import { Context } from '@holium/design-system'
import { useParams } from 'react-router-dom'

const Dropdown = () => {
    const { lex } = useContext(LexContext)
    const { spaces } = useContext(SpacesContext)
    const [space, setSpace] = useState('~')
    const history = useNavigate()
    const { ship, group } = useParams()


    const handleChange = (e) => {  
      console.log('select: ', e)
    //   e.preventDefault()
      history('/apps/lexicon/' + e.target.value, { replace: true })
      setSpace(e.target.value)
    }

    const testContexts = [
      {
        type: 'ship',
        name: '~bitful-pannul',
        meta: {
          color: "#ff810a",
          picture: null
        }
      }]

    useEffect(() => {
      setSpace(ship + '/' + group)
    }, [ship, group])

    return lex ? (
      <>
      <select onChange={handleChange}>
        { space ? <option key={0} value={space}>{space}</option> : null }

      { Object.keys(lex).map((item , i) => {
        return <option key={i} value={item}>{item}</option>
      }) }

      { Object.keys(spaces).map((item, i) => {
        return <option key={i*2} value={item.substring(1)}>{item.substring(1)}</option>
      })}
      </select>
      <Context availableContexts={testContexts} selectedContext={testContexts[0]} />
      </>
    ) : 'loading...'
}

export default Dropdown