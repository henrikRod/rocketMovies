import Header from "../../components/Header";
import { Button } from "../../components/Button";
import { FiPlus } from "react-icons/fi";
import { Card } from "../../components/Card";

import "./styles.css";

export default function Home() {
  return(
    <div id="home">
      <Header />
      <main className="container">

        <div className="titleContainer">
          <h1>Meus filmes</h1>
          <Button icon={FiPlus} title="Adicionar filme" to="/newMovie" />
        </div>

        <section>
          <Card 
            data = {
              {
                title: "Mensagem A",
                grade: 3,
                description: "TypeError: Cannot read properties of undefined (reading 'map') at Card (index.jsx:39:15)",
                tags: ["Ficção", "Aventura", "Comédia"]
              }
            }
          />
          <Card 
            data = {
              {
                title: "Mensagem B",
                grade: 1,
                description: "TypeError: Cannot read properties of undefined (reading 'map') at Card (index.jsx:39:15)",
                tags: ["Ficção", "Aventura", "Comédia"]
              }
            }
          />
          <Card 
            data = {
              {
                title: "Mensagem C",
                grade: 5,
                description: "TypeError: Cannot read properties of undefined (reading 'map') at Card (index.jsx:39:15)",
                tags: ["Ficção", "Aventura", "Comédia"]
              }
            }
          />

        </section>

      </main>
    </div>
  )
};