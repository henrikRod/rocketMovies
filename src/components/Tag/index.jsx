import { FiX } from "react-icons/fi"

import "./styles.css"

export function Tag({ title }) {
  return (
    <div className="tag">
      { title }
      <button> 
        <FiX size={24} color="#FF859B" />
      </button>
    </div>
  )
}