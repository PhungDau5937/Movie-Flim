// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiDataPlayer, setApiDataPlayer] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQ3OTRkZGYxMzE4NmFmY2M4OTQ3YTJjNzg4YjE0OCIsIm5iZiI6MTczNDQyMDE3Mi45MjMsInN1YiI6IjY3NjEyNmNjN2JmMzg2MDUxNTE4OTg0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M4Cpta75o2nN6K_aedweT_WiuZuM-dupiewBlZ6tumc",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiDataPlayer(res.results[0]))
      .catch((err) => console.error(err));
  });

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() =>{
          navigate(-2);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiDataPlayer.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="player-info">
        <p>{apiDataPlayer.published_at.slice(0, 10)}</p>
        <p>{apiDataPlayer.name}</p>
        <p>{apiDataPlayer.type}</p>
      </div>
    </div>
  );
};

export default Player;
