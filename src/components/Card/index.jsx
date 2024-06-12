import startFillImg from "../../assets/starFill.svg";
import startImg from "../../assets/star.svg";

import "./styles.css";

export function Card({title, tags, grade, description}) {
  return (
    <button id="card">
      <h1>{ title }</h1>

      <div className="starsContainer">
        { Array.from({length: 5}).map( (_, index ) => {
          return (
            <img src={index < grade ? startFillImg : startImg} key={index} alt="Star"/>
          )
        })} 
      </div>

      <p className="description">{ description }</p>

      <div className="tagsContainer">
        {tags.map((tag) => {
          return (
            <div key={tag}>
              { tag }
            </div>
          )
        })}
      </div>
    </button>
  )
}