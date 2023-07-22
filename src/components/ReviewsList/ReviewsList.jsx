import React from 'react';

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
