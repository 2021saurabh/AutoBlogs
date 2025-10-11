import { Play } from "lucide-react";

export default function Videos({ items }) {
  return (
    <div className="space-y-4 h-full flex flex-col justify-between">
      {items.map((video, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition-colors cursor-pointer group p-4"
        >
          {/* Thumbnail */}
          <div className="relative w-28 h-20 flex-shrink-0 rounded-md overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-10 h-10 rounded-full bg-black/70 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
          </div>

          {/* Title & Duration */}
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors leading-relaxed mb-1">
              {video.title}
            </h4>
            <span className="text-xs text-gray-500">12 ▸ 80</span>
          </div>
        </div>
      ))}
    </div>
  );
}