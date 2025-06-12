import { Search, Globe, Menu, User } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-airbnb-primary text-2xl font-bold">
              airbnb
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <button className="text-sm font-medium text-gray-700 border-r border-gray-300 pr-4">
                Anywhere
              </button>
              <button className="text-sm font-medium text-gray-700 border-r border-gray-300 pr-4">
                Any week
              </button>
              <button className="text-sm text-gray-500">
                Add guests
              </button>
            </div>
            <button className="bg-airbnb-primary text-white p-2 rounded-full ml-2">
              <Search size={16} />
            </button>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-sm font-medium text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-full">
              Airbnb your home
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Globe size={18} />
            </button>
            <div className="flex items-center border border-gray-300 rounded-full p-2 hover:shadow-md transition-shadow">
              <Menu size={16} className="mr-2" />
              <User size={20} className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
