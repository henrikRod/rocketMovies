import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import "./styles.css";

export default function Profile() {
  return(
    <div id="profile">
      <header>
        <div className="container">
          <ButtonText icon={ FiArrowLeft } title="Voltar" to="/"/>

          <aside className="profileImgContainer">
            <img src="https://github.com/henrikRod.png" />

            <label htmlFor="file" >
              <FiCamera size={24} color="#312E38"/>
              <input type="file" id="file" />
            </label>
          </aside>
        </div>
      </header>

      <main>
        <div>
          <Input icon={ FiUser } placeholder="Usuário" />
          <Input icon={ FiMail } placeholder="Email" />
        </div>

        <div>
          <Input icon={ FiLock } placeholder="Senha atual" />
          <Input icon={ FiLock } placeholder="Senha antiga" />
        </div>

        <Button title="Salvar" />
      </main>
    </div>
  )
}