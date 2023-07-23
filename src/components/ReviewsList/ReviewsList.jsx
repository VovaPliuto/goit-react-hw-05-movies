import React from 'react';
import PropTypes from 'prop-types';


const ReviewsList = ({ movieReviews }) => {
  return (
    <ul>
      {movieReviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  movieReviews: PropTypes.array.isRequired,
}
