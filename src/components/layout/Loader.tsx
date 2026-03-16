'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Loader() {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Entrance Animation
    const tl = gsap.timeline();
    
    tl.fromTo(
      logoRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'expo.out' }
    )
    .fromTo(
      textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' },
      '-=0.5'
    );

    // Simulate loading or wait for window load
    const handleLoad = () => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        display: 'none',
        duration: 1,
        delay: 0.5,
        ease: 'power3.inOut',
        onComplete: () => setIsLoading(false)
      });
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback timeout in case load event takes too long
      const timeout = setTimeout(handleLoad, 2500);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/90 backdrop-blur-md"
    >
      <div className="flex flex-col items-center">
        <div ref={logoRef} className="relative w-24 h-24 mb-6">
          <Image 
            src="/logo.png" 
            alt="B&D Logo" 
            fill
            className="object-contain"
          />
        </div>
        <div ref={textRef} className="flex flex-col items-center gap-2">
          <span className="text-2xl font-bold tracking-widest text-black">BUILDING THE FUTURE</span>
          <div className="w-48 h-[1px] bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-black animate-loading-bar origin-left" />
          </div>
        </div>
      </div>
    </div>
  );
}
