import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCredits } from 'services/fetchAPI';
import Loader from 'components/Loader/Loader';

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchFilmCast = async () => {
      try {
        setIsLoading(true);
        const movieData = await fetchMovieCredits(movieId);
        setMovieCast(movieData);
      } catch (error) {
        setError(error.messasge);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilmCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error !== null && <ErrorMessage error={error} />}
      {movieCast !== null && <CastList movieCast={movieCast} />}
    </>
  );
};

export default Cast;
