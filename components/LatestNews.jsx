export default function LatestNews({ items, large = false }) {
  return (
    <div className={large ? "space-y-4" : "space-y-3"}>
      {items.map((article) => (
        <div
          key={article.id}
          className={`rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group border
            ${
              large
                ? "bg-gray-900/60 hover:bg-gray-800/60 border-gray-800 min-h-[140px]"
                : "bg-gray-900/50 hover:bg-gray-800/50 border-gray-800"
            }
          `}
        >
          <div className={large ? "flex p-5 h-full items-center" : "flex p-4"}>
            <img
              src={article.image}
              alt={article.title}
              className={`
                object-cover rounded flex-shrink-0 transition-transform duration-300 group-hover:scale-105
                ${large ? "w-36 h-24" : "w-24 h-16"}
              `}
            />
            <div className={large ? "flex-1 ml-5" : "flex-1 ml-4"}>
              <h3
                className={`
                  font-semibold text-white group-hover:text-green-400 transition-colors leading-tight
                  ${large ? "text-base mb-1" : "text-sm mb-2"}
                `}
              >
                {article.title}
              </h3>
              <p
                className={
                  large
                    ? "text-gray-400 text-sm leading-snug line-clamp-2"
                    : "text-gray-400 text-xs leading-relaxed"
                }
              >
                {article.excerpt}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
