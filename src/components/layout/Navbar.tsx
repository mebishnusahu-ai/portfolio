'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', delay: 0.2 }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo('.mobile-link', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.3 }
      );
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const navLinks = [
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-8 lg:px-16 py-6 ${
          isScrolled || isOpen ? 'glass border-b border-gray-100 py-4' : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 z-50">
            <Image 
              src="/logo.png" 
              alt="B&D Logo" 
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold tracking-tighter text-black">
              B&D
            </span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-black hover:text-[#0066cc] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger Icon */}
          <button 
            onClick={toggleMenu}
            className="md:hidden z-50 flex flex-col gap-1.5 w-8 h-8 justify-center items-end"
          >
            <span className={`h-0.5 bg-black transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
            <span className={`h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-6'}`} />
            <span className={`h-0.5 bg-black transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-700 ease-expo flex flex-col justify-center items-center ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-8 text-center px-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={toggleMenu}
              className="mobile-link text-5xl font-bold tracking-tighter text-black hover:text-[#0066cc]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
