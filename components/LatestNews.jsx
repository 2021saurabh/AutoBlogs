import Image from "next/image";

export default function LatestNews(props) {
  const { items, large = false } = props;
  if (!large) {
    // COMPACT MODE (unchanged layout, just swapped to <Image/>)
    return (
      <div className="space-y-3">
        {items.map((article, i) => (
          <div
            key={article.id ?? i}
            className="rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group border bg-gray-900/50 hover:bg-gray-800/50 border-gray-800"
          >
            <div className="flex p-4">
              {/* Thumb */}
              <div className="relative w-24 h-16 flex-shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded transition-transform duration-300 group-hover:scale-105"
                  sizes="96px"
                />
              </div>

              {/* Text */}
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

  // LARGE MODE (left-anchored image kept; uses <Image fill/> inside a positioned box)
  return (
    <div className="space-y-6">
      {items.map((article, i) => (
        <div
          key={article.id ?? i}
          className="relative flex items-center transition-all duration-300 cursor-pointer group border 
                     bg-gray-900/60 hover:bg-gray-800/60 border-gray-800 
                     min-h-[128px] overflow-visible rounded-lg"
        >
          {/* Image anchored bottom-left */}
          <div className="absolute bottom-0 -left-2 w-40 h-28">
            <div className="relative w-full h-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded-t-md rounded-bl-md transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 160px, 200px"
                priority={i === 0} // only the first one eager-loads
              />
            </div>
          </div>

          {/* Text area — flex keeps it centered with the image */}
          <div className="pl-48 pr-5 flex flex-col justify-center">
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
