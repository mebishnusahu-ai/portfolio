'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DevelopersSummary() {
  const sectionRef = useRef(null);
  const leftDevRef = useRef(null);
  const rightDevRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from('.section-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Left developer slides in from left
      gsap.from(leftDevRef.current, {
        x: -200,
        opacity: 0,
        duration: 2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center center',
          scrub: 1,
        }
      });

      // Right developer slides in from right
      gsap.from(rightDevRef.current, {
        x: 200,
        opacity: 0,
        duration: 2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center center',
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 px-8 lg:px-16 border-t border-gray-100 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-24 section-title">
          <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#86868b] mb-4">The Team</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
            Providing expert <span className="text-black">software solutions in Bhilai</span>, fusing architecture with interface.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40 relative">
          <div ref={leftDevRef} className="group">
            <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#0066cc] mb-6 block underline underline-offset-8 decoration-gray-100">Founding Engineer</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Bishnu Prasad Sahu</h2>
            <p className="text-2xl text-black font-bold mb-6 uppercase tracking-widest leading-none">Backend & AI Systems</p>
            <p className="text-[#86868b] text-xl max-w-md font-medium leading-relaxed">Pioneering complex backend architectures and integrating cognitive AI layers to solve enterprise-scale challenges.</p>
          </div>
          
          <div ref={rightDevRef} className="group text-right md:text-left flex flex-col md:items-start items-end">
            <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#0066cc] mb-6 block underline underline-offset-8 decoration-gray-100">Director of Experience</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Deepika Tandulkar</h2>
            <p className="text-2xl text-black font-bold mb-6 uppercase tracking-widest leading-none">Frontend & UI Engineering</p>
            <p className="text-[#86868b] text-xl max-w-md font-medium leading-relaxed">Designing human-centric interfaces and fluid motion systems that define the modern high-end web experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
