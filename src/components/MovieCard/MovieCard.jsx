import React from 'react';
import { NavLink } from 'react-router-dom';

import { DetailsWrapper, Poster,AdditionalInfo } from './MovieCard.styled';

const MovieCard = ({ movieDetails }) => {
  const { title, original_title, poster_path, vote_average, overview, genres } = movieDetails;

  return (
    <>
      <DetailsWrapper>
        <Poster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg'
          }
          alt={title}
        />
        <div>
          <h2>{original_title}</h2>
          <p>User score: {`${(vote_average * 10).toFixed()}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </DetailsWrapper>
      <AdditionalInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </AdditionalInfo>
    </>
  );
};

export default MovieCard;
