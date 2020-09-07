import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:4040';

// export const fetchArticles = (category = null) => {
//   const url = category ? `/articles?category=${category}` : '/articles';
//   return axios.get(url).then(response => response.data);
// };
// export const fetchArticleWithId = id => {
//   return axios.get(`/articles/${id}`).then(response => response.data);
// };

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = 'api_key=81654eed17fef2c0f309b4c799d69085';

export const fetchPopularMovies = () => {
  return axios.get(`/trending/all/week?${key}`).then(response => response.data);
};

export const fetchSearchMovies = title => {
  return axios
    .get(
      `/search/movie?${key}&language=en-US&query=${title}&page=1&include_adult=false`,
    )
    .then(response => response.data);
};

export const fetchMovieDetails = id => {
  return axios
    .get(`/movie/${id}?${key}&language=en-US`)
    .then(response => response.data);
};

export const fetchMovieCast = id => {
  return axios
    .get(`/movie/${id}/credits?${key}`)
    .then(response => response.data);
};

export const fetchMovieReviews = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?${key}&language=en-US&page=1`,
    )
    .then(response => response.data);
};
