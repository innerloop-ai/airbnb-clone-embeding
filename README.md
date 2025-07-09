# 🏠 Air Stay - InnerLoop Video Integration

## Project Overview
This project demonstrates how to embed InnerLoop videos into an Air Stay-style vacation rental platform. It showcases how video content can be seamlessly integrated within a modern property listing website, allowing users to explore immersive property tours and browse accommodations with rich video experiences.

## Live Demo
Check out the live demo: [Air Stay Demo](https://air-stay.pages.dev/)

## Features
- **Responsive design** that works perfectly on desktop and mobile devices
- **InnerLoop video embedding** for immersive property tours and virtual walkthroughs
- **Air Stay-inspired UI** with modern, clean design patterns
- **Property grid listings** with comprehensive property information
- **Interactive video controls** with play/pause functionality and video overlays
- **Property details** including price per night, location, ratings, host information, and amenities
- **Video tour badges** indicating properties with available video content
- **Heart favorites** functionality for saving preferred properties

## Technologies Used
This project is built with:

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with strong typing
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Lucide React** - Beautiful, customizable SVG icons
- **InnerLoop Video API** - Professional video streaming and embedding

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation
To run this project locally:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd airbnb-clone-embeding
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application
**Start the development server:**
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`

### Building for Production
**To build the application for production:**
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory

**To preview the production build:**
```bash
npm run preview
```

## Project Structure
```
src/
├── components/
│   ├── Header.tsx           - Navigation header with Airbnb-style search
│   ├── Hero.tsx            - Hero section with main search functionality
│   ├── PropertyGrid.tsx    - Grid component displaying property listings
│   ├── PropertyCard.tsx    - Individual property card with video integration
│   └── Footer.tsx          - Footer component with links and information
├── App.tsx                 - Main React component and app structure
├── main.tsx               - Entry point for the React application
├── index.css              - Global styles and Tailwind CSS imports
├── vite-env.d.ts          - Vite environment type declarations
├── .gitignore             - Git ignore configuration
├── package.json           - NPM package configuration and dependencies
├── tailwind.config.js     - Tailwind CSS configuration
├── tsconfig.json          - TypeScript configuration
├── vite.config.ts         - Vite build tool configuration
└── postcss.config.js      - PostCSS configuration for Tailwind
```

## InnerLoop Video Integration
The Airbnb Clone leverages InnerLoop's powerful video capabilities to enhance the property browsing experience:

- **Video Embedding**: Showcase professional property tours, room walkthroughs, and amenity highlights
- **Seamless Integration**: Videos are embedded directly into property cards using iframe technology
- **Interactive Controls**: Users can play/pause videos and toggle between video and static views
- **Responsive Video**: Video embeds adapt to different screen sizes maintaining aspect ratios

### Video Integration Features:
- Property tour videos embedded from InnerLoop platform
- Automatic video thumbnail generation
- Smooth hover effects and transitions
- Video overlay controls with heart/favorite functionality
- Professional video URLs from InnerLoop streaming service

## Customization

**To modify InnerLoop video settings:**
- Update video embed URLs in `src/components/PropertyGrid.tsx`
- Adjust video player properties in `src/components/PropertyCard.tsx`

**To configure property listings:**
- Modify the properties array in `src/components/PropertyGrid.tsx`
- Update property data structure and video URLs

**To customize styling:**
- Modify Tailwind classes in components
- Update color scheme in `tailwind.config.js`
- Adjust responsive breakpoints and spacing

## Sample Property Data
The application includes sample properties with InnerLoop video integration:
- Luxury Beachfront Villa (Malibu, CA)
- Modern Downtown Loft (New York, NY)
- Cozy Mountain Cabin (Aspen, CO)
- Historic Brownstone (Boston, MA)
- Desert Oasis Resort (Scottsdale, AZ)
- Lakeside Retreat (Lake Tahoe, NV)

Each property includes comprehensive details:
- Property title and location
- Pricing per night
- Star ratings and review counts
- Host information
- Amenity lists
- InnerLoop video tour URLs

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Inspired by Airbnb's user interface and experience design
- Powered by InnerLoop video streaming technology
- Built with modern React and TypeScript best practices
