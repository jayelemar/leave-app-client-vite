import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface TogglePasswordIconProps {
  initialState: boolean
  onClick: () => void
}

const TogglePasswordIcon: React.FC<TogglePasswordIconProps> = ({ initialState, onClick }) => {
  const [visible, setVisible] = useState(initialState)

  const toggleVisibility = () => {
    setVisible((prev) => !prev)
    onClick()
  }

  return (
    <>
      {visible ? (
        <EyeOff className="absolute right-2 top-10 cursor-pointer text-gray-300" onClick={toggleVisibility} />
      ) : (
        <Eye className="absolute right-2 top-10 cursor-pointer text-gray-300" onClick={toggleVisibility} />
      )}
    </>
  )
}

export default TogglePasswordIcon
