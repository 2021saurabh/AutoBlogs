'use client';
import { Search, User, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const linkClass = `transition-colors uppercase tracking-wide ${
    scrolled ? 'text-gray-900 hover:text-green-600' : 'text-gray-200 hover:text-green-400'
  }`;

  return (
    <>
      <nav
        className={`top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-3 transition-all duration-300
          ${scrolled
            ? 'fixed bg-gradient-to-r from-white/60 to-gray-300/60 shadow-[0_1px_0_0_rgba(0,0,0,0.08)] backdrop-blur-md'
            : 'bg-black shadow-none'
          }`}
      >
        {/* Left: logo + desktop links */}
        <div className="flex items-center space-x-16">
          <div className="flex items-center">
            <img src="/api/placeholder/60/40" alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex text-sm font-medium space-x-10 lg:space-x-14">
            <a href="#" className={linkClass}>LATEST NEWS</a>
            <a href="#" className={linkClass}>REVIEWS</a>
            <a href="#" className={linkClass}>TRENDING</a>
            <a href="#" className={linkClass}>VIDEOS</a>
            <a href="#" className={linkClass}>ABOUT</a>
          </div>
        </div>

        {/* Right: search, profile (desktop), hamburger */}
        <div className="flex items-center space-x-3">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800/60 border border-gray-600 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-green-500 w-72 text-white placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Desktop-only profile icon */}
          <div className="hidden md:flex w-10 h-10 bg-gray-700/70 rounded-full items-center justify-center">
            <User className="w-5 h-5 text-gray-300" />
          </div>

          {/* Hamburger (mobile) */}
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-800/70 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 md:hidden
          transition-transform duration-300 ease-out
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          ${scrolled ? 'bg-gradient-to-b from-white/70 to-gray-200/70' : 'bg-black/90'}
          backdrop-blur-md border-r ${scrolled ? 'border-gray-200' : 'border-gray-800'}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4">
          <span className={`text-sm font-semibold uppercase tracking-wide ${scrolled ? 'text-gray-900' : 'text-gray-200'}`}>
            Menu
          </span>
          <button
            aria-label="Close menu"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-black/10"
            onClick={() => setMobileOpen(false)}
          >
            <X className={`w-5 h-5 ${scrolled ? 'text-gray-900' : 'text-gray-200'}`} />
          </button>
        </div>

        {/* MY PROFILE section (top, separated) */}
        <div className="px-5">
          <a
            href="#"
            className={`block w-full text-left rounded-lg px-4 py-3 font-semibold tracking-wide
              ${scrolled ? 'bg-white/80 text-gray-900 hover:bg-white' : 'bg-gray-800/80 text-gray-100 hover:bg-gray-800'}
              transition-colors`}
            onClick={() => setMobileOpen(false)}
          >
            MY PROFILE
          </a>
        </div>
        <div className={`mt-4 mb-3 border-t ${scrolled ? 'border-gray-300' : 'border-gray-800'}`} />

        {/* Mobile links */}
        <nav className="px-5 space-y-4">
          <a href="#" className={`${linkClass} block`} onClick={() => setMobileOpen(false)}>LATEST NEWS</a>
          <a href="#" className={`${linkClass} block`} onClick={() => setMobileOpen(false)}>REVIEWS</a>
          <a href="#" className={`${linkClass} block`} onClick={() => setMobileOpen(false)}>TRENDING</a>
          <a href="#" className={`${linkClass} block`} onClick={() => setMobileOpen(false)}>VIDEOS</a>
          <a href="#" className={`${linkClass} block`} onClick={() => setMobileOpen(false)}>ABOUT</a>

          {/* Compact mobile search */}
          <div className="mt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className={`w-full ${scrolled ? 'bg-white/80 text-black placeholder-gray-500' : 'bg-gray-800/80 text-white placeholder-gray-400'}
                  border ${scrolled ? 'border-gray-300' : 'border-gray-700'}
                  rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-green-500`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
