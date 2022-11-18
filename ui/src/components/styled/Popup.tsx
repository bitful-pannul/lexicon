import React from 'react'
import useLexiconStore from '../../store/lexiconStore'

interface PopupProps {
  type: string
  message: string
}

const Popup = ({ type, message }: PopupProps) => {
  const { setPopup } = useLexiconStore()

  const color = `text-${(type === 'success' ? 'green' : 'red')}-600`

  const handleClose = (e: any) => {
    setPopup(undefined)
  }

  return (
    <div role="alert" className="w-1/6 rounded-xl border border-gray-100 p-4 shadow-xl relative z-10">
      <div className="flex items-start gap-4">
        <span className={color}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900"> {type} </strong>

          <p className="mt-1 text-sm text-gray-700">
            {message}
          </p>
        </div>

        <button onClick={handleClose} className="text-gray-500 transition hover:text-gray-600">
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Popup