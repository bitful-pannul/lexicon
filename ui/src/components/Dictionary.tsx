import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Definitions } from '../types'


const Dictionary = () => {
  const [defs, setDefs] = useState<any>()
  const [error, setError] = useState<boolean>()
  const { word } = useParams()
  const navigate = useNavigate()


  const fetchDict = async () => {
    try {
      const res = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)

      //@ts-ignore  dictionaryapi return type
      const definitions = res?.data[0]?.meanings[0]?.definitions?.map(d => d.definition)
      console.log('definitions: ', res)
      console.log('definitions: ', definitions)
      setDefs(definitions)
    } catch {
      setError(true)
    }

  }

  useEffect(() => {
    fetchDict()
  }, [])


  if (error) return (<div>{word} not found...</div>)

  return !defs ? <div>loading</div> : (
    <>

      <div onClick={() => navigate('/apps/lexicon/~dev/our', { replace: true })}>{"<-"}</div>

      <div>
        <button>definitions</button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <button>sentences</button>
      </div>

      <h2>word: {word}</h2>


      <ul>
        {defs ? defs?.map((def: any, i: number) => <WordView def={def} i />)
          : <div>no definitions found for: {word}</div>}
      </ul>


    </>
  )
}

const WordView = ({ def, i }: any) => (


  <li key={'word' + i}>
    <div>{def}</div>
  </li>
)

export default Dictionary