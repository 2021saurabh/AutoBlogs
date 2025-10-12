// ============================================
// components/review/RelatedReviews.tsx
// ============================================
'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface RelatedReview {
  title: string;
  image: string;
  slug: string;
}

interface RelatedReviewsProps {
  reviews: RelatedReview[];
}

export default function RelatedReviews({ reviews }: RelatedReviewsProps) {
  return (
    <section className="border-t border-gray-800 pt-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Related Reviews</h2>
        <a 
          href="/reviews" 
          className="text-green-500 hover:text-green-400 flex items-center text-sm font-medium"
        >
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <a
            key={index}
            href={`/reviews/${review.slug}`}
            className="group rounded-xl overflow-hidden border border-gray-800 bg-gray-900/40 hover:border-green-500/50 transition-all"
          >
            <div className="relative h-48">
              <Image
                src={review.image}
                alt={review.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">
                {review.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}