import React, { useState } from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Navbar from '../components/Navbar';
import VideoPlayer from '../components/VideoPlayer';

const Home = () => {
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const [content] = useState({
    originals: [
      {
        id: 1,
        title: "Stranger Things",
        poster_path: "https://image.tmdb.org/t/p/w342/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
        logo_path: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcZdjwLLiAhLGhEW4l3A1CqGOFhQyOEhW-Jl1_niuCXVJCshxD3XxRsupM0DpfqT_kpHkWIrL_eO1V5TuEoaOEPimW2G3Ug.png",
        trailer_url: "https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1"
      },
      {
        id: 2,
        title: "Wednesday",
        poster_path: "https://image.tmdb.org/t/p/w342/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
        trailer_url: "https://www.youtube.com/embed/Di310WS8zLk?autoplay=1"
      },
      {
        id: 3,
        title: "The Witcher",
        poster_path: "https://image.tmdb.org/t/p/w342/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
        trailer_url: "https://www.youtube.com/embed/ndl1W4ltcmg?autoplay=1"
      },
      {
        id: 4,
        title: "Bridgerton",
        poster_path: "https://image.tmdb.org/t/p/w342/6PX0r5TRRU5y0jZ70y1OtbLYmoD.jpg",
        trailer_url: "https://www.youtube.com/embed/gpv7ayf_tyE?autoplay=1"
      },
      {
        id: 13,
        title: "Shadow and Bone",
        poster_path: "https://image.tmdb.org/t/p/w342/mrVoyDFiDSqfH4mkoRtccOv2vwh.jpg",
        trailer_url: "https://www.youtube.com/embed/UHJYYd_RnJc?autoplay=1"
      },
      {
        id: 15,
        title: "Squid Game",
        poster_path: "https://image.tmdb.org/t/p/w342/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
        trailer_url: "https://www.youtube.com/embed/oqxAJKy0ii4?autoplay=1"
      },
      {
        id: 16,
        title: "The Umbrella Academy",
        poster_path: "https://image.tmdb.org/t/p/w342/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg",
        trailer_url: "https://www.youtube.com/embed/0DAmWHxeoKw?autoplay=1"
      },
      {
        id: 17,
        title: "Outer Banks",
        poster_path: "https://image.tmdb.org/t/p/w342/ovDgO2LPfwdVRfvScAqo9aMiIW.jpg",
        trailer_url: "https://www.youtube.com/embed/jh_b7T5XJpc?autoplay=1"
      },
      {
        id: 19,
        title: "The Queen's Gambit",
        poster_path: "https://image.tmdb.org/t/p/w342/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
        trailer_url: "https://www.youtube.com/embed/oZn3qSgmLqI?autoplay=1"
      }
    ],
    trending: [
      {
        id: 5,
        title: "Red Notice",
        poster_path: "https://image.tmdb.org/t/p/w342/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
        trailer_url: "https://www.youtube.com/embed/Pj0wz7zu3Ms?autoplay=1"
      },
      {
        id: 6,
        title: "Eternals",
        poster_path: "https://image.tmdb.org/t/p/w342/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
        trailer_url: "https://www.youtube.com/embed/x_me3xsvDgk?autoplay=1"
      },
      {
        id: 7,
        title: "The Gray Man",
        poster_path: "https://image.tmdb.org/t/p/w342/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
        trailer_url: "https://www.youtube.com/embed/BmllggGO4pM?autoplay=1"
      },
      {
        id: 8,
        title: "The Adam Project",
        poster_path: "https://image.tmdb.org/t/p/w342/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
        trailer_url: "https://www.youtube.com/embed/IE8HIsIrq4o?autoplay=1"
      },
      {
        id: 21,
        title: "Extraction 2",
        poster_path: "https://image.tmdb.org/t/p/w342/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
        trailer_url: "https://www.youtube.com/embed/Y274jZs5s7s?autoplay=1"
      },
      {
        id: 22,
        title: "Glass Onion",
        poster_path: "https://image.tmdb.org/t/p/w342/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
        trailer_url: "https://www.youtube.com/embed/gj5ibYSz8C0?autoplay=1"
      },
      {
        id: 23,
        title: "Purple Hearts",
        poster_path: "https://image.tmdb.org/t/p/w342/4JyNWkryifWbWXJyxcWh3pVya6N.jpg",
        trailer_url: "https://www.youtube.com/embed/WTLgg8oRSBE?autoplay=1"
      },
      {
        id: 24,
        title: "The Mother",
        poster_path: "https://image.tmdb.org/t/p/w342/vnRthEZz16Q9VWcP5homkHxyHoy.jpg",
        trailer_url: "https://www.youtube.com/embed/8BFdFeOS3oM?autoplay=1"
      },
      {
        id: 27,
        title: "They Cloned Tyrone",
        poster_path: "https://image.tmdb.org/t/p/w342/hnz5wRqeYKlugGbC7RZxC7DAiED.jpg",
        trailer_url: "https://www.youtube.com/embed/2S3M1xFVd_U?autoplay=1"
      }
    ]
  });

  const handlePlayClick = (trailerUrl) => {
    setSelectedTrailer(trailerUrl);
  };

  const ContentRow = ({ title, items }) => (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h5"
        sx={{
          color: 'white',
          mb: 2,
          pl: 2,
          fontWeight: 'bold',
          fontSize: '1.5rem'
        }}
      >
        {title}
      </Typography>
      <Box sx={{ overflow: 'hidden' }}>
        <Box sx={{ 
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          pb: 2,
          px: 2,
          '::-webkit-scrollbar': {
            height: '4px',
          },
          '::-webkit-scrollbar-track': {
            background: '#141414',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#454545',
            borderRadius: '4px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#555555',
          },
        }}>
          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                position: 'relative',
                minWidth: '160px',
                height: '240px',
                flexShrink: 0,
                transition: 'all 0.3s ease',
                borderRadius: '4px',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'scale(1.08)',
                  zIndex: 1,
                  '& .content-info': {
                    opacity: 1
                  }
                }
              }}
            >
              <Box
                component="img"
                src={item.poster_path}
                alt={item.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  backgroundColor: '#141414'
                }}
                loading="lazy"
              />
              <Box
                className="content-info"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 1.5,
                  background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.9))',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  borderRadius: '0 0 4px 4px'
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'white', 
                    mb: 1, 
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                  }}
                >
                  {item.title}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<PlayArrowIcon sx={{ fontSize: '1.2rem' }} />}
                  onClick={() => handlePlayClick(item.trailer_url)}
                  sx={{
                    bgcolor: 'white',
                    color: 'black',
                    minWidth: 'auto',
                    py: 0.5,
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.75)',
                    }
                  }}
                >
                  Play
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ bgcolor: '#141414', minHeight: '100vh' }}>
      <Navbar />
      {/* Hero Section */}
      <Box
        sx={{
          height: '85vh',
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%),
                      url('https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          pt: 8,
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '7.5rem',
            background: 'linear-gradient(180deg, transparent, rgba(20, 20, 20, 0.8), #141414)',
          }
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 2,
            pt: { xs: 12, md: 0 }
          }}
        >
          <Box
            component="img"
            src={content.originals[0].logo_path}
            alt="Stranger Things"
            sx={{
              width: '40%',
              minWidth: '200px',
              maxWidth: '500px',
              mb: 3
            }}
          />

          <Typography
            variant="body1"
            sx={{
              color: 'white',
              mb: 3,
              maxWidth: '40%',
              display: { xs: 'none', md: 'block' }
            }}
          >
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: { xs: 2, md: 3 } }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayArrowIcon />}
              onClick={() => handlePlayClick(content.originals[0].trailer_url)}
              sx={{
                bgcolor: 'white',
                color: 'black',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.75)',
                },
                px: 4,
                py: 1,
                fontSize: { xs: '0.9rem', md: '1.2rem' },
                textTransform: 'none'
              }}
            >
              Play
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Content Rows */}
      <Container maxWidth="xl" sx={{ mt: -20, position: 'relative', zIndex: 3 }}>
        <ContentRow title="Netflix Originals" items={content.originals} />
        <ContentRow title="Trending Now" items={content.trending} />
      </Container>

      {/* Video Player Modal */}
      <VideoPlayer
        open={Boolean(selectedTrailer)}
        onClose={() => setSelectedTrailer(null)}
        trailerUrl={selectedTrailer}
      />
    </Box>
  );
};

export default Home; 