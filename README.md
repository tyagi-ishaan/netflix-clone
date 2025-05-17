# Netflix Clone

A full-stack Netflix clone application built with React and Node.js, featuring movie/show browsing, trailer playback, and a responsive Netflix-style interface.

## Features

### Home Page
- Netflix-style horizontal scrolling rows for different categories
- Dynamic hero section featuring Stranger Things
- Responsive design with proper image sizing
- Smooth hover effects and animations

### Content Categories
- Netflix Originals section
- Trending Now section
- Each section displays 12 carefully curated items
- High-quality poster images for all content

### Video Player
- YouTube trailer integration
- Material-UI Dialog implementation
- Autoplay functionality
- 16:9 aspect ratio maintenance
- Modal system for trailer display
- Play button triggers on both hero section and content tiles

### UI/UX Features
- Custom scrollbar styling
- Smooth hover animations
- Text shadows and transitions
- Responsive navbar with Netflix logo
- Tile dimensions: 160px × 240px
- Professional-grade image quality (w500 for tiles, original for hero section)

## Tech Stack

### Frontend
- React.js
- Material-UI
- CSS3 with custom animations
- React Router DOM
- Axios for API calls

### Backend
- Node.js
- Express.js
- Nodemon for development

### APIs & Services
- TMDB (The Movie Database) API for content
- YouTube API for trailers

### Development Tools
- Concurrently for running multiple scripts
- npm for package management
- ESLint for code quality
- Git for version control

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
cd client && npm install
```

3. Create a .env file in the root directory and add your TMDB API key:
```env
TMDB_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

The application will start running on:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Accessing from Other Devices

To access the application from other devices on your network:

1. Make sure both devices are connected to the same network
2. Find your computer's IP address (shown when you start the application)
3. On the other device, open a web browser and navigate to:
   - `http://[your-ip-address]:3000`
   For example: `http://192.168.1.5:3000`

Note: Your firewall settings might need to allow incoming connections on port 3000 for this to work.

## Project Structure
- `/client` - React frontend application
- `/server` - Node.js backend server
- `/client/src/components` - React components
- `/client/src/pages` - Page components
- `/server/routes` - API routes

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Deployment and Backup

### Creating a Production Build

1. Create a production build of the React application:
```bash
cd client && npm run build
```

2. The build will be created in the `client/build` directory
   - This contains optimized, minified files ready for production
   - File sizes after gzip:
     - Main JavaScript bundle: ~124 KB
     - Additional chunks: ~1.8 KB
     - CSS: ~263 B

### Serving the Production Build

To serve the production build locally:
```bash
npm install -g serve
serve -s client/build
```

### Backing Up Your Code

1. Save all your work:
```bash
git add .
git commit -m "Your commit message"
```

2. Important files to backup:
   - `/client/build` - Production build
   - `/client/src` - React source code
   - `/server` - Backend server code
   - `.env` - Environment variables (keep secure)
   - `package.json` - Project dependencies
   - `README.md` - Project documentation

3. Recommended backup methods:
   - Version control (Git)
   - Local backup to external drive
   - Cloud storage service

### Important Notes
- Always keep your `.env` file secure and never commit it to version control
- Regularly update your dependencies for security
- Keep a copy of your TMDB API key in a secure location 