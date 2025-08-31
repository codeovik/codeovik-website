"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`px-8 py-4 flex justify-between items-center w-full top-0 left-0 fixed z-50 transition-all duration-500 ease-out ${
            isScrolled 
                ? 'bg-black/50 backdrop-blur-lg shadow-2xl' 
                : 'bg-transparent'
        }`}>
            {/* Logo */}
            <Link href='/' className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-main/20 to-sec/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image 
                    src="https://raw.githubusercontent.com/codeovik/brand/refs/heads/main/logo-transparent.png" 
                    alt="codeovik logo" 
                    className='h-12 relative z-10 transform group-hover:scale-105 transition-transform duration-300' 
                />
            </Link>

            {/* Navigation Links */}
            <ul className='flex gap-8 items-center'>
                <li>
                    <Link 
                        href="/" 
                        className={`relative px-4 py-2 font-semibold text-lg transition-all duration-300 group ${
                            pathname === '/' 
                                ? 'text-main' 
                                : 'text-white hover:text-main'
                        }`}
                    >
                        <span className="relative z-10">Home</span>
                        {/* Active indicator */}
                        <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-main to-sec transform origin-left transition-transform duration-300 ${
                            pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}></div>
                        {/* Hover background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-main/10 to-sec/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </Link>
                </li>
                <li>
                    <Link 
                        href="/contact" 
                        className={`relative px-4 py-2 font-semibold text-lg transition-all duration-300 group ${
                            pathname === '/contact' 
                                ? 'text-main' 
                                : 'text-white hover:text-main'
                        }`}
                    >
                        <span className="relative z-10">Contact</span>
                        {/* Active indicator */}
                        <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-main to-sec transform origin-left transition-transform duration-300 ${
                            pathname === '/contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}></div>
                        {/* Hover background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-main/10 to-sec/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </Link>
                </li>
                <li>
                    <Link 
                        href="/admin" 
                        className={`relative px-4 py-2 font-semibold text-lg transition-all duration-300 group ${
                            pathname === '/admin' 
                                ? 'text-main' 
                                : 'text-white hover:text-main'
                        }`}
                    >
                        <span className="relative z-10">Admin</span>
                        {/* Active indicator */}
                        <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-main to-sec transform origin-left transition-transform duration-300 ${
                            pathname === '/admin' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}></div>
                        {/* Hover background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-main/10 to-sec/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </Link>
                </li>
            </ul>

            {/* Mobile menu button (for future mobile responsiveness) */}
            {/* <div className="md:hidden">
                <button className="text-white hover:text-main transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div> */}
        </nav>
    )
}