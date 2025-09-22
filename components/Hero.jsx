export default function Hero() {
  return (
    <div className="relative rounded-xl overflow-hidden group cursor-pointer h-full">
      <img
        src="/api/placeholder/800/450"
        alt="Thrilling showdown on Monza"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-8 left-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
          Thrilling showdown<br />on Monza
        </h1>
      </div>
    </div>
  );
}
