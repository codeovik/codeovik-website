import React from 'react';
import Link from 'next/link';
import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image 
              src="https://raw.githubusercontent.com/codeovik/brand/refs/heads/main/logo-transparent.png" 
              alt="CodeOvik Logo" 
              className="h-12 w-auto mb-4 hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-400 text-sm text-center md:text-left">
              Building digital solutions with passion
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center">
            <nav className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-main hover:to-sec hover:bg-clip-text transition-all duration-300 font-medium"
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-main hover:to-sec hover:bg-clip-text transition-all duration-300 font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="bg-gradient-to-r from-main to-sec bg-clip-text text-transparent font-semibold">CodeOvik</span>
            </p>
            <p className="text-gray-500 text-xs mt-1">
              All rights reserved
            </p>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
              </svg>
              Made with love for amazing projects
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-gradient-to-r from-main to-sec rounded-full animate-pulse"></div>
              <span className="text-gray-500 text-xs">Ready to collaborate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}