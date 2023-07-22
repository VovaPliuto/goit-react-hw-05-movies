import React from 'react';

const SearchForm = ({ onSubmitForm }) => {
  const onSubmit = e => {
    e.preventDefault();

    onSubmitForm(e.target.elements[0].value);

    e.target.elements[0].value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="searchfield"
        placeholder="Enter film to search"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
