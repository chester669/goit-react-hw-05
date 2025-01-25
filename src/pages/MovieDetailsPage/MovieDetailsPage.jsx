import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const backLink = location.state?.from || "/movies";

  useEffect(() => {
    async function fetchMovieDetails() {
      const API_KEY = "d3741c476d21774c827d472c8a08fd1f";
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );
      setMovie(response.data);
    }
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => navigate(backLink)}>Go Back</button>
      <h1>
        {movie.title} ({new Date(movie.release_date).getFullYear()})
      </h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
      <nav>
        <Link to="cast" state={{ from: backLink }}>
          Cast
        </Link>{" "}
        |{" "}
        <Link to="reviews" state={{ from: backLink }}>
          Reviews
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
