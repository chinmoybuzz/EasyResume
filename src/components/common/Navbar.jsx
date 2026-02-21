import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className={`shadow-md transition-colors duration-300 ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <div className="flex justify-between items-center px-6 h-16">
        {/* Logo */}
        <div className="text-xl font-bold">MyApp</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-500 transition">
            Products
          </Link>
          <Link to="/Resume" className="hover:text-blue-500 transition">
            Resume
          </Link>
          <Link to="/admin" className="hover:text-blue-500 transition">
            Admin
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Login</button>

          <button onClick={toggleTheme} className={`px-4 py-2 rounded-md transition ${isDark ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"}`}>
            {isDark ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden flex flex-col gap-4 px-6 pb-4 transition ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>
            Products
          </Link>
          <Link to="/Resume" onClick={() => setIsMenuOpen(false)}>
            Resume
          </Link>
          <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
            Admin
          </Link>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>

          <button onClick={toggleTheme} className={`px-4 py-2 rounded-md ${isDark ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"}`}>
            Toggle Theme
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
