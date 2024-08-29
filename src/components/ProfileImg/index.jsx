import { useState } from "react";
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/Auth";

import { api } from "../../services/api";

import "./styles.css";

export default function ProfileImg() {
  const { user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [ avatar, setAvatar ] = useState(avatarUrl);
  
  return (
    <Link to="/profile" >
      <img src={avatar} className="profileImg"/>
    </Link>
  )
}