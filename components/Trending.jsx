export default function Trending({ items, large = false }) {
  return (
    <div className={large ? "space-y-4" : "space-y-3"}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center rounded-lg transition-colors cursor-pointer group border
            ${large ? "bg-gray-900/60 p-4 hover:bg-gray-800/60 border-gray-800 min-h-[96px]" : "bg-gray-900/50 p-3 hover:bg-gray-800/50 border-gray-800"}
          `}
        >
          <img
            src={item.image}
            alt={item.title}
            className={`object-cover rounded flex-shrink-0 transition-transform duration-300 group-hover:scale-105
              ${large ? "w-20 h-16" : "w-12 h-9"}
            `}
          />
          <span
            className={`ml-3 group-hover:text-green-400 transition-colors leading-tight
              ${large ? "text-sm text-gray-300 line-clamp-2" : "text-xs text-gray-300"}
            `}
          >
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}
