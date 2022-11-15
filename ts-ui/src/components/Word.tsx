import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MdThumbDownOffAlt, MdThumbDownAlt, MdThumbUpAlt, MdOutlineThumbUpOffAlt, MdKeyboardBackspace } from "react-icons/md"
import useLexiconStore from '../store/lexiconStore'
import { Definition } from '../types'


const Word = () => {
  const [view, setView] = useState<'defs' | 'sentences'>('defs')
  const [inputDef, setInputDef] = useState('')
  const { ship, group, word } = useParams()
  const navigate = useNavigate()
  const our: string = (window as any)?.api?.ship || ''


  const lex = useLexiconStore(state => state.lex)
  const { voteDef, addDefinition } = useLexiconStore()

  const spaceLex = (): Definition[] | undefined => {
    try {
      //@ts-ignore handled if undefined
      return lex[`${ship}/${group}`][word]
    } catch {
      return undefined
    }
  }


  const space: string = `${ship}/${group}`

  const handleChange = (e: { preventDefault: () => void; target: { value: React.SetStateAction<string> } }) => {
    setInputDef(e.target.value)
  }


  const WordView = ({ def, upvotes, downvotes, poster, id }: Definition) => (


    <ul className='mt-10'>
      <div>{def}</div>
      <div className='inline-flex grid-cols-2 gap-5 w-max'>
        {/* @ts-ignore}*/}
        {upvotes?.includes('~' + our) ? <span><MdThumbUpAlt />{upvotes.length}</span> : <span><MdOutlineThumbUpOffAlt onClick={() => voteDef({ space, word, id, "vote-type": 'upvotes' })} /> {upvotes.length} </span>}                                                                                                                      {/* @ts-ignore}*/}
        {downvotes?.includes('~' + our) ? <span><MdThumbDownAlt />{downvotes.length}</span> : <span><MdThumbDownOffAlt onClick={() => voteDef({ space, word, id, "vote-type": 'downvotes' })} /> {downvotes.length} </span>}
        <span className='justify-end'>{poster}</span>
      </div>
        {/* <span>{new Date(def.posted).toISOString()}</span> */ }
    </ul >
  )




if (view === 'defs') return (
  // error handling necessary? do something global [not-found page]
  <>
    <div className='flex-col mb-3'>
      {/*  <Dropdown />
      <Search /> */}


      <MdKeyboardBackspace onClick={() => navigate('/apps/lexicon/' + ship + '/' + group)} />

      <h4>{word}</h4>
    </div>

    <div className='my-3'>
      <button onClick={() => setView('defs')}>definitions</button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button onClick={() => setView('sentences')}>sentences</button>
    </div>

    <div className='flex-row mx-3 my-2'>
      <ul>
        {spaceLex()?.map((d, i: number) => {

          const { def, upvotes, downvotes, poster, id, posted, related, sentence } = d
          return <WordView def={def} upvotes={upvotes} downvotes={downvotes} poster={poster} id={id} posted={posted} related={related} sentence={sentence} />
        })}
      </ul>
      <div className='flex-col w-5 mt-5'>
        <input placeholder='add a definition' onChange={handleChange} />
        {/* @ts-ignore useParams return type for 'word'.. */}
        <button onClick={() => addDefinition({ space, word, def: inputDef, related: [], sentence: [] })}>submit</button>
      </div>
    </div>
  </>
)

//
else return (
  <>
    <MdKeyboardBackspace onClick={() => navigate('/apps/lexicon/' + ship + '/' + group)} />

    <h3>{word}</h3>

    <div className='my-3'>
      <button onClick={() => setView('defs')}>definitions</button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button onClick={() => setView('sentences')}>sentences</button>
    </div>



    {spaceLex()?.map((d, i) => {
      return (
        d.sentence?.map((sen, i) => {
          return (
            <div className='justify-between' key={'sen' + i}>
              <div>{sen} {d.poster}</div>
              {/*<Text variant='caption'>tt test </Text>*/}
            </div>
          )
        })
      )
    })}
  </>
)
}

export default Word