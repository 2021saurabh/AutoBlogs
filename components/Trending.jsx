export default function Trending({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-3 bg-gray-900/50 p-3 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer group border border-gray-800">
          <img
            src={item.image}
            alt={item.title}
            className="w-12 h-9 object-cover rounded group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
          />
          <span className="text-xs text-gray-300 group-hover:text-green-400 transition-colors leading-tight">{item.title}</span>
        </div>
      ))}
    </div>
  );
}
