import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavOffset from '@/components/NavOffset';
import { Mail, User, Briefcase, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Motormiles',
  description:
    'Get in touch with Motormiles for editorial queries, partnerships, advertising, or general inquiries about automotive content.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <NavOffset />

      <main>
        <div className="container mx-auto max-w-7xl px-6 py-16">
          {/* Hero Section */}
          <section className="mb-20">
            <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-green-950/30 via-gray-900/60 to-gray-800/40 p-8 md:p-16">
              {/* Accent line */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 via-green-400 to-emerald-500"></div>
              
              <div className="relative z-10">
                <div className="inline-block mb-4">
                  <span className="text-green-400 text-sm font-semibold tracking-widest uppercase border border-green-500/30 rounded-full px-4 py-1.5 bg-green-500/10">
                    Get In Touch
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Contact{' '}
                  <span className="block mt-2 bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 bg-clip-text text-transparent">
                    Motormiles
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl font-light">
                  If you have any questions, comments, feedback, or would like to know more about Motormiles, we'd love to hear from you.
                </p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
            </div>
          </section>

          {/* Intro Card */}
          <section className="mb-12">
            <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-8 md:p-10">
              <p className="text-lg text-gray-300 leading-relaxed">
                You can also reach out if you'd like us to <span className="text-white font-semibold">cover your automotive publication</span>, 
                <span className="text-green-400 font-semibold"> feature your story</span>, or request the <span className="text-white font-semibold">removal of existing content</span> from our platform.
              </p>
            </div>
          </section>

          {/* Contact Cards Grid */}
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            {/* General & Editorial Enquiries */}
            <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-800/40 p-8 overflow-hidden group hover:border-green-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-all"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    General & <span className="text-green-400">Editorial</span>
                  </h2>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  For news tips, editorial queries, collaborations, or corrections, please contact:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-black/40 border border-gray-800">
                    <Mail className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Email</p>
                      <a href="mailto:editorial@motormiles.com" className="text-white font-medium hover:text-green-400 transition-colors">
                        editorial@motormiles.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-black/40 border border-gray-800">
                    <User className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Contact Person</p>
                      <p className="text-white font-medium">Editor, Motormiles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advertising & Partnerships */}
            <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-800/40 p-8 overflow-hidden group hover:border-green-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-all"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-green-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Advertising & <span className="text-green-400">Partnerships</span>
                  </h2>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  If you're a brand, publication, or advertiser interested in promotions, sponsored stories, or partnerships with Motormiles:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-black/40 border border-gray-800">
                    <Mail className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Email</p>
                      <a href="mailto:partnerships@motormiles.com" className="text-white font-medium hover:text-green-400 transition-colors">
                        partnerships@motormiles.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-black/40 border border-gray-800">
                    <User className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Contact Person</p>
                      <p className="text-white font-medium">Partnerships Team, Motormiles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Response Time Banner */}
          <section className="mb-12">
            <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-950/40 via-gray-900/60 to-gray-900/40 p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    We'll Get Back to <span className="text-green-400">You Soon</span>
                  </h3>
                  <p className="text-gray-300 text-lg">
                    We aim to respond to all queries within <span className="text-white font-semibold">2–3 business days</span>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Thank You Section */}
          <section className="rounded-2xl border border-gray-800 bg-gray-900/60 p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Thank You for Your <span className="text-green-400">Interest</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Your support means everything to us at Motormiles. Whether you're sharing feedback, 
              proposing a story, or exploring partnerships — we're excited to connect with you.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}