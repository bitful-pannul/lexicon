import React, { useState, Dispatch, SetStateAction } from 'react'
import useLexiconStore from '../../store/lexiconStore'
import { JoinSpace, List } from '..'

interface DropProps {
  space: string
  setSpace: Dispatch<SetStateAction<string>>
  onlyOur: boolean
}

const SpaceDropdown = ({ space, setSpace, onlyOur }: DropProps) => {
  const our: string = (window as any)?.api?.ship || ''

  const [open, setOpen] = useState(false)

  const spaces = useLexiconStore(state => state.spaces)
  const lex = useLexiconStore(state => state.lex)



  const items = spaces.map((s) => {
    const joined = Object.keys(lex).includes(s.substring(1))


    const ourown = s.substring(1).includes('~' + our)
    // const ourown = Object.keys(lex).includes(our)
    if (onlyOur) {
      return ourown && (s.substring(1) + (joined ? '  (created)': ''))
    } else {
      return s.substring(1) + (joined ? '  (joined)' : '')
    }
  })


  const handleOpen = () => {
    setOpen(!open)
  }


  return (
    <>
      <div className="inline-flex rounded-md border bg-white">
        <a
          className="rounded-l-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700"
          onClick={() => handleOpen()}
        >
          {space}
        </a>

        <div className="relative">
          <button
            type="button"
            className="inline-flex h-full items-center justify-center rounded-r-md border-l border-gray-100 px-5 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
            onClick={() => handleOpen()}
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>


          {(items && open) && <>
            <div
              className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
              role="menu"
            >
              {items.map((i) => {
                console.log(i)
                return (
                <div className="p-2">
                  <a
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    //@ts-ignore
                    onClick={() => { setSpace(i); handleOpen() }}
                  >
                    {i}
                  </a>
                </div>
)})}

            </div>

          </>}


        </div>
      </div>
    </>
  )
}

export default SpaceDropdown
