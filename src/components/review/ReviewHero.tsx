// ============================================
// components/review/ReviewHero.tsx
// ============================================
'use client';

import { Star, Calendar, Clock, User, Tag } from 'lucide-react';
import Image from 'next/image';

interface ReviewHeroProps {
  title: string;
  subtitle: string;
  heroImage: string;
  rating: number;
  date: string;
  author: string;
  readTime: string;
  category: string;
}

export default function ReviewHero({
  title,
  subtitle,
  heroImage,
  rating,
  date,
  author,
  readTime,
  category,
}: ReviewHeroProps) {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto max-w-7xl px-6 flex flex-col justify-end pb-12 md:pb-16">
        <div className="max-w-4xl">
          {/* Category Badge */}
          <div className="inline-block mb-4">
            <span className="text-green-400 text-xs font-semibold tracking-widest uppercase border border-green-500/30 rounded-full px-4 py-1.5 bg-green-500/10 backdrop-blur-sm">
              {category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
            {subtitle}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-green-400 fill-green-400" />
              <span className="font-semibold text-white">{rating}/10</span>
            </div>
            <div className="text-gray-500">•</div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>{date}</span>
            </div>
            <div className="text-gray-500">•</div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gray-400" />
              <span>{author}</span>
            </div>
            <div className="text-gray-500">•</div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

