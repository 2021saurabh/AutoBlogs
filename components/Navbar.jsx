'use client';
import { Search, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-3 transition-all duration-300
        ${scrolled
          ? 'fixed bg-gradient-to-r from-white/60 to-gray-300/60 shadow-[0_1px_0_0_rgba(0,0,0,0.08)] backdrop-blur-md'
          : 'bg-black shadow-none'
        }`}
    >
      <div className="flex items-center space-x-10">
        <div className="flex items-center">
          <img src="/api/placeholder/60/40" alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex text-sm font-medium space-x-10 lg:space-x-14">
          <a href="#" className={`transition-colors uppercase tracking-wide ${scrolled ? 'text-gray-900 hover:text-green-600' : 'text-gray-200 hover:text-green-400'}`}>LATEST NEWS</a>
          <a href="#" className={`transition-colors uppercase tracking-wide ${scrolled ? 'text-gray-900 hover:text-green-600' : 'text-gray-200 hover:text-green-400'}`}>REVIEWS</a>
          <a href="#" className={`transition-colors uppercase tracking-wide ${scrolled ? 'text-gray-900 hover:text-green-600' : 'text-gray-200 hover:text-green-400'}`}>TRENDING</a>
          <a href="#" className={`transition-colors uppercase tracking-wide ${scrolled ? 'text-gray-900 hover:text-green-600' : 'text-gray-200 hover:text-green-400'}`}>VIDEOS</a>
          <a href="#" className={`transition-colors uppercase tracking-wide ${scrolled ? 'text-gray-900 hover:text-green-600' : 'text-gray-200 hover:text-green-400'}`}>ABOUT</a>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search (always dark style) */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800/60 border border-gray-600 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-green-500 w-72 text-white placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Profile (always dark style) */}
        <div className="w-10 h-10 bg-gray-700/70 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-gray-300" />
        </div>
      </div>
    </nav>
  );
}
