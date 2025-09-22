import { Play } from 'lucide-react';

export default function Videos({ items }) {
  return (
    <div className="space-y-4">
      {items.map((video, index) => (
        <div key={index} className="bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-800/50 transition-colors cursor-pointer group border border-gray-800">
          <div className="relative">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-6 h-6 text-white bg-black/60 rounded-full p-1" />
            </div>
          </div>
          <div className="p-3">
            <h4 className="font-medium text-xs text-gray-300 group-hover:text-green-400 transition-colors leading-tight">
              {video.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
