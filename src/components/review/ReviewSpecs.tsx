// components/review/ReviewSpecs.tsx
'use client';

interface ReviewSpecsProps {
  specs: Record<string, string>;
}

export default function ReviewSpecs({ specs }: ReviewSpecsProps) {
  return (
    <div className="sticky top-24 space-y-6">
      {/* Advertisement Space */}
      <div className="rounded-lg border border-gray-800 bg-gray-800/30 overflow-hidden">
        <div className="h-64 flex items-center justify-center text-gray-600 text-sm">
          Advertisement Space
        </div>
      </div>

      {/* Specs Card - Optional: You can remove this section if you only want the ad */}
      <div className="rounded-lg border border-gray-800 bg-gray-900/60 p-6">
        <h3 className="text-xs font-bold mb-4 text-gray-400 uppercase tracking-wide">
          Quick Specs
        </h3>
        <div className="space-y-3">
          {/* Show only key specs */}
          {specs.power && (
            <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-2">
              <span className="text-gray-400">Power</span>
              <span className="text-white font-semibold">{specs.power}</span>
            </div>
          )}
          {specs.acceleration && (
            <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-2">
              <span className="text-gray-400">0-100 km/h</span>
              <span className="text-white font-semibold">{specs.acceleration}</span>
            </div>
          )}
          {specs.price && (
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Price</span>
              <span className="text-green-400 font-semibold">{specs.price}</span>
            </div>
          )}
        </div>
      </div>

      {/* Share Section */}
      <div className="rounded-lg border border-gray-800 bg-gray-900/60 p-6">
        <h4 className="text-xs font-bold mb-4 text-gray-400 uppercase tracking-wide">
          Share Review
        </h4>
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