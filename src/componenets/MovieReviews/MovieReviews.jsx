import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      const API_KEY = "d3741c476d21774c827d472c8a08fd1f";
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
      );
      setReviews(response.data.results);
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.title}>Reviews</h2>
      {reviews.length > 0 ? (
        <ul className={styles.reviewList}>
          {reviews.map((review) => (
            <li key={review.id} className={styles.reviewCard}>
              <p className={styles.reviewContent}>
                <strong>{review.author}:</strong> {review.content}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noReviews}>No reviews available.</p>
      )}
    </div>
  );
}
