import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
}
