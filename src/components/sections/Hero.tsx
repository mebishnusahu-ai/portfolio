'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SparklesCore } from '../ui/sparkles';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const lineArtRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo('.reveal-span', 
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.1, delay: 0.5 }
      );

      tl.fromTo('.subtext-reveal',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        "-=0.5"
      );

      gsap.fromTo(lineArtRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 0.1, duration: 2, ease: 'power2.out', delay: 0.2 }
      );

      gsap.to('.hero-parallax', {
        y: -60,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom center',
          scrub: 1.5
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen md:min-h-screen flex flex-col justify-center items-center px-8 lg:px-16 bg-white text-black overflow-hidden pt-0 md:pt-20"
    >
      {/* Background Sparkles */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#000000"
        />
      </div>

      {/* Abstract Line Art Background */}
      <div 
        ref={lineArtRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-0 flex items-center justify-center"
      >
        <img 
          src="/images/hero_line_art.png" 
          alt="Technical Line Art" 
          className="w-[120%] h-[120%] object-contain opacity-10"
        />
      </div>

      <div className="max-w-7xl w-full text-center z-10 hero-parallax px-4 md:px-0">
        <h1 
          ref={headlineRef}
          className="text-[12vw] md:text-[8vw] lg:text-[7.5vw] font-bold leading-[1.1] md:leading-[1.05] tracking-tight mb-4 md:mb-8 text-balance"
        >
          <div className="overflow-hidden h-fit inline-block">
            <span className="reveal-span inline-block">We build </span>
          </div>{' '}
          <div className="overflow-hidden h-fit inline-block relative">
            <span className="reveal-span inline-block text-black font-cursive font-normal lowercase tracking-normal px-2">intelligent</span>
          </div>{' '}
          <div className="overflow-hidden h-fit inline-block">
            <span className="reveal-span inline-block">software</span>
          </div>{' '}
          <br className="md:block" />
          <div className="overflow-hidden h-fit inline-block">
            <span className="reveal-span inline-block">and </span>
          </div>{' '}
          <div className="overflow-hidden h-fit inline-block relative">
            <span className="reveal-span inline-block text-black font-cursive font-normal lowercase tracking-normal px-2">scalable</span>
          </div>{' '}
          <div className="overflow-hidden h-fit inline-block">
            <span className="reveal-span inline-block">platforms.</span>
          </div>
        </h1>

        <div ref={subtextRef} className="subtext-reveal space-y-6 md:space-y-8">
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-500 font-medium max-w-4xl mx-auto leading-relaxed text-balance px-2">
            Defining the future of <span className="text-indigo-600">autonomous agents</span> and high-performance infrastructure through elite engineering and cinematic design.
          </p>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 justify-center items-center pt-8">
            <div className="flex flex-col items-center group">
              <span className="text-[12px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-2 group-hover:text-black transition-colors">Core Architecture</span>
              <p className="text-xl font-bold tracking-tight text-black/90">Bishnu Prasad Sahu</p>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
            <div className="flex flex-col items-center group">
              <span className="text-[12px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-2 group-hover:text-black transition-colors">Visual Systems</span>
              <p className="text-xl font-bold tracking-tight text-black/90">Deepika Tandulkar</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
}

