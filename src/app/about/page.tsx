'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.reveal-el', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'expo.out', stagger: 0.2, delay: 0.5 }
    );
  }, []);

  const developers = [
    {
      name: 'Bishnu Prasad Sahu',
      role: 'Backend & AI Systems',
      description: 'Architecting resilient backend systems and implementing advanced AI solutions. Focused on scalability, performance, and the intersection of data and intelligence.',
      image: '/images/bishnu.png',
      resume: '/resume-bishnu',
      linkedin: 'https://www.linkedin.com/in/mebishnusahu05/'
    },
    {
      name: 'Deepika Tandulkar',
      role: 'Frontend & UI Engineering',
      description: 'Crafting pixel-perfect, highly interactive user experiences. Specialized in motion design, performance optimization, and building modern, accessible design systems.',
      image: '/images/deepika.jpeg',
      resume: '/resume-deepika',
      linkedin: 'https://www.linkedin.com/in/deepika-tandulkar-7a778b303/'
    }
  ];

  return (
    <div ref={containerRef} className="pt-40 pb-32 px-8 lg:px-16 min-h-screen bg-white max-w-screen-2xl mx-auto">
      <div className="mb-40">
        <h1 className="reveal-el text-[10vw] md:text-[8vw] font-bold tracking-tight leading-[0.9] mb-12">
          Designers of <br />Digital Futures.
        </h1>
        <p className="reveal-el text-2xl md:text-3xl text-[#86868b] max-w-3xl leading-snug font-medium">
          Integrated systems and seamless interfaces. We are a duo of developers dedicated to the craft of building software that feels as good as it performs.
        </p>
      </div>

      <div className="flex flex-col gap-60">
        {developers.map((dev, index) => (
          <div key={dev.name} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center`}>
            <div className="reveal-el w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-2xl bg-[#f5f5f7] relative">
              <Image 
                src={dev.image} 
                alt={dev.name} 
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
              />
            </div>
            <div className="reveal-el w-full md:w-1/2 flex flex-col items-start px-4">
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#0066cc] mb-6 underline underline-offset-8 decoration-gray-200">The Profile</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{dev.name}</h2>
              <p className="text-xl font-bold text-black mb-8 uppercase tracking-widest leading-none">{dev.role}</p>
              <p className="text-2xl text-[#86868b] mb-12 max-w-xl leading-relaxed font-medium">{dev.description}</p>
              <div className="flex flex-wrap items-center gap-6">
                <a 
                  href={dev.resume} 
                  className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest py-4 px-8 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-500"
                >
                  Curriculum Vitae
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path>
                  </svg>
                </a>
                <a 
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-gray-200 rounded-full hover:border-black hover:bg-black hover:text-white transition-all duration-500 text-black"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-40 border-t border-gray-100 pt-20">
        <h2 className="reveal-el text-4xl md:text-5xl font-bold mb-12">Premier Software Solutions in Bhilai</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="reveal-el">
            <h3 className="text-xl font-bold mb-4">Software Solutions</h3>
            <p className="text-[#86868b] leading-relaxed">We provide end-to-end software solutions at Bhilai, catering to startups and established businesses looking for digital transformation.</p>
          </div>
          <div className="reveal-el">
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p className="text-[#86868b] leading-relaxed">Our web development expertise ensures your business has a premium online presence that converts visitors into customers.</p>
          </div>
          <div className="reveal-el">
            <h3 className="text-xl font-bold mb-4">Hospitality Tech</h3>
            <p className="text-[#86868b] leading-relaxed">Specialized in hotel website creation and restaurant website creation in Bhilai. We build systems that manage bookings and menus seamlessly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
