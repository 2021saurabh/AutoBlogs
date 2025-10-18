import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavOffset from '@/components/NavOffset';
import Link from 'next/link';

export const metadata = {
  title: 'About Motormiles',
  description:
    'Motormiles decodes the stories behind car launches, market trends, engineering and the future of mobility.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <NavOffset />

      <main>
        <div className="container mx-auto max-w-7xl px-6 py-16">
          {/* Hero Section with Standout Heading */}
          <section className="mb-20">
            <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-green-950/30 via-gray-900/60 to-gray-800/40 p-8 md:p-16">
              {/* Accent line */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 via-green-400 to-emerald-500"></div>

              <div className="relative z-10">
                <div className="inline-block mb-4">
                  <span className="text-green-400 text-sm font-semibold tracking-widest uppercase border border-green-500/30 rounded-full px-4 py-1.5 bg-green-500/10">
                    About Us
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Welcome to{' '}
                  <span className="block mt-2 bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 bg-clip-text text-transparent">
                    Motormiles
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl font-light">
                  We go beyond just reporting car news — we decode the stories
                  that move the industry. Sharp insights into launches, trends, innovations,
                  and the engineering that shapes tomorrow's vehicles.
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="mb-16 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-2 h-12 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></span>
                  <span>Our Mission</span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We bring together automotive enthusiasts, experts, and industry insiders,
                  creating a space where knowledge meets passion.
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed">
                Whether it's performance reviews, market analysis, or brand strategy breakdowns,
                Motormiles helps readers understand not just <span className="text-white font-semibold">what's happening</span> in
                the car world, but <span className="text-green-400 font-semibold">why it matters</span>.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-800/40 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Editorial Focus</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <span className="text-green-400 font-bold">→</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    The future of <span className="text-white font-semibold">car design and technology</span>
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <span className="text-green-400 font-bold">→</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Industry insights revealing how brands adapt to <span className="text-white font-semibold">new-age mobility</span>
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <span className="text-green-400 font-bold">→</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    The <span className="text-white font-semibold">driving experience</span> — because the feel of a car matters as much as its features
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Vision Statement */}
          <section className="mb-16">
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900/60 p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-12 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></span>
                  <span>The Road Ahead</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                  As India's automotive landscape evolves, Motormiles aims to be the voice that captures
                  this transformation — <span className="text-green-400 font-semibold">one story</span>, <span className="text-green-400 font-semibold">one innovation</span>,
                  and <span className="text-green-400 font-semibold">one drive at a time</span>.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-950/40 via-gray-900/60 to-gray-900/40 p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay in the <span className="text-green-400">Loop</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
              Explore the latest stories from our newsroom, deep dives from our reviews, and analysis
              on what's next for mobility.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#newsletter"
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-colors"
              >
                Newsroom
              </Link>
              <a
                href="/reviews"
                className="px-8 py-3 border border-green-500 hover:bg-green-500/10 text-green-400 font-semibold rounded-lg transition-colors"
              >
                Reviews
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}