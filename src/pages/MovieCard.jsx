import axios from "axios";
import React, { useEffect, useState } from "react";

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
        <div>{movie.title}</div>
        <div>{movie.director}</div>
        <div>{movie.genre}</div>
        <div>{movie.release_year}</div>
        <div>{movie.abstract}</div>
        <div>{movie.created_at}</div>
        <div>{movie.updated_at}</div>
      </div>
    </>
  );
}
