import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="font-serif text-xl">Samantha <span className="text-pink-500">Ellis</span></a>
        <nav className="hidden md:flex gap-6">
          <a href="#shop" className="text-sm text-gray-700 hover:text-pink-500">Shop</a>
          <a href="/gallery" className="text-sm text-gray-700 hover:text-pink-500">Gallery</a>
          <a href="/about" className="text-sm text-gray-700 hover:text-pink-500">About</a>
          <a href="/contact" className="text-sm text-gray-700 hover:text-pink-500">Contact</a>
        </nav>
      </div>
    </header>
  );
}
