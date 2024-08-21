import { useState } from "react";

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import "./styles.css"

export default function SignUp() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  async function handleSignUp() {
    if( !name || !email || !password ) {
      return alert("Preencha todos os campos");
    };

    try {
      await api.post("/users", { name, email, password });
    } catch(err) {
      console.log(err)
      if(err.response) {
        alert(err.response.data.message);
      } else {
        alert("Erro ao criar usuário.");
      };
    }
  };
  
  return(
    <main id="signUpPage">

      <form>
        <div className="title">
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <h2>Crie sua conta</h2>

        <Input 
          icon={ FiUser } 
          placeholder="Nome"
          onChange={ e => setName(e.target.value) }
        />
        <Input 
          icon={ FiMail } 
          placeholder="E-mail"
          onChange={ e => setEmail(e.target.value) }
        />
        <Input 
          icon={ FiLock } 
          placeholder="Senha"
          onChange={ e => setPassword(e.target.value) }
        />

        <Button 
          title="Cadastrar"
          onClick={ handleSignUp }
        />

        <ButtonText title="Voltar para o login" icon={ FiArrowLeft } to="/" />
      </form>

      <aside className="background"></aside>
    </main>
  )
};