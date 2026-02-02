'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#003399] text-white py-2 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
           <Link href="/" className="flex items-center">
             <img src="/Logo.webp" alt="DLC Recharge Logo" width="150" height="56" className="h-12 md:h-14 w-auto object-contain" />
           </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-[15px] font-bold">
          <Link href="/" className="hover:text-yellow-400 transition-colors duration-200">Home</Link>
          <Link href="/games" className="hover:text-yellow-400 transition-colors duration-200">Games</Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors duration-200">Mobile Top-Up</Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors duration-200">Gift Cards</Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors duration-200">How It Works</Link>
          <Link href="/profile" className="text-white font-bold hover:text-yellow-400 transition-colors duration-200">Profile</Link>
          
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSelector />
          <Link href="/login" className="text-white font-bold hover:text-yellow-400 transition-colors duration-200">Login</Link>
          <Link href="/register"className="bg-yellow-400 text-blue-900 px-6 py-2 rounded font-bold hover:bg-yellow-300 transition-transform transform hover:scale-105 shadow-sm">
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#002a80] border-t border-blue-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 font-semibold">
            <Link href="/" className="block hover:text-yellow-400 transition">Home</Link>
            <Link href="/games" className="block hover:text-yellow-400 transition">Games</Link>
            <Link href="#" className="block hover:text-yellow-400 transition">Mobile Top-Up</Link>
            <Link href="#" className="block hover:text-yellow-400 transition">Gift Cards</Link>
            <Link href="#" className="block hover:text-yellow-400 transition">How It Works</Link>
            <div className="pt-4 border-t border-blue-800 flex flex-col space-y-3">
               <div className="flex justify-start">
                 <LanguageSelector align="left" />
               </div>
               <Link href="/login" className="text-left hover:text-yellow-400 transition">Login</Link>
               <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded font-bold text-center hover:bg-yellow-300 transition">Register</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
