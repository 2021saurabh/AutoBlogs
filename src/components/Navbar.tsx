'use client';

import { User, Menu, X, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const baseLinkClass = `transition-colors uppercase tracking-wide ${scrolled ? 'text-gray-900 hover:text-green-600' : 'text-gray-200 hover:text-green-400'
    }`;
  const activeClass = scrolled ? 'text-green-700' : 'text-green-400';

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
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300
        ${scrolled
            ? 'bg-gradient-to-r from-white/20 to-gray-300/20 shadow-[0_1px_0_0_rgba(0,0,0,0.08)] backdrop-blur-md'
            : 'bg-black shadow-none'
          }`}
      >
        {/* Left: Logo + desktop nav */}
        <div className="flex items-center gap-4 sm:gap-10 lg:gap-16 min-w-0">
          <a href="/" className="shrink-0 transform transition-transform duration-300 hover:scale-105 relative group">
            <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 rounded transition-opacity" />
            <img src="/images/logo.jpeg" alt="Logo" className="h-8 w-auto rounded" />
          </a>

          <div className="hidden md:flex text-sm font-medium space-x-10 lg:space-x-14">
            <a href="/latest-news" {...getLinkProps('/latest-news')}>LATEST NEWS</a>
            <a href="/reviews" {...getLinkProps('/reviews')}>REVIEWS</a>
            <a href="/trending" {...getLinkProps('/trending')}>TRENDING</a>
            <a href="/videos" {...getLinkProps('/videos')}>VIDEOS</a>
            <a href="/about" {...getLinkProps('/about')}>ABOUT</a>
          </div>
        </div>

        {/* Right side: desktop & mobile controls */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1 justify-end">
          {/* DESKTOP SEARCH */}
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

          {/* MOBILE SEARCH BAR */}
          <div className="relative sm:hidden flex-1 max-w-[92vw]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className={`w-full rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none border
        ${scrolled
                  ? 'bg-white/80 text-black placeholder-gray-500 border-gray-300 focus:border-green-500'
                  : 'bg-gray-800/80 text-white placeholder-gray-400 border-gray-700 focus:border-green-500'
                }`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Hamburger for mobile menu */}
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-800/70 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>

      </nav>

      {/* MOBILE DRAWER + OVERLAY */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      <aside
        className={`fixed top-0 left-0 z-[60] h-full w-72 md:hidden transition-transform duration-300 ease-out
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        ${scrolled ? 'bg-gradient-to-b from-white/70 to-gray-200/70' : 'bg-black/90'}
        backdrop-blur-md border-r ${scrolled ? 'border-gray-200' : 'border-gray-800'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className={`text-sm font-semibold uppercase tracking-wide ${scrolled ? 'text-gray-900' : 'text-gray-200'}`}>Menu</span>
          <button
            aria-label="Close menu"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-black/10"
            onClick={() => setMobileOpen(false)}
          >
            <X className={`w-5 h-5 ${scrolled ? 'text-gray-900' : 'text-gray-200'}`} />
          </button>
        </div>

        <nav className="px-5 space-y-4">
          <a href="/latest-news" {...getLinkProps('/latest-news')} className={`${baseLinkClass} ${pathname === '/latest-news' ? activeClass : ''} block`} onClick={() => setMobileOpen(false)}>LATEST NEWS</a>
          <a href="/reviews" {...getLinkProps('/reviews')} className={`${baseLinkClass} ${pathname === '/reviews' ? activeClass : ''} block`} onClick={() => setMobileOpen(false)}>REVIEWS</a>
          <a href="/trending" {...getLinkProps('/trending')} className={`${baseLinkClass} ${pathname === '/trending' ? activeClass : ''} block`} onClick={() => setMobileOpen(false)}>TRENDING</a>
          <a href="/videos" {...getLinkProps('/videos')} className={`${baseLinkClass} ${pathname === '/videos' ? activeClass : ''} block`} onClick={() => setMobileOpen(false)}>VIDEOS</a>
          <a href="/about" {...getLinkProps('/about')} className={`${baseLinkClass} ${pathname === '/about' ? activeClass : ''} block`} onClick={() => setMobileOpen(false)}>ABOUT</a>
        </nav>
      </aside>
    </>
  );
}
