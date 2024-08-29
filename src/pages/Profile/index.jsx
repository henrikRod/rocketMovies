import { useEffect, useState } from "react";

import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/Auth";

import "./styles.css";

export default function Profile() {
  const { updateProfile, user } = useAuth();

  const [ userName, setUserName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ oldPassword, setOldPassword ] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  const [ avatar, setAvatar ] = useState(avatarUrl);
  const [ avatarFile, setAvatarFile ] = useState(null);

  async function handleUpdateUser() {
    const updatedUser = {
      userName: userName || user.name,
      newEmail: email || user.email,
      newPassword: password,
      oldPassword,
    };
  
    await updateProfile({ user: updatedUser, avatarFile });
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imgPreview = URL.createObjectURL(file);
    setAvatar( imgPreview );
  };

  return(
    <div id="profile">
      <header>
        <div className="container">
          <ButtonText icon={ FiArrowLeft } title="Voltar" to="/"/>

          <aside className="profileImgContainer">
            <img src={avatar} />

            <label htmlFor="file" >
              <FiCamera size={24} color="#312E38"/>
              <input 
                type="file" 
                id="file"
                onChange={ handleFileChange }
              />
            </label>
          </aside>
        </div>
      </header>

      <main>
        <div>
          <Input 
            icon={ FiUser }
            placeholder="Usuário"  
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input 
            icon={ FiMail }
            placeholder="Email"  
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Input 
            icon={ FiLock } 
            placeholder="Senha atual"  
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input 
            icon={ FiLock } 
            placeholder="Senha antiga" 
            onChange={(e) => setOldPassword(e.target.value)} 
          />
        </div>

        <Button 
          title="Salvar"
          onClick={handleUpdateUser}
        />
      </main>
    </div>
  )
}