import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { fetchTrendingMovies } from 'services/fetchAPI';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setIsLoading(true);

        const results = await fetchTrendingMovies();

        if (results.length === 0) {
          return alert(
            "Oops! We didn't find any image on this query. Please try another one..."
          );
        }
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {error !== null && <ErrorMessage error={error} />}
      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
    </>
  );
};

export default Home;
