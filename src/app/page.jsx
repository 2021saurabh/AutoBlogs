'use client';

import { useEffect, useState } from 'react';
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
import NavOffset from "@/components/NavOffset";

export default function Page() {


 const latestNews = [
  {
    id: 1,
    title: "Mahindra's Vision S",
    excerpt: "The company is set to explore the dimensions of the premium SUV in The Thar.",
    image: "/images/vision-s.jpeg",  
    category: "Latest News",
  },
  {
    id: 2,
    title: "TATA Altroz facelift revealed",
    excerpt: "TATA Motors unveils a new look for their popular hatchback...",
    image: "/images/altroz.jpeg",
    category: "Latest News",
  },
  {
    id: 3,
    title: "Mahindra announces price cut upto 2.50 lakh",
    excerpt: "Benefits across the 2024 lineup during the festive season.",
    image: "/images/mahindra-price-cut.jpeg",
    category: "Latest News",
  },
];


  const trendingNews = [
  { title: "Maruti's main share", image: "/images/maruti.jpeg" },
  { title: "BMW S8 revealed", image: "/images/bmw-s8.jpeg" },
  { title: "BMW M4 CS new look", image: "/images/bmw-m4.jpeg" },
  { title: "DAKAR RALLY 2025", image: "/images/dakar-rally-2025.jpeg" },
];

  const reviews = [
    { title: "Lotus Emira R", image: "/images/lotus-emira-r.jpeg" },
    { title: "Ford Focus RWB", image: "/images/ford-focus-rwb.jpeg" },
    { title: "Ferrari 12 Cilindre", image: "/images/ferrari-12-cilindre.jpeg" },
    { title: "Cadillac Celestiq", image: "/images/cadillac-celestiq.jpeg" }
  ];

  const videos = [
    { title: "Rise & Fall of used car market", thumbnail: "/api/placeholder/120/80" },
    { title: "Virtual UI designing India's EV market", thumbnail: "/api/placeholder/120/80" },
    { title: "Why a hypercar isn't just a hypercar", thumbnail: "/api/placeholder/120/80" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <NavOffset />
        <div className="container mx-auto px-6 py-8 max-w-7xl">
          {/* Hero + Right Sidebar */}
          <div className="mb-8">
            {/* ↓ mobile: column; desktop: original row layout */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:h-[450px]">
              {/* Hero — keep 65% on lg+ exactly as before */}
              <div className="w-full lg:w-[65%] h-full">
                <div className="h-[220px] sm:h-[280px] md:h-[340px] lg:h-full">
                  <Hero />
                </div>
              </div>

              {/* Sidebar — keep 35% on lg+ exactly as before */}
              <div className="w-full lg:w-[35%] h-full flex flex-col gap-4 sm:gap-6 mt-4 lg:mt-0">
                <div className="flex-1">
                  <AdBox />
                </div>
                <div className="flex-1">
                  <Newsletter />
                </div>
              </div>
            </div>
          </div>

          {/* Latest + Trending */}
          <div className="mb-12">
            {/* ↓ only stacks on <lg; lg+ remains identical */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-start">
              <div className="w-full lg:w-[65%]">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
                    LATEST NEWS
                  </h2>
                </div>
                <LatestNews items={latestNews} large />
                <div className="mt-8">
                  <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-2 rounded-full text-sm font-medium transition-colors">
                    View More
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-[35%]">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                    TRENDING
                  </h3>
                </div>
                <Trending items={trendingNews} large />
              </div>
            </div>
          </div>

          {/* Reviews + Videos */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
              <div className="w-full lg:w-[65%]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
                    REVIEWS
                  </h2>
                  <button className="text-green-500 hover:text-green-400 flex items-center text-sm">
                    View More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <div className="h-[440px]">
                  <Reviews items={reviews} large />
                </div>
              </div>

              <div className="w-full lg:w-[35%]">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                    VIDEOS
                  </h3>
                </div>
                <div className="h-[440px]">
                  <Videos items={videos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
