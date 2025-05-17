# Netflix Clone

A modern, full-stack Netflix clone built with React and Node.js. This application replicates Netflix's core features with a responsive design, smooth animations, and real-time trailer playback functionality.

## 🎯 Key Features

### 📺 Home Page
- Dynamic hero banner featuring Stranger Things
- Netflix-style horizontal scrolling content rows
- Smooth hover effects and transitions
- Responsive design for all screen sizes

### 🎬 Content Display
- Netflix Originals showcase
- Trending Now section
- 12 carefully curated items per row
- High-resolution movie/show posters
- Professional image quality (w500 for tiles, original for hero section)

### 🎥 Video Experience
- Instant trailer playback
- YouTube integration
- Material-UI modal system
- 16:9 aspect ratio optimization
- Autoplay functionality
- Play buttons on both hero and content tiles

### 🎨 UI/UX Elements
- Custom scrollbar design
- Smooth hover animations
- Professional text shadows
- Netflix-style navigation bar
- Optimized tile dimensions (160px × 240px)

## 🛠️ Technical Stack

### Frontend
- React.js for UI components
- Material-UI for design system
- CSS3 with custom animations
- React Router for navigation
- Axios for API communication

### Backend
- Node.js runtime
- Express.js framework
- Nodemon for development
- RESTful API architecture

### External Services
- TMDB API for content data
- YouTube API for trailers

### Development Tools
- Concurrently for parallel execution
- npm for package management
- ESLint for code quality
- Modern build system

## 📋 Prerequisites

Before running the application, ensure you have:
- Node.js (v14 or higher)
- npm (v6 or higher)
- TMDB API key
- Stable internet connection

## 🚀 Getting Started

1. Set up the project:
   ```bash
   # Clone the project
   copy the project files to your local machine

   # Install main dependencies
   npm install

   # Install client dependencies
   cd client && npm install
   ```

2. Configure environment:
   ```bash
   # Create .env file in root directory
   TMDB_API_KEY=your_api_key_here
   ```

3. Start development servers:
   ```bash
   # Return to root directory
   cd ..

   # Start both frontend and backend
   npm run dev
   ```

4. Access the application:
   - Local: http://localhost:3000
   - Backend API: http://localhost:5000

## 💻 Network Access

To access from other devices on your network:

1. Connect devices to the same network
2. Find your computer's IP address (shown in terminal)
3. Access via: `http://[your-ip-address]:3000`
   Example: `http://192.168.1.5:3000`

Note: You may need to configure firewall settings to allow port 3000.

## ⚙️ Configuration

### TMDB API Setup
1. Get API key from TMDB website
2. Add key to .env file
3. Restart the application

### Production Build
```bash
# Create optimized build
cd client && npm run build

# Serve production build
npm install -g serve
serve -s build
```

## 🔧 Troubleshooting

Common issues and solutions:

1. **Server Connection Failed**
   - Check if port 5000 is available
   - Verify TMDB API key is correct
   - Ensure all dependencies are installed

2. **Video Playback Issues**
   - Check internet connection
   - Verify YouTube API access
   - Clear browser cache

3. **Style Loading Issues**
   - Clear browser cache
   - Rebuild the application
   - Check for CSS conflicts

## 📄 License

MIT License - Use for personal and commercial purposes.

## 🔒 Security

- Store API keys in .env file
- Never commit sensitive data
- Regular dependency updates
- Proper error handling

## 🎯 Future Enhancements

Planned features:
- User authentication
- Personalized recommendations
- Watchlist functionality
- Enhanced search capabilities
- Multiple language support

## Environment Variables Setup

For security reasons, environment variables are not committed to the repository. To run this project:

1. Create a `.env` file in the root directory
2. Check `.env.example` for the required environment variables
3. Get your API keys from [TMDB](https://www.themoviedb.org/documentation/api)
4. Never commit your actual `.env` file to the repository
5. Share environment variables with team members through secure channels

Example `.env` structure:
```
TMDB_API_KEY=your_api_key_here
TMDB_BASE_URL=https://api.themoviedb.org/3
```

Note: The actual API keys and sensitive data should never be committed to the repository. Always use secure channels (like encrypted messages or password managers) to share sensitive information with team members. 