# Netflix Clone

Hey there! 👋 Welcome to my Netflix clone project. I built this using React and Node.js to recreate the awesome Netflix experience we all love. It's got all the cool features like trailer previews, that smooth Netflix UI, and real content from TMDB.

## What's Inside

### Home Page
- A stunning hero section showcasing featured content
- Smooth-scrolling content rows (just like Netflix!)
- Hover effects that make browsing feel natural
- Works great on any screen size

### Content & Videos
- Fresh content from Netflix Originals
- What's trending right now
- Quick trailer previews when you hover
- High-quality movie posters and backdrops

### The Cool Stuff
- Click to watch trailers instantly
- Custom-designed video player
- Slick animations everywhere
- That signature Netflix look and feel

## Built With

### Frontend
- React.js
- Material-UI for the sleek design
- Custom CSS animations
- Axios for data fetching

### Backend
- Node.js & Express
- RESTful API design
- Real-time content updates

### APIs Used
- TMDB for movies and shows
- YouTube for trailers

## Getting Started

1. First things first:
   ```bash
   # Grab the project files
   copy the project to your machine

   # Install what you need
   npm install

   # Set up the frontend
   cd client && npm install
   ```

2. Set up your environment:
   ```bash
   # Create a .env file and add:
   TMDB_API_KEY=your_api_key_here
   ```

3. Fire it up:
   ```bash
   # Head back to the main folder
   cd ..

   # Launch the app
   npm run dev
   ```

4. Check it out:
   - Open http://localhost:3000 in your browser
   - API runs on http://localhost:5000

## Want to Access from Other Devices?

1. Make sure everything's on the same network
2. Find your computer's IP address
3. Visit `http://[your-ip-address]:3000`
   Like this: `http://192.168.1.5:3000`

(You might need to allow port 3000 through your firewall)

## Setting Up TMDB

1. Grab an API key from TMDB's website
2. Pop it in your .env file
3. Restart the app and you're good to go!

## Building for Production
```bash
# Create the optimized version
cd client && npm run build

# Serve it up
npm install -g serve
serve -s build
```

## Running Into Issues?

If something's not working:
- Check if port 5000 is free
- Make sure your TMDB key is right
- Double-check your dependencies
- Clear your browser cache if videos aren't playing

## What's Coming Next

I'm planning to add:
- User accounts
- Your personal watchlist
- Smart recommendations
- Better search
- More language options

## Environment Setup

Keep your secrets safe! Here's how:

1. Make a `.env` file in the main folder
2. Check `.env.example` to see what you need
3. Get your API keys from [TMDB](https://www.themoviedb.org/documentation/api)
4. Keep your `.env` file private
5. Share keys securely with your team

Your `.env` should look like this:
```
TMDB_API_KEY=your_api_key_here
TMDB_BASE_URL=https://api.themoviedb.org/3
```

Remember: Never share your API keys publicly! Use secure channels to share sensitive info with your team. 