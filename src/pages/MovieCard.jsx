import axios from "axios";
import React, { useEffect, useState } from "react";
import Reviews from "../components/reviews";
import { useParams } from "react-router-dom";

export default function MovieCard() {
  const { id } = useParams();

  const apiUrl = `http://localhost:3000/movies/${id}`;

  const [movie, setMovie] = useState([]);

  const fetchMovie = () => {
    axios.get(apiUrl).then((res) => {
      setMovie(res.data.data);
    });
  };

  useEffect(fetchMovie, []);
  console.log(movie);

  return (
    <>
      <div key={movie.id}>
        <img src={`http://localhost:3000/movies_cover/${movie.image}`} alt="" />
        <h2>{movie.title}</h2>
        <p>{movie.director}</p>
        <p>{movie.genre}</p>
        <p>{movie.release_year}</p>
        <p>{movie.abstract}</p>
      </div>
      <Reviews name={movie.name} vote={movie.vote} text={movie.text} />
    </>
  );
}
