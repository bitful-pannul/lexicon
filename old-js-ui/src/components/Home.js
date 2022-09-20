import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown } from './index'

const Home = () => {
  // welcome page, check if app installed or not
  // browse spaces?
  const [lex, setLex] = useState({})
  const [dropdown, setDropdown] = useState('~')
  const history = useNavigate()

  const handleJoinSpace = (e) => {
    e.preventDefault()
    console.log('joined!')
  }

  // const getLexicon = async () => {
  //   const path = '/definitions/all'
  //   const res = await window.urbit.scry({
  //     app: "lexicon",
  //     path: path,
  //   })
  //   console.log(res)
  //   setLex(res)
  // }

  // useEffect(() => {
  //   setTimeout(() => getLexicon(), 300)
  //   // getLexicon()
  // }, [])

  // const Dropdown = () => {
  //   const handleChange = (e) => {
  //     // e.preventDefault()
  //     history(e.target.value)
  //   }

  //   return lex ? (
  //     <>
  //     <select onChange={handleChange}>
  //       <option key={0} value="~">~</option>
  //     { Object.keys(lex).map((item , i) => {
  //       return <option key={i} value={item}>{item}</option>
  //     }) }
  //     </select>
  //     </>
  //   ) : 'loading/no lex'
  // }

  return (
    <>
        <Dropdown /> 
        <div>
          <input placeholder='search' />
        </div>

        <div>
        receperint ad dictionary
        </div>

        <div>
          <input placeholder='join space' />
          <button onClick={handleJoinSpace}>join</button> 
        </div>
    </>
  )
}

export default Home