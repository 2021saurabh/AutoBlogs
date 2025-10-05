'use client';

import { Search, User, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // Sticky header state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ESC to close drawer or mobile search
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setMobileSearchOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when drawer/search is open
  useEffect(() => {
    const lock = mobileOpen || mobileSearchOpen;
    document.body.style.overflow = lock ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, mobileSearchOpen]);

  // Base link classes (unchanged)
  const baseLinkClass = `transition-colors uppercase tracking-wide ${
    scrolled ? 'text-gray-900 hover:text-green-600' : 'text-gray-200 hover:text-green-400'
  }`;

  // Active-state color (just text tint; subtle and theme-aware)
  const activeClass = scrolled ? 'text-green-700' : 'text-green-400';

  // Helper to compose classes + aria-current
  const getLinkProps = (href: string) => {
    const isActive = pathname === href;
    return {
      className: `${baseLinkClass} ${isActive ? activeClass : ''}`,
      'aria-current': isActive ? 'page' : undefined,
    } as const;
  };

  return (
    <>
      {/* FIXED HEADER */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-3 transition-all duration-300
          ${
            scrolled
              ? 'bg-gradient-to-r from-white/20 to-gray-300/20 shadow-[0_1px_0_0_rgba(0,0,0,0.08)] backdrop-blur-md'
              : 'bg-black shadow-none'
          }`}
      >
        {/* Left: Logo + desktop nav */}
        <div className="flex items-center space-x-16">
          <div className="flex items-center">
            <img src="/api/placeholder/60/40" alt="Logo" className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex text-sm font-medium space-x-10 lg:space-x-14">
            {/* If you later set real routes, highlight will work automatically */}
            <a href="#" className={baseLinkClass}>LATEST NEWS</a>
            <a href="#" className={baseLinkClass}>REVIEWS</a>
            <a href="#" className={baseLinkClass}>TRENDING</a>
            <a href="#" className={baseLinkClass}>VIDEOS</a>
            <a href="/about" {...getLinkProps('/about')}>ABOUT</a>
          </div>
        </div>

        {/* Right: desktop search + profile, mobile search icon + hamburger */}
        <div className="flex items-center space-x-3">
          {/* Desktop search (unchanged) */}
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

          {/* Desktop profile icon (unchanged) */}
          <div className="hidden md:flex w-10 h-10 bg-gray-700/70 rounded-full items-center justify-center">
            <User className="w-5 h-5 text-gray-300" />
          </div>

          {/* Mobile search icon (unchanged) */}
          <button
            aria-label="Open search"
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-800/70 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => {
              setMobileSearchOpen((v) => !v);
              setMobileOpen(false);
            }}
          >
            <Search className="w-5 h-5 text-white" />
          </button>

          {/* Hamburger (unchanged) */}
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-800/70 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => {
              setMobileOpen(true);
              setMobileSearchOpen(false);
            }}
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Mobile expanding search (unchanged) */}
        <div
          className={`sm:hidden absolute left-0 right-0 top-full px-4 transition-[max-height,opacity] duration-300 overflow-hidden
            ${mobileSearchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div
            className={`relative mt-2 rounded-full border ${
              scrolled ? 'bg-white/80 text-black border-gray-300' : 'bg-gray-800/80 text-white border-gray-700'
            }`}
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              autoFocus
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent rounded-full pl-10 pr-10 py-2 text-sm focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              aria-label="Close search"
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex w-7 h-7 items-center justify-center rounded-full hover:bg-black/10"
              onClick={() => setMobileSearchOpen(false)}
            >
              <X className={`w-4 h-4 ${scrolled ? 'text-gray-700' : 'text-gray-300'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ====== MOBILE DRAWER (with overlay) ====== */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Drawer panel (unchanged) */}
      <aside
        className={`fixed top-0 left-0 z-[60] h-full w-72 md:hidden
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

        {/* Menu links */}
        <nav className="px-5 space-y-4">
          <a href="#" className={`${baseLinkClass} block`} onClick={() => setMobileOpen(false)}>LATEST NEWS</a>
          <a href="#" className={`${baseLinkClass} block`} onClick={() => setMobileOpen(false)}>REVIEWS</a>
          <a href="#" className={`${baseLinkClass} block`} onClick={() => setMobileOpen(false)}>TRENDING</a>
          <a href="#" className={`${baseLinkClass} block`} onClick={() => setMobileOpen(false)}>VIDEOS</a>
          <a
            href="/about"
            {...getLinkProps('/about')}
            className={`${baseLinkClass} ${pathname === '/about' ? activeClass : ''} block`}
            onClick={() => setMobileOpen(false)}
          >
            ABOUT
          </a>
        </nav>
      </aside>
    </>
  );
}
