import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./componenets/Nagivation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MovieCast from "./componenets/MovieCast/MovieCast";
import MovieReviews from "./componenets/MovieReviews/MovieReviews";

function App() {
  return (
    <div className="app">
      {}
      <header>
        <Navigation />
      </header>

      {}
      <main>
        <Routes>
          {}
          <Route path="/" element={<HomePage />} />

          {}
          <Route path="/movies" element={<MoviesPage />} />

          {}
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            {}
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          {}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
