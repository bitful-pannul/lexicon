import React from 'react'
import { useNavigate } from 'react-router-dom'

interface ListProps {
  items: {
    label: string
    navlink: string | undefined
  }[]
}

const List = ({ items }: ListProps) => {
  const navigate = useNavigate()

  return (
    <>
      <nav aria-label="Main Nav" className="flex flex-col space-y-1">

        {items.map((item, i) => {
          return <a
            onClick={() => navigate('/apps/lexicon/' + item.navlink)}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            {item.label}
          </a>
        })}

      </nav>
    </>
  )

}

export default List