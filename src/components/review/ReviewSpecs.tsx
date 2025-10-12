// ============================================
// components/review/ReviewSpecs.tsx
// ============================================
'use client';

interface ReviewSpecsProps {
  specs: Record<string, string>;
}

export default function ReviewSpecs({ specs }: ReviewSpecsProps) {
  return (
    <div className="sticky top-24">
      <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
        <h3 className="text-xl font-bold mb-6 text-green-400">Specifications</h3>
        <div className="space-y-4">
          {Object.entries(specs).map(([key, value]) => (
            <div key={key} className="border-b border-gray-800 pb-3 last:border-0">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
              <p className="text-white font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Share Section */}
      <div className="mt-6 rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
        <h4 className="text-sm font-bold mb-4 text-gray-400 uppercase tracking-wide">Share Review</h4>
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm transition-colors">
            Twitter
          </button>
          <button className="flex-1 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm transition-colors">
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

