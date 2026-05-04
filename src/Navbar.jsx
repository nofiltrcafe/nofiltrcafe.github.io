export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">
          Brew Haven
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-amber-400">Home</a>
          </li>
          <li>
            <a href="#menu" className="hover:text-amber-400">Menu</a>
          </li>
          <li>
            <a href="#about" className="hover:text-amber-400">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-amber-400">Contact</a>
          </li>
        </ul>

        {/* Button */}
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full">
          Order Now
        </button>

      </div>
    </nav>
  );
}