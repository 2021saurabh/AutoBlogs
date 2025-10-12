// app/latest-news/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavOffset from '@/components/NavOffset';
import LatestNews from '@/components/LatestNews';
import { Calendar, TrendingUp, Newspaper } from 'lucide-react';

export const metadata = {
  title: 'Latest News — Motormiles',
  description: 'All the latest news from Motormiles.',
};

export default function LatestNewsPage() {
  const items = [
    {
      id: 1,
      title: "Mahindra's Vision S revealed",
      excerpt: "Mahindra teases a bold new design direction with Vision S, expected to influence future SUVs.",
      image: "/images/vision-s.jpeg",
      category: "Latest News",
    },
    {
      id: 2,
      title: "TATA Altroz facelift revealed",
      excerpt: "Updated styling, new tech, and better NVH levels headline the Altroz refresh.",
      image: "/images/altroz.jpeg",
      category: "Latest News",
    },
    {
      id: 3,
      title: "Mahindra announces price cut upto 2.50 lakh",
      excerpt: "Festive season benefits rolled out across the 2024 lineup.",
      image: "/images/mahindra-price-cut.jpeg",
      category: "Latest News",
    },
    {
      id: 4,
      title: "Maruti Q4 update",
      excerpt: "Maruti's market share remains strong with compact SUV momentum.",
      image: "/images/maruti.jpeg",
      category: "Latest News",
    },
    {
      id: 5,
      title: "BMW S8 concept preview",
      excerpt: "Performance luxury sedan concept previews next-gen design language.",
      image: "/images/bmw-s8.jpeg",
      category: "Latest News",
    },
    {
      id: 6,
      title: "BMW M4 CS new look",
      excerpt: "Lightweight package and sharper aero bring track focus to the M4 CS.",
      image: "/images/bmw-m4.jpeg",
      category: "Latest News",
    },
    {
      id: 7,
      title: "DAKAR RALLY 2025 route announced",
      excerpt: "New stages promise tougher dunes and longer liaison sections.",
      image: "/images/dakar-rally-2025.jpeg",
      category: "Latest News",
    },
    {
      id: 8,
      title: "Lotus Emira R India allocation",
      excerpt: "Limited slots expected; bookings may open via select dealers.",
      image: "/images/lotus-emira-r.jpeg",
      category: "Latest News",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <NavOffset />

      <main className="flex-1">
        <div className="container mx-auto max-w-7xl px-6 py-12 md:py-16">
          {/* Hero Header Section */}
          <section className="mb-12 md:mb-16">
            <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-green-950/30 via-gray-900/60 to-gray-800/40 p-8 md:p-12 lg:p-16">
              {/* Accent line */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 via-green-400 to-emerald-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <Newspaper className="w-6 h-6 md:w-7 md:h-7 text-green-400" />
                  </div>
                  <div>
                    <span className="text-green-400 text-xs md:text-sm font-semibold tracking-widest uppercase block mb-1">
                      Stay Updated
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                      Latest <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 bg-clip-text text-transparent">News</span>
                    </h1>
                  </div>
                </div>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl font-light">
                  Breaking stories, exclusive launches, and the latest updates from the automotive world — all in one place.
                </p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
            </div>
          </section>

          {/* Stats Bar */}
          {/* <section className="mb-10 md:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 text-center hover:border-green-500/30 transition-colors">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">{items.length}</p>
                <p className="text-sm text-gray-400">Stories Today</p>
              </div>
              
              <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 text-center hover:border-green-500/30 transition-colors">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">24/7</p>
                <p className="text-sm text-gray-400">Live Updates</p>
              </div>
              
              <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 text-center hover:border-green-500/30 transition-colors">
                <div className="flex items-center justify-center mb-2">
                  <Newspaper className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">100+</p>
                <p className="text-sm text-gray-400">Weekly Articles</p>
              </div>
            </div>
          </section> */}

          {/* Filter/Sort Bar */}
          <section className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Showing</span>
              <span className="text-sm font-semibold text-white">{items.length} articles</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">Sort by:</span>
              <button className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium hover:bg-green-500/20 transition-colors">
                Most Recent
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-800 text-gray-400 text-sm font-medium hover:border-gray-700 hover:text-white transition-colors">
                Popular
              </button>
            </div>
          </section>

          {/* News Grid */}
          <section className="mb-12">
            <LatestNews items={items} large />
          </section>

          {/* Load More CTA */}
          <section className="text-center py-8">
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-gray-400 text-sm">Want to see more stories?</p>
              <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-colors shadow-lg shadow-green-500/20">
                Load More Articles
              </button>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-950/40 via-gray-900/60 to-gray-900/40 p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Never Miss an <span className="text-green-400">Update</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest automotive news delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}