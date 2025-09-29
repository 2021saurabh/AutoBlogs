import Image from "next/image";

export default function Reviews({ items }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {items.map((review, index) => (
        <div
          key={index}
          className="bg-gray-900/60 rounded-lg overflow-hidden hover:bg-gray-800/60 transition-all duration-300 cursor-pointer group border border-gray-800"
        >
          {/* Thumbnail */}
          <div className="relative w-full h-40">
            <Image
              src={review.image} // e.g. "/images/ferrari.jpg"
              alt={review.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0} // only first review eager-loads
            />
          </div>

          {/* Text */}
          <div className="p-4">
            <h4 className="font-medium text-base text-white group-hover:text-green-400 transition-colors">
              {review.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
