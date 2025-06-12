# Airbnb Clone with Video Embedding

A modern Airbnb clone built with React, TypeScript, and Tailwind CSS, featuring video tour integration from Innerloop platform.

## Features

- 🏠 **Property Listings**: Browse beautiful properties with detailed information
- 🎥 **Video Tours**: Interactive video tours powered by Innerloop embedding
- 📱 **Responsive Design**: Airbnb-inspired UI that works on all devices
- ⭐ **Property Ratings**: Star ratings and review counts
- 💝 **Wishlist**: Like/unlike properties functionality
- 🔍 **Search Interface**: Advanced search with filters
- 🎨 **Modern UI**: Clean, modern interface using Tailwind CSS

## Video Integration

This application showcases video embedding capabilities from the Innerloop platform:
- Click the play button on any property to view the video tour
- Videos are embedded using iframe technology
- Seamless toggle between image and video views
- Video tour badges for enhanced visibility

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with search
│   ├── PropertyGrid.tsx    # Grid of property cards
│   ├── PropertyCard.tsx    # Individual property card with video
│   └── Footer.tsx          # Footer component
├── App.tsx                 # Main app component
├── main.tsx               # React app entry point
└── index.css              # Global styles with Tailwind
```

## Video Embedding

Properties include video embed URLs from Innerloop:
- Format: `https://innerloop.example.com/embed/video/{video-id}`
- Videos load in iframe when play button is clicked
- Responsive video containers
- Close button to return to image view

## Customization

### Adding New Properties

Edit the `properties` array in `src/components/PropertyGrid.tsx`:

```typescript
{
  id: 7,
  title: 'Your Property Title',
  location: 'City, State',
  price: 200,
  rating: 4.8,
  reviews: 50,
  images: ['https://your-image-url.jpg'],
  videoEmbedUrl: 'https://innerloop.example.com/embed/video/your-video-id',
  features: ['Feature 1', 'Feature 2']
}
```

### Styling

The app uses Tailwind CSS with custom Airbnb-inspired colors:
- Primary: `#FF385C` (Airbnb red)
- Secondary: `#00A699` (Airbnb teal)
- Dark: `#222222` (Dark gray)

## License

This project is created for demonstration purposes to showcase video embedding capabilities.
