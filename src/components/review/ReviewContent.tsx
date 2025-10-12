// ============================================
// components/review/ReviewContent.tsx
// ============================================
'use client';

import Image from 'next/image';

interface ContentBlock {
  type: 'text' | 'heading' | 'image';
  text?: string;
  src?: string;
  caption?: string;
}

interface ReviewContentProps {
  content: ContentBlock[];
}

export default function ReviewContent({ content }: ReviewContentProps) {
  return (
    <article className="prose prose-invert prose-lg max-w-none">
      {content.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2 key={index} className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-white">
                {block.text}
              </h2>
            );
          case 'text':
            return (
              <p key={index} className="text-gray-300 leading-relaxed mb-6">
                {block.text}
              </p>
            );
          case 'image':
            return (
              <figure key={index} className="my-8 rounded-xl overflow-hidden">
                <div className="relative h-[400px]">
                  <Image
                    src={block.src!}
                    alt={block.caption || ''}
                    fill
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-sm text-gray-500 mt-3 text-center">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </article>
  );
}

