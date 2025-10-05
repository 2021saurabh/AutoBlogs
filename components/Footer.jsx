export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16 py-8">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Desktop: same as before (row + space-x-8). Mobile: stack + center */}
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-0 md:space-x-8">
          
          {/* Links — desktop: inline with space-x-6; mobile: stacked */}
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-0 md:space-x-6 text-sm">
            <a href="/about" className="text-gray-400 hover:text-white transition-colors">ABOUT</a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors">CONTACT</a>
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">PRIVACY</a>
            <a href="/contact#advertising" className="text-gray-400 hover:text-white transition-colors">ADVERTISE</a>
          </div>

          {/* Follow Us — desktop: inline with space-x-4; mobile: stacked */}
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-0 md:space-x-4">
            <h4 className="text-sm font-semibold">FOLLOW US</h4>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-gray-700 rounded-full hover:bg-green-500 transition-colors" />
              <div className="w-7 h-7 bg-gray-700 rounded-full hover:bg-green-500 transition-colors" />
              <div className="w-7 h-7 bg-gray-700 rounded-full hover:bg-green-500 transition-colors" />
              <div className="w-7 h-7 bg-gray-700 rounded-full hover:bg-green-500 transition-colors" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}