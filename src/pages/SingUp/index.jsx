import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import "./styles.css"

export default function SignUp() {
  return(
    <main id="signUpPage">

      <form>
        <div className="title">
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <h2>Faça seu login</h2>

        <Input icon={ FiUser } placeholder="Nome"/>
        <Input icon={ FiMail } placeholder="E-mail"/>
        <Input icon={ FiLock } placeholder="Senha"/>

        <Button title="Cadastrar"/>

        <ButtonText title="Voltar para o login" icon={ FiArrowLeft } />
      </form>

      <aside className="background"></aside>
    </main>
  )
};