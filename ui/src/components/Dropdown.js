import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LexContext } from '../context'
// import { Context, ContextType } from '@holium/design-system'
// import { useParams } from 'react-router-dom'

const Dropdown = (grouplist) => {
    const { lex } = useContext(LexContext)
    const [group, setGroup] = useState('~')
    const history = useNavigate()
    // const { ship, groupname } = useParams()


    const handleChange = (e) => {  
    //   e.preventDefault()
      history('/apps/lexicon/' + e.target.value, { replace: true })
      setGroup(e.target.value)
    }

    const testContexts = [{
        type: 'group',
        name: '~zod/first?',
        meta: { color: 'black' }
    }]

    

    return lex ? (
      <>
      <select onChange={handleChange}>
        { group ? <option key={0} value={group}>{group}</option> : <option key={0} value="">~</option> }
      { Object.keys(lex).map((item , i) => {
        return <option key={i} value={item}>{item}</option>
      }) }
      </select>
      {/* <Context availableContexts={testContexts} menuOrientation="top-left" /> */}
      </>
    ) : 'loading...'
}

export default Dropdown