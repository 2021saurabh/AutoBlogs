// app/latest-news/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavOffset from '@/components/NavOffset';
import LatestNews from '@/components/LatestNews';

export const metadata = {
  title: 'Latest News — Motormiles',
  description: 'All the latest news from Motormiles.',
};

export default function LatestNewsPage() {
  // Replace with real data later (fetch from API/CMS)
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
      excerpt: "Maruti’s market share remains strong with compact SUV momentum.",
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
        <div className="container mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            <span className="text-green-500">Latest</span> News
          </h1>

          {/* Full list using your component (large layout) */}
          <LatestNews items={items} large />

          {/* Optional: spacing at bottom for visual comfort */}
          <div className="h-10" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
