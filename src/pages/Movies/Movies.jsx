import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { fetchSearchMovies } from 'services/fetchAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('query');
  const location = useLocation();

  const onSubmitForm = searchQuery => {
    if (searchQuery === '') {
      setMovies([]);
      setSearchParams({});
      return alert('Please enter what images do you want to find?');
    }

    setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    if (!searchTerm) return;

    const fetchMoviesBySearchQuery = async () => {
      try {
        setIsLoading(true);

        const { results } = await fetchSearchMovies(searchTerm);

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

    fetchMoviesBySearchQuery();
  }, [searchTerm]);

  return (
    <>
      <SearchForm onSubmitForm={onSubmitForm} />
      {isLoading && <Loader />}
      {error !== null && <ErrorMessage error={error} />}
      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
    </>
  );
};

export default Movies;
