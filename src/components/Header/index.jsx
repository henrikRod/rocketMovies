import { Input } from "../Input";
import { Link } from "react-router-dom";
import ProfileImg from "../ProfileImg";

import "./styles.css";

export default function Header({ setSearch }) {
  return (
    <header id="mainHeader">
      <div className="container">
        <h1>RocketMovies</h1>
        <Input 
          placeholder="Pesquisar pelo título"
          onChange={ e => setSearch(e.target.value) }
        />
        <aside>
          <div>
            <strong>Henrik Rodrigues</strong>
            <Link to="/signUp">sair</Link>
          </div>
          <ProfileImg />
        </aside>
      </div>
    </header>
  );
};