import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavOffset from '@/components/NavOffset';

export const metadata = {
  title: 'Latest News — Motormiles',
  description: 'All the latest news from Motormiles.',
};

export default function LatestNewsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <NavOffset />

      <main>
        <div className="container mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            <span className="text-green-500">Latest</span> News
          </h1>

          {/* Placeholder – fill with your list later */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 text-gray-300">
            Content coming soon…
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
