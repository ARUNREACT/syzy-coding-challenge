'use client';
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex md:block items-center justify-center gap-5 md:justify-between">

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-blue-400 focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>

          <div className="text-xl text-black text-center font-serif md:mb-4">
            <span className="border py-1 px-4 font-serif text-2xl">Syzy Technologies</span>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center space-x-6 text-gray-700 font-medium text-sm font-[system-ui]">
            <li><a href="#" className="hover:text-blue-600">HOME</a></li>
            <li><a href="#" className="hover:text-blue-600">SERVICES</a></li>
            <li><a href="#" className="hover:text-blue-600">CONTACT</a></li>
            <li><a href="#" className="hover:text-blue-600">CAREERS</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-2 text-gray-700 font-medium pb-4 text-center">
            <li><a href="#" className="hover:text-blue-600">HOME</a></li>
            <li><a href="#" className="hover:text-blue-600">SERVICES</a></li>
            <li><a href="#" className="hover:text-blue-600">CONTACT</a></li>
            <li><a href="#" className="hover:text-blue-600">CAREERS</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
