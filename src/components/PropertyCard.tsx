import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: number;
    rating: number;
    reviewCount: number;
    type: string;
    videoEmbedUrl: string;
    host: string;
    amenities: string[];
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div className="relative mb-3 overflow-hidden rounded-xl">
        {/* Video Embed Only */}
        <div className="aspect-square relative">
          <iframe
            src={property.videoEmbedUrl}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${property.title} - Property Video Tour`}
          />

          {/* Heart Button */}
          <button
            className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <Heart
              className={`w-6 h-6 ${
                isLiked
                  ? 'fill-red-500 text-red-500'
                  : 'fill-black/50 text-white stroke-2'
              }`}
            />
          </button>
        </div>

        {/* Property Details */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-gray-900 truncate flex-1 mr-2">
              {property.title}
            </h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-current text-black mr-1" />
              <span className="text-sm font-medium">{property.rating}</span>
              <span className="text-sm text-gray-600 ml-1">
                ({property.reviewCount})
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-1">{property.location}</p>
          <p className="text-gray-600 text-sm mb-2">Hosted by {property.host}</p>
          
          <div className="flex items-baseline">
            <span className="font-semibold text-gray-900">${property.price}</span>
            <span className="text-gray-600 text-sm ml-1">night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;