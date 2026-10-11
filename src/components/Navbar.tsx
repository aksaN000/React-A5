import logoText from "../assets/logo-text.png";
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button aria-label="Open menu" className="lg:hidden text-2xl cursor-pointer">☰</button>
        <div>
          <img src={logoText} alt="Dev Stack Logo" className="h-8" />
        </div>
        <div className="hidden lg:flex gap-8 text-sm text-gray-600">
          <a href="#" className="text-pink-600 font-medium">Home</a>
          <a href="#" className="hover:text-pink-600">Technologies</a>
          <a href="#" className="hover:text-pink-600">Projects</a>
          <a href="#" className="hover:text-pink-600">About</a>
          <a href="#" className="hover:text-pink-600">Contact</a>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <button className="text-gray-700 hover:text-gray-900 cursor-pointer">Sign In</button>
          <button className="bg-brand text-white px-5 py-2 rounded-full cursor-pointer hover:opacity-90">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
