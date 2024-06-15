import { Input } from "../Input";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Header() {
  return (
    <header id="mainHeader">
      <div className="container">
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título" />
        <aside>
          <div>
            <strong>Henrik Rodrigues</strong>
            <Link to="/signUp">sair</Link>
          </div>
          <Link to="/profile">
            <img src="https://github.com/henrikRod.png" />
          </Link>
        </aside>
      </div>
    </header>
  );
};