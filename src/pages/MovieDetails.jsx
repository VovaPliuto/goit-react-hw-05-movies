import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { fetchMovieDetails } from 'services/fetchAPI';
import Loader from 'components/Loader/Loader';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

import { Container } from './Movies.styled';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchFilmDetails = async () => {
      try {
        setIsLoading(true);
        const movieData = await fetchMovieDetails(movieId);
        setMovieDetails(movieData);
      } catch (error) {
        setError(error.messasge);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilmDetails();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error !== null && <ErrorMessage error={error} />}
      {movieDetails !== null && (
        <Container>
          <GoBackBtn location={backLinkRef}>← Go back</GoBackBtn>
          <MovieCard movieDetails={movieDetails} />
          <Outlet />
        </Container>
      )}
    </>
  );
};

export default MovieDetails;
