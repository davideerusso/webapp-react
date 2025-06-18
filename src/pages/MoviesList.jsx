import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = "http://localhost:3000/movies";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  const fetchMovie = () => {
    axios.get(apiUrl).then((res) => {
      setMovies(res.data.data);
    });
  };

  useEffect(fetchMovie, []);
  // const movies = [
  //   {
  //     id: 1,
  //     title: "Inception",
  //     director: "Christopher Nolan",
  //     genre: "Science Fiction",
  //     release_year: 2010,
  //     abstract:
  //       "A skilled thief is given a chance at redemption if he can successfully perform inception.",
  //     image: "inception.jpg",
  //     created_at: "2024-11-29T10:40:13.000Z",
  //     updated_at: "2025-05-22T10:55:27.000Z",
  //   },
  //   {
  //     id: 2,
  //     title: "The Godfather",
  //     director: "Francis Ford Coppola",
  //     genre: "Crime",
  //     release_year: 1972,
  //     abstract:
  //       "The story of a powerful Italian-American crime family and their struggles.",
  //     image: "interstellar.jpg",
  //     created_at: "2024-11-29T10:40:13.000Z",
  //     updated_at: "2025-05-22T10:55:27.000Z",
  //   },
  //   {
  //     id: 3,
  //     title: "Titanic",
  //     director: "James Cameron",
  //     genre: "Romance",
  //     release_year: 1997,
  //     abstract:
  //       "A romantic story set against the tragic sinking of the RMS Titanic.",
  //     image: "matrix.jpg",
  //     created_at: "2024-11-29T10:40:13.000Z",
  //     updated_at: "2025-05-22T10:55:27.000Z",
  //   },
  //   {
  //     id: 4,
  //     title: "The Matrix",
  //     director: "The Wachowskis",
  //     genre: "Action",
  //     release_year: 1999,
  //     abstract:
  //       "A hacker discovers the truth about his reality and his role in the war against its controllers.",
  //     image: "the_godfather.jpg",
  //     created_at: "2024-11-29T10:40:13.000Z",
  //     updated_at: "2025-05-22T10:55:27.000Z",
  //   },
  //   {
  //     id: 5,
  //     title: "Interstellar",
  //     director: "Christopher Nolan",
  //     genre: "Science Fiction",
  //     release_year: 2014,
  //     abstract:
  //       "A team of explorers travels through a wormhole in space to save humanity.",
  //     image: "titanic.jpg",
  //     created_at: "2024-11-29T10:40:13.000Z",
  //     updated_at: "2025-05-22T10:55:27.000Z",
  //   },
  // ];
  return (
    <>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`http://localhost:3000/movies_cover/${movie.image}`}
              alt=""
            />
            <h2>{movie.title}</h2>
            <p>{movie.director}</p>
            <p>{movie.genre}</p>
            <p>{movie.release_year}</p>
            <p>{movie.abstract}</p>
            <p>{movie.created_at}</p>
            <p>{movie.updated_at}</p>
            <Link to={`/movies/${movie.id}`}>Dettaglio</Link>
          </div>
        ))}
      </div>
    </>
  );
}
