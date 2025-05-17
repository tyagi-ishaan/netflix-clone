const express = require('express');
const router = express.Router();

// Mock data for different categories
const mockData = {
  originals: [
    {
      id: 1,
      title: 'The Crown',
      name: 'The Crown',
      backdrop_path: 'https://image.tmdb.org/t/p/original/96NUnE3LTKIjhOz0jRPzH7nWtT3.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/96NUnE3LTKIjhOz0jRPzH7nWtT3.jpg',
      overview: 'The gripping, decades-spanning inside story of Queen Elizabeth II and the Prime Ministers who shaped Britain\'s post-war destiny.',
      videos: { results: [{ key: 'JWtnJjn6ng0', site: 'YouTube', type: 'Trailer' }] },
      cast: 'Claire Foy, Olivia Colman, Imelda Staunton, Matt Smith',
      genres: ['Drama', 'History', 'Biography'],
      releaseYear: '2016',
      maturityRating: 'TV-MA',
      type: 'TV Series',
      similar: [
        {
          id: 2,
          title: 'Narcos',
          poster_path: 'https://image.tmdb.org/t/p/original/rTmal9fDbwh5nEWLtLvsGt9O6Wq.jpg',
          overview: 'A gritty chronicle of the war against Colombia\'s infamously violent and powerful drug cartels.'
        },
        {
          id: 3,
          title: 'Gilmore Girls: A Year in the Life',
          poster_path: 'https://image.tmdb.org/t/p/original/lPlw04Ej3GWpzQS8F9YnV9HSunV.jpg',
          overview: 'Set nearly a decade after the finale of the original series, this revival follows Lorelai, Rory and Emily Gilmore through four seasons of change.'
        }
      ]
    },
    {
      id: 2,
      title: 'Narcos',
      name: 'Narcos',
      backdrop_path: 'https://image.tmdb.org/t/p/original/uExPmkOHJySrbJyJDJylHDqaT58.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/rTmal9fDbwh5nEWLtLvsGt9O6Wq.jpg',
      overview: 'A gritty chronicle of the war against Colombia\'s infamously violent and powerful drug cartels.',
      videos: { results: [{ key: 'U7elNhHwgBU', site: 'YouTube', type: 'Trailer' }] },
      cast: 'Wagner Moura, Pedro Pascal, Boyd Holbrook',
      genres: ['Crime', 'Drama', 'Thriller'],
      releaseYear: '2015',
      maturityRating: 'TV-MA',
      type: 'TV Series',
      similar: [
        {
          id: 6,
          title: 'Sons of Anarchy',
          poster_path: 'https://image.tmdb.org/t/p/original/9c5qMRUz6aZQFnVjxuL9zT6B8h2.jpg',
          overview: 'An adrenalized drama with darkly comedic undertones that explores a notorious outlaw motorcycle club\'s desire to protect its livelihood.'
        },
        {
          id: 7,
          title: 'Dexter',
          poster_path: 'https://image.tmdb.org/t/p/original/58H6Ctze1nnpS0s9vPmAAzPcipR.jpg',
          overview: 'Dexter Morgan leads a secret life as a serial killer, hunting down criminals who have slipped through the cracks of justice.'
        }
      ]
    },
    {
      id: 3,
      title: 'Gilmore Girls: A Year in the Life',
      name: 'Gilmore Girls: A Year in the Life',
      backdrop_path: 'https://image.tmdb.org/t/p/original/x6VjVEmPyq7MCHn8ksL3OLm2Zx.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/lPlw04Ej3GWpzQS8F9YnV9HSunV.jpg',
      overview: 'Set nearly a decade after the finale of the original series, this revival follows Lorelai, Rory and Emily Gilmore through four seasons of change.',
      videos: { results: [{ key: 'kGGNNSmWOXk', site: 'YouTube', type: 'Trailer' }] }
    },
    {
      id: 4,
      title: 'Shooter',
      name: 'Shooter',
      backdrop_path: 'https://image.tmdb.org/t/p/original/9KUzJH3UYy3wPLgJpBh8A3JrT7E.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/wZKm2YVAeVuYnuFlh2mF1yqW0eI.jpg',
      overview: 'A conspiracy thriller that follows the journey of Bob Lee Swagger, a highly-decorated veteran who is coaxed back into action.',
      videos: { results: [{ key: 'X2x6IR3FhbW', site: 'YouTube', type: 'Trailer' }] }
    },
    {
      id: 5,
      title: 'Black Mirror',
      name: 'Black Mirror',
      backdrop_path: 'https://image.tmdb.org/t/p/original/8GMUNgawrYNqxwJzCyJGJ6wV8Jc.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/7PRddO7z7mcPi21nZTCKqUYJkBC.jpg',
      overview: 'An anthology series exploring a twisted, high-tech multiverse where humanity\'s greatest innovations and darkest instincts collide.',
      videos: { results: [{ key: 'V0XOApF5nLU', site: 'YouTube', type: 'Trailer' }] }
    }
  ],
  trending: [
    {
      id: 6,
      title: 'Sons of Anarchy',
      name: 'Sons of Anarchy',
      backdrop_path: 'https://image.tmdb.org/t/p/original/dsFq0QvCyfi1YhlVTpB5JZJVQjO.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/9c5qMRUz6aZQFnVjxuL9zT6B8h2.jpg',
      overview: 'An adrenalized drama with darkly comedic undertones that explores a notorious outlaw motorcycle club\'s desire to protect its livelihood.',
      videos: { results: [{ key: '_03DBXL3Srw', site: 'YouTube', type: 'Trailer' }] },
      cast: 'Charlie Hunnam, Katey Sagal, Mark Boone Junior',
      genres: ['Crime', 'Drama', 'Thriller'],
      releaseYear: '2008',
      maturityRating: 'TV-MA',
      type: 'TV Series',
      similar: [
        {
          id: 2,
          title: 'Narcos',
          poster_path: 'https://image.tmdb.org/t/p/original/rTmal9fDbwh5nEWLtLvsGt9O6Wq.jpg',
          overview: 'A gritty chronicle of the war against Colombia\'s infamously violent and powerful drug cartels.'
        },
        {
          id: 10,
          title: 'Breaking Bad',
          poster_path: 'https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
          overview: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family\'s financial future.'
        }
      ]
    },
    {
      id: 7,
      title: 'Dexter',
      name: 'Dexter',
      backdrop_path: 'https://image.tmdb.org/t/p/original/8jkThbxYiL6hQKUoGfDh9qNTSPq.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/58H6Ctze1nnpS0s9vPmAAzPcipR.jpg',
      overview: 'Dexter Morgan, a blood spatter pattern analyst for the Miami Metro Police also leads a secret life as a serial killer, hunting down criminals who have slipped through the cracks of justice.',
      videos: { results: [{ key: 'YQeUmSD1c3g', site: 'YouTube', type: 'Trailer' }] },
      cast: 'Michael C. Hall, Jennifer Carpenter, David Zayas',
      genres: ['Crime', 'Drama', 'Mystery'],
      releaseYear: '2006',
      maturityRating: 'TV-MA',
      type: 'TV Series',
      similar: [
        {
          id: 6,
          title: 'Sons of Anarchy',
          poster_path: 'https://image.tmdb.org/t/p/original/9c5qMRUz6aZQFnVjxuL9zT6B8h2.jpg',
          overview: 'An adrenalized drama with darkly comedic undertones that explores a notorious outlaw motorcycle club\'s desire to protect its livelihood.'
        },
        {
          id: 10,
          title: 'Breaking Bad',
          poster_path: 'https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
          overview: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family\'s financial future.'
        }
      ]
    },
    {
      id: 8,
      title: 'Rick and Morty',
      name: 'Rick and Morty',
      backdrop_path: 'https://image.tmdb.org/t/p/original/7q555RoNOqYgMyJ20eCeHZ5lK3K.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg',
      overview: 'Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes.',
      videos: { results: [{ key: 'qbHYYXj2jYo', site: 'YouTube', type: 'Trailer' }] }
    },
    {
      id: 9,
      title: 'Archer',
      name: 'Archer',
      backdrop_path: 'https://image.tmdb.org/t/p/original/dX9aFjWjEZ3CYrZHrxcnQzx8Aqp.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/xDZeH6ZxincZkjkxHxj0BAd6HpC.jpg',
      overview: 'Sterling Archer is the world\'s most daunting spy. He works for ISIS, a spy agency run by his mother. In between dealing with his boss and his co-workers - one of whom is his ex-girlfriend - Archer manages to annoy everyone he encounters.',
      videos: { results: [{ key: 'F6vACE7U0LY', site: 'YouTube', type: 'Trailer' }] }
    },
    {
      id: 10,
      title: 'Breaking Bad',
      name: 'Breaking Bad',
      backdrop_path: 'https://image.tmdb.org/t/p/original/84XPpjGvxNyExjSuLQe0SzioErt.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
      overview: 'When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live, he becomes filled with a sense of fearlessness and an unrelenting desire to secure his family\'s financial future.',
      videos: { results: [{ key: 'HhesaQXLuRY', site: 'YouTube', type: 'Trailer' }] }
    }
  ],
  comedies: [
    {
      id: 11,
      title: 'Bad Grandpa',
      name: 'Bad Grandpa',
      backdrop_path: 'https://image.tmdb.org/t/p/original/89tiRPh5HeHVR5nj78pcVsN0RX6.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/cXOLaxcNjNAYmEx1trZxOTKhK3Q.jpg',
      overview: '86-year-old Irving Zisman takes a trip from Nebraska to North Carolina to take his 8 year-old grandson, Billy, back to his real father.',
      videos: { results: [{ key: '_MSrAwfagG4', site: 'YouTube', type: 'Trailer' }] },
      cast: 'Johnny Knoxville, Jackson Nicoll, Greg Harris',
      genres: ['Comedy'],
      releaseYear: '2013',
      maturityRating: 'R',
      type: 'Movie',
      similar: [
        {
          id: 12,
          title: 'Home Alone',
          poster_path: 'https://image.tmdb.org/t/p/original/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg',
          overview: 'Eight-year-old Kevin McCallister makes the most of the situation after his family unwittingly leaves him behind when they go on Christmas vacation.'
        },
        {
          id: 13,
          title: 'Arthur Christmas',
          poster_path: 'https://image.tmdb.org/t/p/original/h6iqaCJBB6JbGBAjw6ueHjlNxZW.jpg',
          overview: 'Santa\'s clumsy son Arthur sets out on a mission with St. Nick\'s father to give out a present they misplaced to a young girl in less than 2 hours.'
        }
      ]
    },
    {
      id: 12,
      title: 'Home Alone',
      name: 'Home Alone',
      backdrop_path: 'https://image.tmdb.org/t/p/original/1d4oFY9QRdexWGqB7qTz9ReR6ju.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg',
      overview: 'Eight-year-old Kevin McCallister makes the most of the situation after his family unwittingly leaves him behind when they go on Christmas vacation.',
      videos: { results: [{ key: 'jEDaVHmw7r4', site: 'YouTube', type: 'Trailer' }] },
      cast: 'Macaulay Culkin, Joe Pesci, Daniel Stern',
      genres: ['Comedy', 'Family'],
      releaseYear: '1990',
      maturityRating: 'PG',
      type: 'Movie',
      similar: [
        {
          id: 13,
          title: 'Arthur Christmas',
          poster_path: 'https://image.tmdb.org/t/p/original/h6iqaCJBB6JbGBAjw6ueHjlNxZW.jpg',
          overview: 'Santa\'s clumsy son Arthur sets out on a mission with St. Nick\'s father to give out a present they misplaced to a young girl in less than 2 hours.'
        },
        {
          id: 15,
          title: 'Alvin and the Chipmunks',
          poster_path: 'https://image.tmdb.org/t/p/original/vvVMxPKP6v8VXRM5NwZoNkiTKVB.jpg',
          overview: 'A struggling songwriter named Dave Seville finds success when he comes across a trio of singing chipmunks.'
        }
      ]
    },
    {
      id: 13,
      title: 'Arthur Christmas',
      name: 'Arthur Christmas',
      backdrop_path: 'https://image.tmdb.org/t/p/original/yJHqe9QXLBGhLmqPL2xDJPRytMz.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/h6iqaCJBB6JbGBAjw6ueHjlNxZW.jpg',
      overview: 'Santa\'s clumsy son Arthur sets out on a mission with St. Nick\'s father to give out a present they misplaced to a young girl in less than 2 hours.',
      videos: { results: [{ key: '7tk-WZSqIGQ', site: 'YouTube', type: 'Trailer' }] }
    },
    {
      id: 14,
      title: 'True Memoirs of an International Assassin',
      name: 'True Memoirs of an International Assassin',
      backdrop_path: 'https://image.tmdb.org/t/p/original/8YeX19H5DfZQVxXuWUzKGwmjzXP.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/8YeX19H5DfZQVxXuWUzKGwmjzXP.jpg',
      overview: 'After a publisher changes a writer\'s debut novel about a deadly assassin from fiction to non-fiction, the author finds himself thrust into the world of his lead character, and must take on the role of his character for his own survival.',
      videos: { results: [{ key: 'pOBPVzg6V8Y', site: 'YouTube', type: 'Trailer' }] }
    },
    {
      id: 15,
      title: 'Alvin and the Chipmunks',
      name: 'Alvin and the Chipmunks',
      backdrop_path: 'https://image.tmdb.org/t/p/original/5VKquU8PNuXh8MkK8n8mZzcPDJP.jpg',
      poster_path: 'https://image.tmdb.org/t/p/original/vvVMxPKP6v8VXRM5NwZoNkiTKVB.jpg',
      overview: 'A struggling songwriter named Dave Seville finds success when he comes across a trio of singing chipmunks: mischievous leader Alvin, brainy Simon, and chubby, impressionable Theodore.',
      videos: { results: [{ key: 'Y0p-qIaNvZQ', site: 'YouTube', type: 'Trailer' }] }
    }
  ]
};

// @route   GET api/movies/category/:category
// @desc    Get movies by category
// @access  Public
router.get('/category/:category', async (req, res) => {
  const category = req.params.category;
  if (mockData[category]) {
    res.json(mockData[category]);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
});

// @route   GET api/movies/:id
// @desc    Get movie details with videos
// @access  Public
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const movie = Object.values(mockData)
    .flat()
    .find(m => m.id === id);
    
  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  res.json(movie);
});

// @route   GET api/movies/tv/:id
// @desc    Get TV show details with videos
// @access  Public
router.get('/tv/:id', async (req, res) => {
  const show = mockData.trending.find(s => s.id === parseInt(req.params.id));
  if (!show) {
    return res.status(404).json({ message: 'TV show not found' });
  }
  res.json(show);
});

// @route   GET api/movies/search/:query
// @desc    Search movies and TV shows
// @access  Public
router.get('/search/:query', async (req, res) => {
  try {
    const searchResults = await tmdbService.search(req.params.query);
    res.json(searchResults);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 