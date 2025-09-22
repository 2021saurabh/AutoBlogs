export default function LatestNews({ items }) {
  return (
    <div className="space-y-4">
      {items.map((article) => (
        <div key={article.id} className="bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group border border-gray-800">
          <div className="flex p-4">
            <img
              src={article.image}
              alt={article.title}
              className="w-24 h-16 object-cover rounded group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
            />
            <div className="flex-1 ml-4">
              <h3 className="font-semibold text-white mb-2 text-sm group-hover:text-green-400 transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{article.excerpt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
