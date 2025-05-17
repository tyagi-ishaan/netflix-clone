const config = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL  // Production backend URL from environment variable
    : 'http://localhost:5000'        // Development backend URL
};

export default config; 