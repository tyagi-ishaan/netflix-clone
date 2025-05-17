const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

module.exports = {
  TMDB_BASE_URL,
  TMDB_IMAGE_BASE_URL,
  TMDB_API_KEY: process.env.TMDB_API_KEY,
  IMAGE_SIZES: {
    backdrop: {
      small: '/w300',
      medium: '/w780',
      large: '/w1280',
      original: '/original'
    },
    poster: {
      small: '/w185',
      medium: '/w342',
      large: '/w500',
      original: '/original'
    }
  }
}; 