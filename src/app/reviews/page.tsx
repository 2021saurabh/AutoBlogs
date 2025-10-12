// app/reviews/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavOffset from '@/components/NavOffset';
import Reviews from '@/components/Reviews';
import { Star, Gauge, Award, Filter } from 'lucide-react';

export const metadata = {
  title: 'Reviews — Motormiles',
  description: 'Performance reviews and deep dives.',
};

export default function ReviewsPage() {
  const items = [
    { title: 'Lotus Emira R', image: '/images/lotus-emira-r.jpeg' },
    { title: 'Ford Focus RWB', image: '/images/ford-focus-rwb.jpeg' },
    { title: 'Ferrari 12 Cilindre', image: '/images/ferrari-12-cilindre.jpeg' },
    { title: 'Cadillac Celestiq', image: '/images/cadillac-celestiq.jpeg' },
    { title: 'BMW M4 CS — Track Pack', image: '/images/bmw-m4.jpeg' },
    { title: 'BMW S8 Concept — First Drive', image: '/images/bmw-s8.jpeg' },
    { title: 'Mahindra Vision S — Prototype Review', image: '/images/vision-s.jpeg' },
    { title: 'Altroz Facelift — Road Test', image: '/images/altroz.jpeg' },
  ];

  const categories = [
    { name: 'All Reviews', count: items.length, active: true },
    { name: 'Luxury', count: 3, active: false },
    { name: 'Performance', count: 4, active: false },
    { name: 'SUVs', count: 2, active: false },
    { name: 'Electric', count: 1, active: false },
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
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 via-green-400 to-emerald-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <Star className="w-6 h-6 md:w-7 md:h-7 text-green-400" />
                  </div>
                  <div>
                    <span className="text-green-400 text-xs md:text-sm font-semibold tracking-widest uppercase block mb-1">
                      Expert Analysis
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                      Car <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 bg-clip-text text-transparent">Reviews</span>
                    </h1>
                  </div>
                </div>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl font-light">
                  In-depth performance reviews, real-world testing, and expert insights on the cars that matter.
                </p>
              </div>
              
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className="mb-10 md:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 text-center hover:border-green-500/30 transition-colors">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">{items.length}</p>
                <p className="text-sm text-gray-400">Expert Reviews</p>
              </div>
              
              <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 text-center hover:border-green-500/30 transition-colors">
                <div className="flex items-center justify-center mb-2">
                  <Gauge className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">50+</p>
                <p className="text-sm text-gray-400">Road Tests</p>
              </div>
              
              <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 text-center hover:border-green-500/30 transition-colors">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">4.8</p>
                <p className="text-sm text-gray-400">Average Rating</p>
              </div>
            </div>
          </section>

          {/* Category Filter Pills */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-400">Filter by Category:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    cat.active
                      ? 'bg-green-500 text-black shadow-lg shadow-green-500/20'
                      : 'bg-gray-900/60 border border-gray-800 text-gray-300 hover:border-green-500/30 hover:text-white'
                  }`}
                >
                  {cat.name}
                  <span className={`ml-2 ${cat.active ? 'text-black/70' : 'text-gray-500'}`}>
                    ({cat.count})
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Featured Review Banner */}
          <section className="mb-12">
            <div className="relative rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-950/40 via-gray-900/60 to-gray-900/40 p-8 md:p-10 overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-all"></div>
              
              <div className="relative z-10">
                <div className="inline-block mb-4">
                  <span className="text-green-400 text-xs font-semibold tracking-widest uppercase border border-green-500/30 rounded-full px-3 py-1 bg-green-500/10">
                    ⭐ Editor's Pick
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                  Ferrari 12 Cilindre — The V12 Swan Song
                </h3>
                <p className="text-gray-300 mb-6 max-w-3xl leading-relaxed">
                  We take Ferrari's final naturally aspirated V12 grand tourer to the mountains and discover why this might be the most important Ferrari of the decade.
                </p>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-green-400 fill-green-400" />
                    <span className="text-white font-semibold">9.5/10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-green-400" />
                    <span className="text-gray-400">Performance</span>
                  </div>
                  <div className="text-gray-500">•</div>
                  <span className="text-gray-400">12 min read</span>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews Grid */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">All Reviews</h2>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">Sort by:</span>
                <select className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 text-white text-sm focus:outline-none focus:border-green-500 transition-colors cursor-pointer">
                  <option>Most Recent</option>
                  <option>Highest Rated</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>
            
            <Reviews items={items} large />
          </section>

          {/* Load More CTA */}
          <section className="text-center py-8">
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-gray-400 text-sm">More reviews coming soon</p>
              <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-colors shadow-lg shadow-green-500/20">
                Load More Reviews
              </button>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="rounded-2xl border border-gray-800 bg-gray-900/60 p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Want Your Car <span className="text-green-400">Reviewed?</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for interesting cars to test. Get in touch with our editorial team to discuss featuring your vehicle.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 border border-green-500 hover:bg-green-500/10 text-green-400 font-semibold rounded-lg transition-colors"
            >
              Contact Editorial Team
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}