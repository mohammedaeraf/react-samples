import axios from "axios";

const API_KEY = "b559c2662d324af3e8c98fde508d81e1";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query: query },
  });
  return response.data.results;
};

export const fetchPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};

export const getMovieDetails = async (
  movieId: number
) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
