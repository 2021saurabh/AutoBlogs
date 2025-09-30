export default function Newsletter() {
  return (
    <div className="bg-gray-900/50 h-full p-6 rounded-lg border border-gray-800 flex flex-col justify-center">
      <h3 className="text-lg font-bold mb-4 text-center uppercase tracking-wide">NEWSLETTER</h3>
      <div className="space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-green-500"
        />
        <button className="w-full bg-green-600 hover:bg-green-500 py-2 rounded font-medium text-sm transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
}
