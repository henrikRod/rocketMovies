import { useState } from "react";
import { useAuth } from "../../hooks/Auth";

import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import "./styles.css"

export default function SignIn() {
  const { signIn} = useAuth();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  return(
    <main id="signInPage">

      <form >
        <div className="title">
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <h2>Faça seu login</h2>

        <Input 
          icon={ FiMail } 
          placeholder="E-mail"
          onChange={ e => setEmail(e.target.value)}
        />
        <Input 
          icon={ FiLock } 
          placeholder="Senha"
          onChange={ e => setPassword(e.target.value)}
        />

        <Button 
          title="Entrar"
          onClick={async () => await signIn({ email, password }) }
        />

        <ButtonText title="Criar conta" to="/signUp"/>
      </form>

      <aside className="background"></aside>
    </main>
  )
};