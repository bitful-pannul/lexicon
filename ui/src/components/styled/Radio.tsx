import React, { Dispatch, SetStateAction, useState } from 'react'

// todo, generalize for choices & adding options
// -> form
interface RadioProps {
  // options: string[]
  setSelected: Dispatch<SetStateAction<"public" | "private">>
}

const Radio = ({ setSelected }: RadioProps) => {
  const [showPublic, setShowPublic] = useState(true)

  return (
    <fieldset className="flex flex-wrap gap-3">
      <legend className="sr-only">Color</legend>
      <div>
        <input
          type="radio"
          name="ColorOption"
          value="ColorBlack"
          id="ColorBlack"
          className="peer hidden"
          checked={showPublic}
        />

        <label
          htmlFor="ColorBlack"
          className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
        >
          <p className="text-sm font-medium" onClick={() => { setSelected('public'); setShowPublic(true); }}>%public</p>
        </label>
      </div>

      <div>
        <input
          type="radio"
          name="ColorOption"
          value="ColorRed"
          id="ColorRed"
          className="peer hidden"
          checked={!showPublic}
        />

        <label
          htmlFor="ColorRed"
          className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
        >
          <p className="text-sm font-medium" onClick={() => { setSelected('private'); setShowPublic(false); }}>%private</p>
        </label>
      </div>
    </fieldset>

  )
}

export default Radio