import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import "./styles.css"

export default function SignIn() {
  return(
    <main id="signInPage">

      <form>
        <div className="title">
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <h2>Faça seu login</h2>

        <Input icon={ FiMail } placeholder="E-mail"/>
        <Input icon={ FiLock } placeholder="Senha"/>

        <Button title="Entrar"/>

        <ButtonText title="Criar conta" to="/signUp"/>
      </form>

      <aside className="background"></aside>
    </main>
  )
};