'use client';

import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, use } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      // Reveal animations
      gsap.from('.reveal-text', {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.2
      });

      // Parallax for gallery images
      const galleryItems = gsap.utils.toArray<HTMLElement>('.gallery-item');
      galleryItems.forEach((item) => {
        gsap.to(item.querySelector('img'), {
          yPercent: 10,
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
  }, [project]);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex(p => p.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div ref={containerRef} className="pt-32 pb-32 bg-white selection:bg-black selection:text-white">
      {/* Product Hero */}
      <section className="px-8 lg:px-16 mb-40 max-w-screen-2xl mx-auto">
        <Link href="/#projects" className="text-[13px] font-bold uppercase tracking-widest text-[#0066cc] mb-20 inline-block hover:underline underline-offset-4">
          ← Back to Works
        </Link>
        <div className="max-w-7xl">
          <span className="reveal-text block text-xs uppercase tracking-[0.4em] font-bold text-[#86868b] mb-6">Case Study 0{projectIndex + 1}</span>
          <h1 className="reveal-text text-5xl md:text-[9vw] font-bold tracking-tighter leading-[0.95] mb-12 whitespace-pre-line overflow-visible">
            {project.title}
          </h1>
          <p className="reveal-text text-2xl md:text-3xl text-black font-medium leading-snug">
            {project.description}
          </p>
        </div>
      </section>

      {/* Main Hero Image */}
      <section className="px-8 lg:px-16 mb-40 max-w-screen-2xl mx-auto">
        <div className="w-full aspect-video bg-[#1c1c1e] overflow-hidden relative rounded-3xl shadow-2xl">
          <Image 
            src={project.gallery[0]} 
            alt={project.title}
            fill
            priority
            className="object-contain p-8 md:p-12"
          />
        </div>
      </section>

      {/* Narrative Section */}
      <section className="px-8 lg:px-16 mb-60 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32">
        <div className="flex flex-col gap-10">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-[#86868b]">The Challenge</h2>
          <p className="text-3xl font-medium leading-relaxed">
            {project.fullDescription}
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-[#86868b]">Strategic Approach</h2>
          <div className="flex flex-wrap gap-4">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-6 py-3 bg-[#f5f5f7] text-[13px] font-bold uppercase tracking-widest rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-xl text-[#86868b] leading-relaxed font-medium">
            {project.architecture}
          </p>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 text-[13px] font-bold uppercase tracking-widest mt-4"
          >
            Explore Source Code
            <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
              ↗
            </span>
          </a>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="px-8 lg:px-16 mb-60 max-w-screen-2xl mx-auto">
         <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-[#86868b] mb-12">Core Innovations</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.features.map((feature, i) => (
              <div key={i} className="p-10 bg-[#f5f5f7] rounded-3xl min-h-[300px] flex flex-col justify-between">
                <span className="text-4xl font-bold text-black opacity-10">0{i + 1}</span>
                <p className="text-xl font-bold tracking-tight">{feature}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Smart Gallery */}
      <section className="px-8 lg:px-16 mb-60 max-w-screen-2xl mx-auto space-y-20">
        <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-[#86868b]">Visual Ecosystem</h2>
        
        <div className="flex flex-col gap-8">
          {/* Logic to group mobile images */}
          {project.gallery.reduce((acc: (
            | { type: 'mobile-group'; images: string[] }
            | { type: 'desktop'; image: string }
          )[], img) => {
            const isMobile = img.toLowerCase().includes('mobile');
            const lastGroup = acc[acc.length - 1];

            if (isMobile && lastGroup && lastGroup.type === 'mobile-group') {
              lastGroup.images.push(img);
            } else if (isMobile) {
              acc.push({ type: 'mobile-group', images: [img] });
            } else {
              acc.push({ type: 'desktop', image: img });
            }
            return acc;
          }, []).map((group, idx) => (
            <div key={idx}>
              {group.type === 'desktop' ? (
                <div className="gallery-item w-full aspect-video bg-[#f5f5f7] overflow-hidden rounded-3xl relative">
                  <Image 
                    src={group.image} 
                    alt={`${project.title} desktop ${idx}`} 
                    fill
                    className="object-contain p-8 md:p-12" 
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {group.images.map((mImg: string, mIdx: number) => (
                    <div key={mIdx} className="gallery-item aspect-[9/16] bg-[#f5f5f7] overflow-hidden rounded-3xl relative border border-gray-100">
                      <Image 
                        src={mImg} 
                        alt={`${project.title} mobile ${mIdx}`} 
                        fill
                        className="object-contain p-4" 
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Next Project Bridge */}
      <section className="px-8 lg:px-16 pt-40 border-t border-gray-100 max-w-screen-2xl mx-auto flex flex-col items-center">
        <span className="text-xs font-bold text-[#86868b] uppercase tracking-[0.4em] mb-10">Next in sequence</span>
        <Link 
          href={`/projects/${nextProject.slug}`}
          className="group text-center"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight hover:text-[#0066cc] transition-colors duration-500 mb-8 cursor-pointer">
            {nextProject.title}
          </h2>
          <div className="w-20 h-20 rounded-full border border-gray-200 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
             <span className="text-2xl">↓</span>
          </div>
        </Link>
      </section>
    </div>
  );
}
