import { Input } from "../Input";

import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título" />
        <aside>
          <div>
            <strong>Henrik Rodrigues</strong>
            <a href="#">sair</a>
          </div>
          <a href="#">
            <img src="https://github.com/henrikRod.png" />
          </a>
        </aside>
      </div>
    </header>
  );
};