import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useLexiconStore from '../store/lexiconStore';
import List from './styled/List'



const Search = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSug, setFilteredSug] = useState<{ label: string; navlink: string }[]>([])

  const lex = useLexiconStore(state => state.lex)
  const navigate = useNavigate()
  // ... so you thought map operations in hoon were bad?
  // const wordArray = Object?.values(lex)?.map((w, i) => [Object?.keys(w), Object?.keys(lex)[i]]) // ?.reduce((arr, words, i) => arr.concat(words))


  const wordsArray = () => Object.values(lex).map((w, i) => {
    // map through array of words and attach their corresponding spaces   
    return Object.keys(w).map((word, index) => {
      return {
        label: word,
        navlink: Object.keys(lex)[i] + '/' + word,
      }
    })
  }
  ).flat()

  // TODO, reimplement arrow key + enter buttons navigation properly

  const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value);


    const filtered = wordsArray()?.filter(
      (w) =>
        w.label
          .toString()
          .toLowerCase()
          .indexOf(searchQuery.toString().toLowerCase()) > -1
    );


    console.log('unlnked: ', filtered)

    if (filtered.length === 0) {
      setFilteredSug([{ label: `not found! search web for: ${e.target.value}?`, navlink: `dict/${e.target.value}` }])
    } else {
      setFilteredSug(filtered);
    }


    if (e.target.value === '') {
      setShowSuggestions(false)
    } else {
      setShowSuggestions(true)
    }

  };

  return (
    <>
      <input placeholder='search' onChange={onChange} className='ml-10 bg-gray-200 rounded' />
      {showSuggestions &&
        <div className='bg-gray-200 ml-10 rounded-lg w-1/2'>
          <List items={filteredSug} />
        </div>
      }
    </>
  );
};

export default Search;

