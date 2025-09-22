'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import AdBox from "@/components/AdBox";
import LatestNews from "@/components/LatestNews";
import Trending from "@/components/Trending";
import Reviews from "@/components/Reviews";
import Videos from "@/components/Videos";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

export default function Page() {
  const latestNews = [
    {
      id: 1,
      title: "TATA Altroz facelift revealed",
      excerpt: "TATA Motors unveils a new look for their popular hatchbook along with enhanced features and improved links.",
      image: "/api/placeholder/120/80",
      category: "Latest News"
    },
    {
      id: 2,
      title: "Mahindra's Vision S",
      excerpt: "The company is set to explore the dimensions of the premium SUV in The Thar.",
      image: "/api/placeholder/120/80",
      category: "Latest News"
    },
    {
      id: 3,
      title: "Mahindra announces price cut upto 2.50 lakh",
      excerpt: "Mahindra has announced benefits of upto 2.50 lakh on its complete 2024 lineup during the festive season.",
      image: "/api/placeholder/120/80",
      category: "Latest News"
    }
  ];

  const trendingNews = [
    { title: "Maruti's main share", image: "/api/placeholder/60/45" },
    { title: "BMW S8 revealed", image: "/api/placeholder/60/45" },
    { title: "BMW M4 CS new look", image: "/api/placeholder/60/45" },
    { title: "DAKAR RALLY 2025", image: "/api/placeholder/60/45" }
  ];

  const reviews = [
    { title: "Lotus Emira R", image: "/api/placeholder/140/100" },
    { title: "Ford Focus RWB", image: "/api/placeholder/140/100" },
    { title: "Ferrari 12 Cilindre", image: "/api/placeholder/140/100" },
    { title: "Cadillac Celestiq", image: "/api/placeholder/140/100" }
  ];

  const videos = [
    { title: "Rise & Fall of used car market", thumbnail: "/api/placeholder/120/80" },
    { title: "Virtual UI designing India's EV market", thumbnail: "/api/placeholder/120/80" },
    { title: "Why a hypercar isn't just a hypercar", thumbnail: "/api/placeholder/120/80" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Hero + Right Sidebar */}
        <div className="mb-8">
          <div className="flex gap-6">
            <div className="flex-1">
              <Hero />
            </div>
            <div className="w-80 space-y-6">
              <Newsletter />
              <AdBox />
            </div>
          </div>
        </div>

        {/* Latest + Trending */}
        <div className="mb-12">
          <div className="flex gap-6">
            <div className="flex-1">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-white uppercase tracking-wide">LATEST NEWS</h2>
              </div>
              <LatestNews items={latestNews} />
              <div className="mt-6">
                <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-2 rounded-full text-sm font-medium transition-colors">
                  View More
                </button>
              </div>
            </div>
            <div className="w-80">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide">TRENDING</h3>
              </div>
              <Trending items={trendingNews} />
            </div>
          </div>
        </div>

        {/* Reviews + Videos */}
        <div className="mb-12">
          <div className="flex gap-6">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-white uppercase tracking-wide">REVIEWS</h2>
                <button className="text-green-500 hover:text-green-400 flex items-center text-sm">
                  View More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              <Reviews items={reviews} />
            </div>
            <div className="w-80">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide">VIDEOS</h3>
              </div>
              <Videos items={videos} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
