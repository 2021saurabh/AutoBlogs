// app/reviews/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavOffset from '@/components/NavOffset';
import Reviews from '@/components/Reviews';

export const metadata = {
  title: 'Reviews — Motormiles',
  description: 'Performance reviews and deep dives.',
};

type ReviewsProps = {
  items: any;
  large?: boolean;
};

export default function ReviewsPage() {
  // Replace with real data (API/CMS) later
  const items = [
    { title: 'Lotus Emira R', image: '/images/lotus-emira-r.jpeg' },
    { title: 'Ford Focus RWB', image: '/images/ford-focus-rwb.jpeg' },
    { title: 'Ferrari 12 Cilindre', image: '/images/ferrari-12-cilindre.jpeg' },
    { title: 'Cadillac Celestiq', image: '/images/cadillac-celestiq.jpeg' },

    // extra entries for a longer list; update/replace as needed
    { title: 'BMW M4 CS — Track Pack', image: '/images/bmw-m4.jpeg' },
    { title: 'BMW S8 Concept — First Drive', image: '/images/bmw-s8.jpeg' },
    { title: 'Mahindra Vision S — Prototype Review', image: '/images/vision-s.jpeg' },
    { title: 'Altroz Facelift — Road Test', image: '/images/altroz.jpeg' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <NavOffset />

      <main className="flex-1">
        <div className="container mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            <span className="text-green-500">Reviews</span>
          </h1>

          {/* Full list using your Reviews component (same large layout as homepage) */}
          <div className="h-auto">
            <Reviews items={items} large />
          </div>

          <div className="h-10" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
