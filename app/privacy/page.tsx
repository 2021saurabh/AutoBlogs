import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavOffset from '@/components/NavOffset';
import { Shield, Eye, Cookie, Mail, Users, Lock, Link as LinkIcon, FileText, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - Motormiles',
  description:
    'Learn how Motormiles collects, uses, and protects your personal information when you visit our website.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <NavOffset />

      <main>
        <div className="container mx-auto max-w-5xl px-6 py-16">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-green-950/30 via-gray-900/60 to-gray-800/40 p-8 md:p-16">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 via-green-400 to-emerald-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <span className="text-green-400 text-sm font-semibold tracking-widest uppercase block mb-1">
                      Legal
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                      Privacy Policy
                    </h1>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated: January 2025</span>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                  This Privacy Policy explains how we collect, use, and protect your personal information when you visit 
                  <span className="text-white font-semibold"> www.motormiles.com</span> or use any of our services.
                </p>
              </div>
              
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
            </div>
          </section>

          {/* Agreement Notice */}
          <div className="mb-12 p-6 rounded-xl border border-green-500/30 bg-green-950/20">
            <p className="text-gray-300 leading-relaxed">
              <span className="text-green-400 font-semibold">By using this Website</span>, you agree to the terms outlined here. 
              If you do not agree, please discontinue use immediately.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            {/* 1. Information We Collect */}
            <section className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Information We Collect</h2>
                  <p className="text-gray-400">We collect two types of information:</p>
                </div>
              </div>

              <div className="space-y-6 ml-14">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">a) Information You Provide Voluntarily</h3>
                  <p className="text-gray-300 mb-4">When you contact us, subscribe to our newsletter, enter a contest, or fill out forms, we may collect:</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    <span className="text-gray-400">• Name</span>
                    <span className="text-gray-400">• Email address</span>
                    <span className="text-gray-400">• Phone number</span>
                    <span className="text-gray-400">• Demographic information</span>
                  </div>
                  <p className="text-gray-300 mb-2 font-semibold">We use this to:</p>
                  <p className="text-gray-400">Respond to your messages, send newsletters (with consent), improve our services, and manage events or promotions.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">b) Information Collected Automatically</h3>
                  <p className="text-gray-300 mb-4">When you browse our site, we may collect device type, IP address, browser info, pages viewed, and location (if allowed).</p>
                  <p className="text-gray-400">This helps us analyze site performance and understand user trends.</p>
                </div>
              </div>
            </section>

            {/* 2. Cookies */}
            <section className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Cookies & Tracking</h2>
                </div>
              </div>

              <div className="ml-14 space-y-4">
                <p className="text-gray-300">We use cookies to remember preferences, understand traffic patterns, and improve content relevance.</p>
                <p className="text-gray-400">You can disable cookies in your browser, but some features may not work properly. Third-party tools like Google Analytics may also use cookies.</p>
              </div>
            </section>

            {/* 3. Marketing */}
            <section className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Marketing & Communication</h2>
                </div>
              </div>

              <div className="ml-14">
                <p className="text-gray-300 mb-3">With your consent, we may send updates, promotions, and news about Motormiles or our partners.</p>
                <p className="text-gray-400">You can unsubscribe anytime via the link in our emails or by writing to <a href="mailto:contact@motormiles.com" className="text-green-400 hover:text-green-300 underline">contact@motormiles.com</a>.</p>
              </div>
            </section>

            {/* 4. Children's Privacy */}
            <section className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Children's Privacy</h2>
                </div>
              </div>

              <div className="ml-14">
                <p className="text-gray-300">Our website is not intended for children under 16. We do not knowingly collect personal data from minors. If you believe a child has provided us their information, please contact us and we will delete it.</p>
              </div>
            </section>

            {/* 5. Security */}
            <section className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">How We Protect Your Information</h2>
                </div>
              </div>

              <div className="ml-14">
                <p className="text-gray-300 mb-3">We take appropriate technical and organizational measures including restricted access, regular monitoring, and secure encrypted storage.</p>
                <p className="text-gray-400">However, no online system is completely foolproof, and we cannot guarantee absolute security.</p>
              </div>
            </section>

            {/* 6. Sharing */}
            <section className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Sharing of Information</h2>
                </div>
              </div>

              <div className="ml-14">
                <p className="text-gray-300 mb-3"><span className="font-semibold text-white">We do not sell or trade your personal data.</span></p>
                <p className="text-gray-400">We may share information with trusted service providers who help operate the website (hosting, analytics, email). Your data may be processed outside India when necessary, with adequate protection.</p>
              </div>
            </section>

            {/* 7. Data Retention */}
            <section className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Data Retention & Control</h2>
                </div>
              </div>

              <div className="ml-14">
                <p className="text-gray-300 mb-3">We retain your information only as long as necessary for the purposes mentioned or as required by law.</p>
                <p className="text-gray-400">You can request access, correction, or deletion of your data anytime by writing to <a href="mailto:contact@motormiles.com" className="text-green-400 hover:text-green-300 underline">contact@motormiles.com</a>.</p>
              </div>
            </section>

            {/* 8. Third-Party Links */}
            <section className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <LinkIcon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Links to Other Sites</h2>
                </div>
              </div>

              <div className="ml-14">
                <p className="text-gray-300">Our website may include links to third-party websites. We are not responsible for their privacy practices or content. Please read their privacy policies before sharing any personal information.</p>
              </div>
            </section>

            {/* 9. Updates */}
            <section className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-950/40 via-gray-900/60 to-gray-900/40 p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Updates to This Policy</h2>
                  <p className="text-gray-300">We may update this Privacy Policy periodically. The revised version will always be posted on this page with a new "last updated" date.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 rounded-2xl border border-gray-800 bg-gray-900/40">
            <h3 className="text-2xl font-bold mb-3">Questions About This Policy?</h3>
            <p className="text-gray-400 mb-6">If you have any concerns or need clarification, please reach out to us.</p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}