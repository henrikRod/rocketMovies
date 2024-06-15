import starFillImg from "../../assets/starFill.svg";
import starImg from "../../assets/star.svg";

import "./styles.css";
import { Link } from "react-router-dom";

export function Card({ data }) {
  return (
    <Link id="card" to="">
      <h1>{ data.title }</h1>

      <div className="starsContainer">
        { Array.from({length: 5}).map( (_, index ) =>  <img src={index < data.grade ? starFillImg : starImg} key={index} alt="Star"/> )} 
      </div>

      <p className="description">{ data.description }</p>

      <div className="tagsContainer">
        {data.tags.map((tag) => {
          return (
            <div key={tag}>
              { tag }
            </div>
          )
        })}
      </div>
    </Link>
  )
}