import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Rating,
  Chip,
  Stack,
  IconButton
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import VideoPlayer from '../components/VideoPlayer';
import axios from 'axios';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [videoPlayer, setVideoPlayer] = useState({ open: false, videoKey: null });
  const contentId = new URLSearchParams(location.search).get('id');

  // Helper function to ensure complete image URLs
  const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return `https://image.tmdb.org/t/p/original${path}`;
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`/api/movies/${contentId}`);
        
        // Process image URLs before setting state
        const processedContent = {
          ...response.data,
          backdrop_path: getImageUrl(response.data.backdrop_path),
          poster_path: getImageUrl(response.data.poster_path),
          similar: response.data.similar?.map(item => ({
            ...item,
            poster_path: getImageUrl(item.poster_path),
            backdrop_path: getImageUrl(item.backdrop_path)
          }))
        };
        
        setContent(processedContent);
      } catch (error) {
        console.error('Error fetching details:', error);
        navigate('/');
      }
    };

    if (contentId) {
      fetchDetails();
    }
  }, [contentId, navigate]);

  const handlePlayVideo = () => {
    if (content?.videos?.results?.length > 0) {
      setVideoPlayer({
        open: true,
        videoKey: content.videos.results[0].key
      });
    }
  };

  if (!content) return null;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#141414',
        color: 'white',
        position: 'relative'
      }}
    >
      {/* Hero Banner */}
      <Box
        sx={{
          height: '70vh',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(180deg, transparent, rgba(20, 20, 20, 0.8), #141414)',
          }
        }}
      >
        <Box
          component="img"
          src={content.backdrop_path}
          alt={content.title || content.name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)'
          }}
        />
        <IconButton
          onClick={() => navigate('/')}
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.5)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Content Details */}
      <Container
        maxWidth="xl"
        sx={{
          mt: -20,
          position: 'relative',
          zIndex: 2,
          pb: 8
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
              {content.title || content.name}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
              <Button
                variant="contained"
                startIcon={<PlayArrowIcon />}
                onClick={handlePlayVideo}
                sx={{
                  bgcolor: 'white',
                  color: 'black',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.8)' }
                }}
              >
                Play
              </Button>
              <Rating value={4.5} precision={0.5} readOnly />
              <Chip label="HD" variant="outlined" sx={{ color: 'white', borderColor: 'white' }} />
              {content.type && (
                <Chip label={content.type} variant="outlined" sx={{ color: 'white', borderColor: 'white' }} />
              )}
            </Stack>

            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
              {content.overview}
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ mb: 2, color: '#999' }}>
                  Cast
                </Typography>
                <Typography variant="body1">
                  {content.cast || 'Cast information not available'}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ mb: 2, color: '#999' }}>
                  Genres
                </Typography>
                <Stack direction="row" spacing={1}>
                  {content.genres?.map((genre, index) => (
                    <Chip
                      key={index}
                      label={genre}
                      variant="outlined"
                      sx={{ color: 'white', borderColor: 'white' }}
                    />
                  )) || 'Genre information not available'}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ mb: 2, color: '#999' }}>
                  Release Year
                </Typography>
                <Typography variant="body1">
                  {content.releaseYear || 'Release year not available'}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ mb: 2, color: '#999' }}>
                  Maturity Rating
                </Typography>
                <Chip
                  label={content.maturityRating || 'TV-MA'}
                  sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white' }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                bgcolor: 'rgba(255,255,255,0.1)',
                borderRadius: 2,
                p: 3
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                More Like This
              </Typography>
              <Stack spacing={2}>
                {content.similar?.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      gap: 2,
                      cursor: 'pointer',
                      '&:hover': { opacity: 0.8 }
                    }}
                    onClick={() => navigate(`/browse?id=${item.id}`)}
                  >
                    <Box
                      component="img"
                      src={item.poster_path}
                      alt={item.title}
                      sx={{
                        width: 100,
                        height: 150,
                        objectFit: 'cover',
                        borderRadius: 1
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#999' }}>
                        {item.overview.substring(0, 100)}...
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
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

export default Details; 