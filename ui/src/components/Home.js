import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // welcome page, check if app installed or not
  // browse spaces?
  const [lex, setLex] = useState({})
  const history = useNavigate()

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
    getLexicon()
  }, [])

  const Dropdown = () => {
    const handleChange = (e) => {
      e.preventDefault()
      history(e.target.value)
    }

    return lex ? (
      <>
      <select onChange={handleChange}>
      { Object.keys(lex).map((item , i) => {
        return <option key={i} value={item}>{item}</option>
      }) }
      </select>
      </>
    ) : 'loading/no lex'
  }

  return (
    <>
        <div>
        receperint ad dictionary
        </div>

        <Dropdown />
    </>
  )
}

export default Home