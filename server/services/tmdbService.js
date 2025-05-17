const axios = require('axios');
const { TMDB_BASE_URL, TMDB_API_KEY } = require('../config/tmdb');

const tmdbService = {
  // Fetch movie details including videos
  async getMovieDetails(movieId) {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: TMDB_API_KEY,
          append_to_response: 'videos'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  },

  // Fetch TV show details including videos
  async getTVShowDetails(tvId) {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/tv/${tvId}`, {
        params: {
          api_key: TMDB_API_KEY,
          append_to_response: 'videos'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching TV show details:', error);
      throw error;
    }
  },

  // Fetch trending content (movies and TV shows)
  async getTrending(timeWindow = 'week', mediaType = 'all') {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/trending/${mediaType}/${timeWindow}`, {
        params: {
          api_key: TMDB_API_KEY
        }
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching trending content:', error);
      throw error;
    }
  },

  // Search for movies and TV shows
  async search(query, page = 1) {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/search/multi`, {
        params: {
          api_key: TMDB_API_KEY,
          query,
          page
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching content:', error);
      throw error;
    }
  }
};

module.exports = tmdbService; 