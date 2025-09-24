export default function LatestNews({ items, large = false }) {
  if (!large) {
    // compact mode unchanged
    return (
      <div className="space-y-3">
        {items.map((article) => (
          <div
            key={article.id}
            className="rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group border bg-gray-900/50 hover:bg-gray-800/50 border-gray-800"
          >
            <div className="flex p-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-24 h-16 object-cover rounded flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex-1 ml-4">
                <h3 className="font-semibold text-white mb-2 text-sm group-hover:text-green-400 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // LARGE mode
  return (
    <div className="space-y-6">
      {items.map((article) => (
        <div
          key={article.id}
          className="relative transition-all duration-300 cursor-pointer group border 
                   bg-gray-900/60 hover:bg-gray-800/60 border-gray-800 
                   min-h-[128px] overflow-visible rounded-lg"
        >
          {/* Image anchored bottom-left, custom rounding only for image */}
          <img
            src={article.image}
            alt={article.title}
            className="absolute bottom-0 -left-2 w-40 h-28 object-cover 
                     rounded-t-md rounded-bl-md
                     transition-transform duration-300 group-hover:scale-105"
          />

          {/* Text area padded to clear the image */}
          <div className="pl-48 pr-5 py-4">
            <h3 className="font-semibold text-white text-base mb-1 leading-tight group-hover:text-green-400">
              {article.title}
            </h3>
            <p className="text-gray-400 text-sm leading-snug line-clamp-2">
              {article.excerpt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
