import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyGrid: React.FC = () => {
  // Sample property data with Innerloop video embed links
  const properties = [
    {
      id: 1,
      title: 'Luxury Beachfront Villa',
      location: 'Malibu, California',
      price: 450,
      rating: 4.95,
      reviewCount: 127,
      type: 'Entire villa',
      videoEmbedUrl: 'https://play.innerloop.stream/playersvc/ins-share/cu-ZHrAHKSn4m3Q-zEozykO4',
      host: 'Sarah',
      amenities: ['Ocean view', 'Private beach', 'Pool', 'WiFi']
    },
    {
      id: 2,
      title: 'Modern Downtown Loft',
      location: 'New York, NY',
      price: 220,
      rating: 4.8,
      reviewCount: 89,
      type: 'Entire loft',
      videoEmbedUrl: 'https://play.innerloop.stream/playersvc/ins-share/cu-pEpcaO6O9OwiJhhS15h7D',
      host: 'Michael',
      amenities: ['City view', 'Rooftop access', 'Gym', 'WiFi']
    },
    {
      id: 3,
      title: 'Cozy Mountain Cabin',
      location: 'Aspen, Colorado',
      price: 180,
      rating: 4.92,
      reviewCount: 203,
      type: 'Entire cabin',
      videoEmbedUrl: 'https://play.innerloop.stream/playersvc/ins-share/cu-VmzXMLVrCht4GNCjyldBc',
      host: 'Emma',
      amenities: ['Mountain view', 'Fireplace', 'Hot tub', 'WiFi']
    },
    {
      id: 4,
      title: 'Historic Brownstone',
      location: 'Boston, Massachusetts',
      price: 160,
      rating: 4.7,
      reviewCount: 156,
      type: 'Entire apartment',
      videoEmbedUrl: 'https://play.innerloop.stream/playersvc/ins-share/cu-omCy3oxiHCEFwcFuSw9un',
      host: 'David',
      amenities: ['Historic charm', 'Garden', 'Parking', 'WiFi']
    },
    {
      id: 5,
      title: 'Desert Oasis Resort',
      location: 'Scottsdale, Arizona',
      price: 320,
      rating: 4.85,
      reviewCount: 94,
      type: 'Entire resort',
      videoEmbedUrl: 'https://play.innerloop.stream/playersvc/ins-share/cu-NbXlgdNNnpCIf0E0nWpp8',
      host: 'Desert Retreats',
      amenities: ['Desert view', 'Spa', 'Pool', 'WiFi']
    },
    {
      id: 6,
      title: 'Lakeside Retreat',
      location: 'Lake Tahoe, Nevada',
      price: 280,
      rating: 4.9,
      reviewCount: 178,
      type: 'Entire house',
      videoEmbedUrl: 'https://play.innerloop.stream/playersvc/ins-share/cu-Z2eV0KFhRvrip2fx27-NK',
      host: 'Jennifer',
      amenities: ['Lake view', 'Dock access', 'Kayaks', 'WiFi']
    }
  ];

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
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;