import React, { useState } from 'react'
import { Star, Heart, Play } from 'lucide-react'

interface Property {
  id: number
  title: string
  location: string
  price: number
  rating: number
  reviews: number
  images: string[]
  videoEmbedUrl: string
  features: string[]
}

interface PropertyCardProps {
  property: Property
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [showVideo, setShowVideo] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const handleVideoToggle = () => {
    setShowVideo(!showVideo)
  }

  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-xl overflow-hidden mb-3">
        {!showVideo ? (
          <>
            {/* Property Image */}
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Video Play Button Overlay */}
            <button
              onClick={handleVideoToggle}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
            >
              <div className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                <Play size={24} className="text-airbnb-primary ml-1" />
              </div>
            </button>
            
            {/* Video Tour Badge */}
            <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md shadow-sm">
              <span className="text-xs font-medium text-airbnb-primary">Video Tour</span>
            </div>
          </>
        ) : (
          <>
            {/* Embedded Video */}
            <div className="relative w-full h-64 bg-gray-900">
              <iframe
                src={property.videoEmbedUrl}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title={`Video tour of ${property.title}`}
              />
              <button
                onClick={handleVideoToggle}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                ✕
              </button>
            </div>
          </>
        )}
        
        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform"
        >
          <Heart
            size={20}
            className={`${
              isLiked ? 'fill-airbnb-primary text-airbnb-primary' : 'text-white'
            } drop-shadow-sm`}
          />
        </button>
      </div>

      {/* Property Details */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 truncate">{property.title}</h3>
          <div className="flex items-center space-x-1">
            <Star size={14} className="fill-current text-gray-900" />
            <span className="text-sm font-medium">{property.rating}</span>
            <span className="text-sm text-gray-500">({property.reviews})</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm">{property.location}</p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-1 mt-2">
          {property.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <div className="pt-1">
          <span className="font-semibold text-gray-900">${property.price}</span>
          <span className="text-gray-600"> night</span>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
