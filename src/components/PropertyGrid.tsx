import React from 'react'
import PropertyCard from './PropertyCard'

// Sample property data with Innerloop video embed links
const properties = [
  {
    id: 1,
    title: 'Luxury Beachfront Villa',
    location: 'Malibu, California',
    price: 450,
    rating: 4.95,
    reviews: 127,
    images: [
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    videoEmbedUrl: 'https://innerloop.example.com/embed/video/luxury-villa-tour',
    features: ['Ocean view', 'Private beach', 'Pool', 'WiFi']
  },
  {
    id: 2,
    title: 'Modern Downtown Loft',
    location: 'New York, NY',
    price: 220,
    rating: 4.8,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    videoEmbedUrl: 'https://innerloop.example.com/embed/video/modern-loft-showcase',
    features: ['City view', 'Rooftop access', 'Gym', 'WiFi']
  },
  {
    id: 3,
    title: 'Cozy Mountain Cabin',
    location: 'Aspen, Colorado',
    price: 180,
    rating: 4.92,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    videoEmbedUrl: 'https://innerloop.example.com/embed/video/mountain-cabin-experience',
    features: ['Mountain view', 'Fireplace', 'Hot tub', 'WiFi']
  },
  {
    id: 4,
    title: 'Historic Brownstone',
    location: 'Boston, Massachusetts',
    price: 160,
    rating: 4.7,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    videoEmbedUrl: 'https://innerloop.example.com/embed/video/historic-brownstone-tour',
    features: ['Historic charm', 'Garden', 'Parking', 'WiFi']
  },
  {
    id: 5,
    title: 'Desert Oasis Resort',
    location: 'Scottsdale, Arizona',
    price: 320,
    rating: 4.85,
    reviews: 94,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    videoEmbedUrl: 'https://innerloop.example.com/embed/video/desert-oasis-experience',
    features: ['Desert view', 'Spa', 'Pool', 'WiFi']
  },
  {
    id: 6,
    title: 'Lakeside Retreat',
    location: 'Lake Tahoe, Nevada',
    price: 280,
    rating: 4.9,
    reviews: 178,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    videoEmbedUrl: 'https://innerloop.example.com/embed/video/lakeside-retreat-virtual-tour',
    features: ['Lake view', 'Dock access', 'Kayaks', 'WiFi']
  }
]

const PropertyGrid = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Stay anywhere with video tours
          </h2>
          <p className="text-gray-600">
            Powered by Innerloop video technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Show more
          </button>
        </div>
      </div>
    </section>
  )
}

export default PropertyGrid
