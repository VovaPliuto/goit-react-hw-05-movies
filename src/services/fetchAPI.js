import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWI4YTU2N2U4NTIwYjJkOTYxNmQyYjU1NGY1MGI4MyIsInN1YiI6IjY0Nzg5MDY0MDc2Y2U4MDEwNzliOGMxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ia6cdeIOjpNaTQl8aCiS1rstAtEfICJgybU1GCz5mQ',
  },
};

export const fetchTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios.get('/trending/movie/day', options);

  return results;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}`, options);

  return data;
};

export const fetchMovieCredits = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`, options);

  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`, options);

  return data;
};

export const fetchSearchMovies = async searchQuery => {
  const { data } = await axios.get(
    `/search/movie?query=${searchQuery}`,
    options
  );

  return data;
};
