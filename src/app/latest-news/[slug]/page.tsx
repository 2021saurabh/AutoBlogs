// app/latest-news/[slug]/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavOffset from '@/components/NavOffset';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Types for better type safety
interface NewsArticle {
  title: string;
  image: string;
  date: string;
  author: string;
  content: string[];
  category?: string;
}

// Centralized article data
const ARTICLES: Record<string, NewsArticle> = {
  'mahindra-vision-s': {
    title: "Mahindra's Vision S revealed",
    image: '/images/vision-s.jpeg',
    date: 'October 5, 2025',
    author: 'Motormiles Editorial Team',
    category: 'Concept Cars',
    content: [
      "Mahindra has officially unveiled its Vision S concept, showcasing a bold new design direction that will influence its future SUV lineup. The sleek lines, prominent grille, and futuristic lighting elements indicate a significant shift towards a more premium aesthetic.",
      "The Vision S is expected to debut with Mahindra's next-generation electric platform, combining performance with sustainability. Industry insiders suggest that the production model could arrive by late 2026.",
      "Mahindra has also hinted at several new technologies being developed in-house, including ADAS Level 3 capabilities and an AI-powered infotainment system."
    ]
  },
  'tata-altroz-facelift': {
    title: "TATA Altroz facelift revealed",
    image: '/images/altroz.jpeg',
    date: 'October 10, 2025',
    author: 'Motormiles Staff',
    category: 'Launches',
    content: [
      "TATA Motors has unveiled the facelifted Altroz with updated styling and several new features. The exterior now sports a refreshed front bumper, sleek LED DRLs, and a new grille pattern.",
      "Under the hood, the engine options remain largely the same, but NVH levels have been significantly improved. The interior gets a larger infotainment screen, wireless charging, and ventilated seats on top trims.",
      "The facelift aims to keep the Altroz competitive against newer rivals in the premium hatchback segment."
    ]
  }
};

const getNewsArticle = (slug: string): NewsArticle | null => {
  return ARTICLES[slug] || null;
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getNewsArticle(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found — Motormiles',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${article.title} — Motormiles`,
    description: article.content[0].slice(0, 160),
  };
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const article = getNewsArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <NavOffset />

      <main className="flex-1">
        <article className="container mx-auto max-w-4xl px-6 py-8 md:py-12">
          {/* Article Header */}
          <header className="mb-8">
            {article.category && (
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-black bg-white rounded-full uppercase tracking-wide">
                {article.category}
              </span>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <time dateTime={article.date}>{article.date}</time>
              <span>•</span>
              <span>By {article.author}</span>
            </div>
          </header>

          {/* Article Image */}
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden bg-gray-900">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Article Footer - Optional sharing/tags section */}
          <footer className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-gray-500">
                Published on {article.date}
              </p>
              {/* Add social sharing buttons here if needed */}
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
}