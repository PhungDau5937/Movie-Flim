/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from 'react-router-dom'
/* import cards_data from "../../assets/cards/Cards_data"; */

const TitleCards = ({ title, category }) => {
   
  const cardsRef = useRef();

  const [apiData, setApiData] = useState([]);

  // ----- API Film -----
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQ3OTRkZGYxMzE4NmFmY2M4OTQ3YTJjNzg4YjE0OCIsIm5iZiI6MTczNDQyMDE3Mi45MjMsInN1YiI6IjY3NjEyNmNjN2JmMzg2MDUxNTE4OTg0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M4Cpta75o2nN6K_aedweT_WiuZuM-dupiewBlZ6tumc",
    },
  };

  /* lan chuot ngang cua cac cards */
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

   
  useEffect(() => {
    // fetch API
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="titleCards">
      <h2>{title ? title : "Poppular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index_card) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index_card}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
