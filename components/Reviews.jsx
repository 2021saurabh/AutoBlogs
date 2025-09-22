export default function Reviews({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((review, index) => (
        <div key={index} className="bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group border border-gray-800">
          <img
            src={review.image}
            alt={review.title}
            className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-3">
            <h4 className="font-medium text-sm text-white group-hover:text-green-400 transition-colors">{review.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
