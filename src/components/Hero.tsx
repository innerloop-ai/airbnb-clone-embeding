import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Find your next stay
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover amazing places to stay with immersive video tours from our partners at Innerloop
        </p>
        
        {/* Enhanced Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Where</label>
              <input 
                type="text" 
                placeholder="Search destinations"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb-primary focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Check in</label>
              <input 
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb-primary focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Check out</label>
              <input 
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb-primary focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Guests</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb-primary focus:border-transparent">
                <option>1 guest</option>
                <option>2 guests</option>
                <option>3 guests</option>
                <option>4+ guests</option>
              </select>
            </div>
          </div>
          <button className="btn-primary w-full md:w-auto mt-6">
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
