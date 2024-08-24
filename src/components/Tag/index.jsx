import { FiX } from "react-icons/fi"

import "./styles.css"

export function Tag({ title, handleAction }) {
  return (
    <div className="tag">
      { title }
      <button
        onClick={handleAction}
      > 
        <FiX size={24} color="#FF859B" />
      </button>
    </div>
  )
}