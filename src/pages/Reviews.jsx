import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'services/fetchAPI';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import ReviewsList from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchFilmReview = async () => {
      try {
        setIsLoading(true);
        const movieData = await fetchMovieReviews(movieId);
        setMovieReviews(movieData.results);
      } catch (error) {
        setError(error.messasge);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilmReview();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error !== null && <ErrorMessage error={error} />}
      {movieReviews.length > 0 ? (
        <ReviewsList movieReviews={movieReviews} />
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
