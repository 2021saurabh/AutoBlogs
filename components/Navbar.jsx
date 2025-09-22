'use client';
import { Search, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800/50">
      <div className="flex items-center space-x-12">
        <div className="flex items-center">
          <img src="/api/placeholder/60/40" alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors uppercase tracking-wide">REVIEWS</a>
          <a href="#" className="text-white hover:text-green-400 transition-colors uppercase tracking-wide">LATEST</a>
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors uppercase tracking-wide">ABOUT</a>
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors uppercase tracking-wide">NEWS</a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800/50 border border-gray-600 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-green-500 w-72 text-white placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-gray-300" />
        </div>
      </div>
    </nav>
  );
}
