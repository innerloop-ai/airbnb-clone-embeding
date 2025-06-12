import React from 'react'
import { Globe, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900">AirCover</a></li>
              <li><a href="#" className="hover:text-gray-900">Safety information</a></li>
              <li><a href="#" className="hover:text-gray-900">Supporting people with disabilities</a></li>
              <li><a href="#" className="hover:text-gray-900">Cancellation options</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Airbnb.org: disaster relief housing</a></li>
              <li><a href="#" className="hover:text-gray-900">Combating discrimination</a></li>
              <li><a href="#" className="hover:text-gray-900">Video tours by Innerloop</a></li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hosting</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Airbnb your home</a></li>
              <li><a href="#" className="hover:text-gray-900">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:text-gray-900">Hosting resources</a></li>
              <li><a href="#" className="hover:text-gray-900">Community forum</a></li>
              <li><a href="#" className="hover:text-gray-900">Add video tours</a></li>
            </ul>
          </div>

          {/* Airbnb */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Airbnb</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Newsroom</a></li>
              <li><a href="#" className="hover:text-gray-900">New features</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Investors</a></li>
              <li><a href="#" className="hover:text-gray-900">Airbnb.com sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span>© 2025 Airbnb Clone with Innerloop Video</span>
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Sitemap</a>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Globe size={16} />
                <span className="text-sm font-medium">English (US)</span>
                <span className="text-sm font-medium">$ USD</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
