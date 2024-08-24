import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Header from "../../components/Header";
import { Tag } from "../../components/Tag";

import { api } from "../../services/api";

import "./styles.css"

export default function NewMovie() {
  const [ title, setTitle ] = useState("");
  const [ rating, setRating ] = useState();
  const [ description, setDescription ] = useState("");  
  
  const [ tags, setTags ] = useState([]);
  const [ newTag, setNewTag ] = useState("");

  const navigate = useNavigate();

  function handleAddNewTag() {
    if(newTag === "") return;
    setTags( prevTags => ([...prevTags, newTag]));
    setNewTag("");
  };

  function handleRemoveTag(tagIndex) {
    setTags( prevTags => prevTags.filter( (tag, index) => index !== tagIndex));
  };

  async function handleAddNewMovie() {
    if( !title || !rating || !description) return alert("Todos os campos devem ser preenchidos");
    try {
      await api.post("/movieNotes", { title, description, rating, tags});
      navigate("/")
    } catch(err) {
      if(err.response) {
        alert(err.response.data.message);
      } else {
        alert("Houve um erro ao salvar a nota");
      };
    }

  };

  return (
    <>
      <Header />
      <div className="container" id="newMoviePage">
        <ButtonText icon={ FiArrowLeft } title="Voltar" to="/"/>

        <h1>Novo filme</h1>

        <section className="contentContainer">
          <Input 
            placeholder="Título" 
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input 
            placeholder="Sua nota (de 0 a 5)" 
            onChange={(e) => setRating(e.target.value)}
            type="number"
            max={5}
            min={0}
          />

          <textarea 
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}  
          />
        </section>

        <section>
          <h2>Marcadores</h2>

          <div className="tagsContainer">
            { tags.map( (tag, index) => (
              <Tag 
                title={tag}
                key={index}
                handleAction={() => handleRemoveTag(index)}
              />
            ))}
            
            <Input 
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
              handleConfirmAction={handleAddNewTag}
              placeholder="Novo marcador" 
              icon={ FiPlus }
              isNewTag 
            />
          </div>
        </section>

        <section className="actionsContainer">
          <Button 
            title="Excluir filme"
            btnStyle="btnReverse"
            onClick={() => navigate("/")}
          />
          <Button 
            title="Salvar alterações"
            onClick={handleAddNewMovie}
          />
        </section>
      </div>
    </>
  )
}