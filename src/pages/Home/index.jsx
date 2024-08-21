import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { Card } from "../../components/Card";
import { FiPlus } from "react-icons/fi";

import "./styles.css";

export default function Home() {
  const [ search, setSearch ] = useState("");
  const [ notes, setNotes ] = useState([]);
  
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movieNotes?title=${search}`);
      setNotes(response.data);
    };

    fetchNotes();
  }, [search])

  return(
    <div id="home">
      <Header 
        setSearch={ setSearch }
      />
      <main className="container">

        <div className="titleContainer">
          <h1>Meus filmes</h1>
          <Button icon={FiPlus} title="Adicionar filme" isLink to="/newMovie" />
        </div>

        <section>
          { notes.map( note => (
            <Card data={note} key={String(note.id)} />
          ))}
        </section>

      </main>
    </div>
  )
};