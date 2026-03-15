'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { projects } from '@/lib/projects';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pItems = gsap.utils.toArray<HTMLElement>('.project-item');
      
      pItems.forEach((item) => {
        gsap.fromTo(item, 
          { y: 150, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.8, 
            ease: 'expo.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              end: 'top 20%',
              scrub: false,
            }
          }
        );

        // Parallax effect for images
        gsap.to(item.querySelector('.parallax-img'), {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="bg-white border-t border-gray-100">
      <div className="section-padding max-w-screen-2xl mx-auto">
        <div className="mb-32">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-[#86868b] mb-6">Works</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tight">Handcrafted <br />Digital Products.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-40">
          {projects.map((project, index) => (
             <Link 
             key={project.slug} 
             href={`/projects/${project.slug}`}
             className={`project-item group block relative ${index % 2 !== 0 ? 'md:mt-48' : ''}`}
           >
             <div className="relative aspect-[16/10] md:aspect-[4/5] overflow-hidden bg-[#f5f5f7] mb-8 rounded-2xl group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] transition-shadow duration-700">
               <div className="parallax-img absolute inset-0 -top-[15%] w-full h-[130%]">
                 <img 
                   src={project.gallery[0]} 
                   alt={project.title}
                   className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out scale-110 group-hover:scale-100"
                 />
               </div>
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700"></div>
             </div>
             
             <div className="flex flex-col gap-3 px-2">
               <div className="flex justify-between items-end">
                 <div>
                   <span className="text-[12px] font-bold text-[#86868b] uppercase tracking-widest block mb-2">0{index + 1} • Interface</span>
                   <h3 className="text-3xl font-bold tracking-tight mb-2 group-hover:text-[#0066cc] transition-colors duration-300">{project.title}</h3>
                   <p className="text-[#86868b] text-lg max-w-sm font-medium">{project.description}</p>
                 </div>
                 <div className="w-12 h-12 rounded-full border border-gray-200 hidden md:flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:text-white transition-colors">
                      <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.7761 3 12 3.22386 12 3.5L12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                 </div>
               </div>
             </div>
           </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
