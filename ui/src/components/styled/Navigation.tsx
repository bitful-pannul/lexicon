import React from 'react'
import { useParams, useNavigate, Outlet } from 'react-router-dom'
import { Popup, Search } from '../'
import useLexiconStore from '../../store/lexiconStore'


const Navigation = () => {
  const { ship, group, word } = useParams()
  const navigate = useNavigate()
  const { setModalOpen } = useLexiconStore()
  const popup = useLexiconStore(state => state.popup)

  return (
  <>
    {popup && <div className='flex justify-center'><Popup type={popup.type} message={popup.message} /></div>}

    <nav aria-label="Breadcrumb">
      <ol role="list" className="flex items-center gap-1 text-sm text-gray-600">
        <li>
          <a onClick={() => {navigate('/apps/lexicon'); setModalOpen(false)}} className="block transition hover:text-gray-700">
            <span className="sr-only"> Home </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>

        {(ship && group) && <li><a onClick={() => {navigate(`/apps/lexicon/${ship}/${group}`); setModalOpen(false)}} className="block transition hover:text-gray-700">{ship}/{group}</a></li>}

        {(ship && group && word) && (
          <>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li>
              <a className="block transition hover:text-gray-700"> {word}</a>
            </li>
          </>
        )}



      </ol>
    </nav>
    <div className='flex-row'>
      <Search />
      <button className='bg-blue-100 rounded' onClick={() => setModalOpen(true)}>Add word</button>
    </div>
    <Outlet />
    </>
  )
}

export default Navigation

