'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const rolesRef = useRef(null);
  const lineArtRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Entrance Animation
      const tl = gsap.timeline();
      tl.fromTo('.reveal-span', 
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.1, delay: 0.5 }
      );

      // 2. Line Art Parallax & Entrance
      gsap.fromTo(lineArtRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 0.15, duration: 2, ease: 'power2.out', delay: 0.2 }
      );

      gsap.to(lineArtRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // 3. Headline Parallax & "Lining" Underline Effect
      gsap.to(headlineRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Underline animation for keywords
      gsap.fromTo('.underline-line',
        { scaleX: 0 },
        { 
          scaleX: 1, 
          duration: 1.5, 
          ease: 'expo.inOut', 
          delay: 1.2, 
          stagger: 0.3,
          transformOrigin: 'left center'
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-8 lg:px-16 bg-white overflow-hidden pt-20"
    >
      {/* Abstract Line Art Background */}
      <div 
        ref={lineArtRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-0 flex items-center justify-center"
      >
        <img 
          src="/images/hero_line_art.png" 
          alt="Technical Line Art" 
          className="w-[120%] h-[120%] object-contain grayscale opacity-20"
        />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gray-50 rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="max-w-7xl w-full text-center z-10">
        <h1 
          ref={headlineRef}
          className="text-[12vw] md:text-[8vw] lg:text-[7.5vw] font-bold leading-[1.05] tracking-tight mb-20 text-balance"
        >
          <div className="overflow-hidden h-fit inline-block">
            <span className="reveal-span inline-block">We build </span>
          </div>{' '}
          <div className="overflow-hidden h-fit inline-block relative">
            <span className="reveal-span inline-block text-black">intelligent</span>
            <div className="underline-line absolute bottom-2 left-0 w-full h-[3px] bg-black scale-x-0 origin-left"></div>
          </div>{' '}
          <div className="overflow-hidden h-fit inline-block">
            <span className="reveal-span inline-block">software</span>
          </div>{' '}
          <br className="hidden md:block" />
          <div className="overflow-hidden h-fit inline-block">
            <span className="reveal-span inline-block">and </span>
          </div>{' '}
          <div className="overflow-hidden h-fit inline-block relative">
            <span className="reveal-span inline-block text-black">scalable</span>
            <div className="underline-line absolute bottom-2 left-0 w-full h-[3px] bg-black scale-x-0 origin-left"></div>
          </div>{' '}
          <div className="overflow-hidden h-fit inline-block">
            <span className="reveal-span inline-block">platforms.</span>
          </div>
        </h1>

        {/* Developer Info - No Static Animations per request */}
        <div 
          ref={rolesRef}
          className="flex flex-col md:flex-row gap-12 md:gap-24 justify-center items-center opacity-100"
        >
          <div className="flex flex-col items-center">
            <span className="text-[14px] uppercase tracking-[0.3em] text-[#86868b] font-bold mb-2">Systems Engineering</span>
            <p className="text-2xl font-bold tracking-tight text-black">Bishnu Prasad Sahu</p>
          </div>
          <div className="w-px h-16 bg-gray-200 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-[14px] uppercase tracking-[0.3em] text-[#86868b] font-bold mb-2">Interfaces & Motion</span>
            <p className="text-2xl font-bold tracking-tight text-black">Deepika Tandulkar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
