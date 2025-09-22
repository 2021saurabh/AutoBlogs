export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16 py-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-center space-x-8">
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">ABOUT</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">CONTACT</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">ADVERTISE</a>
          </div>
          <div className="flex items-center space-x-4">
            <h4 className="text-sm font-semibold">FOLLOW US</h4>
            <div className="flex space-x-3">
              <div className="w-7 h-7 bg-gray-700 rounded-full hover:bg-green-500 transition-colors cursor-pointer"></div>
              <div className="w-7 h-7 bg-gray-700 rounded-full hover:bg-green-500 transition-colors cursor-pointer"></div>
              <div className="w-7 h-7 bg-gray-700 rounded-full hover:bg-green-500 transition-colors cursor-pointer"></div>
              <div className="w-7 h-7 bg-gray-700 rounded-full hover:bg-green-500 transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
