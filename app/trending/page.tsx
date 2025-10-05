import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavOffset from '@/components/NavOffset';

export const metadata = {
  title: 'Trending — Motormiles',
  description: 'What’s hot right now.',
};

export default function TrendingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <NavOffset />

      <main>
        <div className="container mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            <span className="text-green-500">Trending</span>
          </h1>

          {/* Placeholder – fill with list later */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 text-gray-300">
            Content coming soon…
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
