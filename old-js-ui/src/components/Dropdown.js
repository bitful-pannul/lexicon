import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Context, ContextType } from '@holium/design-system'

const Dropdown = (grouplist) => {
    const [group, setGroup] = useState('~')
    const [lex, setLex] = useState({})
    const history = useNavigate()


    const handleChange = (e) => {  
    //   e.preventDefault()
      setGroup(e.target.value)
      history('/apps/lexicon/' + e.target.value, { replace: true })
    }

    const testContexts = [{
        type: 'group',
        name: '~zod/first?',
        meta: { color: 'black' }
    }]

    

    const getLexicon = async () => {
        const path = '/definitions/all'
        const res = await window.urbit.scry({
          app: "lexicon",
          path: path,
        })
        console.log(res)
        setLex(res)
      }
    
      useEffect(() => {
        setTimeout(() => getLexicon(), 300)
        // getLexicon()
    }, [])

    return lex ? (
      <>
      <select onChange={handleChange}>
        { !group ? <option key={0} value={group}>{group}</option> : <option key={0} value="">~</option> }
      { Object.keys(lex).map((item , i) => {
        return <option key={i} value={item}>{item}</option>
      }) }
      </select>
      {/* <Context availableContexts={testContexts} menuOrientation="top-left" /> */}
      </>
    ) : 'loading...'
}

export default Dropdown