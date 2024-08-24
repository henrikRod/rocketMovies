import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../components/Header";
import starImg from "../../assets/star.svg";
import starFillImg from "../../assets/starFill.svg";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft, FiClock } from "react-icons/fi";

import { useAuth } from "../../hooks/Auth";
import { api } from "../../services/api";

import ProfileImg from "../../components/ProfileImg";

import "./styles.css";

export default function MoviePreview() {
  const { user } = useAuth();

  const [ noteData, setNoteData ] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function getNoteData() {
      try {
        const response = await api.get(`/movieNotes/${id}`);
        setNoteData(response.data);
      } catch(err) {
        if(err.response) {
          alert(err.response.data.message);
        } else {
          alert("Falha ao recuperar nota");
        };
      };
    };

    getNoteData();
  }, [])  

  return(
    <>
      <Header />
      <div className="container" id="moviePreviewPage">
        <ButtonText icon={ FiArrowLeft } title="Voltar" to="/"/>

        <section className="introduction">

          <div>
            <h1>{ noteData.title }</h1>
            <div className="starsContainer">
              { Array.from({length: 5}).map( (_, index ) =>  <img src={index < noteData.rating ? starFillImg : starImg} key={index} alt="Star" className="star"/> )} 
            </div>
          </div>

          <div className="authorInfos">
            <span><ProfileImg /> Por { user.name }</span>
            <span><FiClock color="#FF859B" />{ noteData.updated_at }</span>
          </div>

        </section>

        <section className="tagsContainer">
          {noteData.movieTags?.map((tag) => {
            return (
              <div key={tag.id}>
                { tag.name }
              </div>
            )
          })}
        </section>

        <div className="descriptionContainer">
          { noteData.description }
        </div>
      </div>
    </>
  )
};