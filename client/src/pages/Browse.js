import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  IconButton,
  Button
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import VideoPlayer from '../components/VideoPlayer';
import axios from 'axios';

const Browse = () => {
  const [movies, setMovies] = useState([]);
  const [videoPlayer, setVideoPlayer] = useState({ open: false, videoKey: null });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/api/movies/trending');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handlePlayVideo = async (movieId) => {
    try {
      const response = await axios.get(`/api/movies/${movieId}`);
      const trailer = response.data.videos.results.find(
        video => video.type === 'Trailer' && video.site === 'YouTube'
      );
      
      if (trailer) {
        setVideoPlayer({
          open: true,
          videoKey: trailer.key
        });
      }
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  const MovieCard = ({ movie }) => (
    <Card 
      sx={{ 
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          '& .movie-info': {
            opacity: 1
          }
        }
      }}
    >
      <CardMedia
        component="img"
        height="400"
        image={movie.backdrop_path}
        alt={movie.title || movie.name}
        sx={{
          objectFit: 'cover'
        }}
      />
      <Box
        className="movie-info"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'rgba(0, 0, 0, 0.8)',
          p: 2,
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      >
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          {movie.title || movie.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
          {movie.overview}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            startIcon={<PlayArrowIcon />}
            onClick={() => handlePlayVideo(movie.id)}
            sx={{
              bgcolor: 'white',
              color: 'black',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.75)',
              }
            }}
          >
            Play
          </Button>
          <IconButton 
            color="primary" 
            aria-label="more info"
            sx={{ 
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.2)'
              }
            }}
          >
            <InfoIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#141414',
        pt: 10,
        pb: 4
      }}
    >
      <Container>
        <Typography variant="h4" component="h1" sx={{ mb: 4, color: 'white' }}>
          Popular on Netflix
        </Typography>
        <Grid container spacing={3}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Video Player */}
      <VideoPlayer
        open={videoPlayer.open}
        onClose={() => setVideoPlayer({ open: false, videoKey: null })}
        videoKey={videoPlayer.videoKey}
      />
    </Box>
  );
};

export default Browse; 