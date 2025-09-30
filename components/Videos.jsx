import { Play } from "lucide-react";

export default function Videos({ items }) {
  return (
    <div className="space-y-3">
      {items.map((video, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition-colors cursor-pointer group"
        >
          {/* Thumbnail */}
          <div className="relative w-20 h-14 flex-shrink-0">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-4 h-4 text-white bg-black/60 rounded-full p-1" />
            </div>
          </div>

          {/* Title */}
          <div className="flex-1 pr-3">
            <h4 className="text-sm font-medium text-gray-300 group-hover:text-green-400 transition-colors leading-snug">
              {video.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
