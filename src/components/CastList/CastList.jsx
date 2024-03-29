import React from 'react';
import PropTypes from 'prop-types';


import { ProfileImg, ProfileList, ProfileListItem } from './CastList.styled';

const CastList = ({ movieCast }) => {
  return (
    <ProfileList>
      {movieCast.map(({ id, name, character, profile_path }) => {
        return (
          <ProfileListItem key={id}>
            <ProfileImg
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg'
              }
              alt=""
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </ProfileListItem>
        );
      })}
    </ProfileList>
  );
};

export default CastList;

CastList.propTypes = {
  movieCast: PropTypes.array.isRequired,
}