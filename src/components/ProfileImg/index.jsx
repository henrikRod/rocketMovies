import { Link } from "react-router-dom"

import "./styles.css";

export default function ProfileImg() {
  return (
    <Link to="/profile" >
      <img src="https://github.com/henrikRod.png" className="profileImg"/>
    </Link>
  )
}