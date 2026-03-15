'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState, useEffect } from 'react';
import gsap from 'gsap';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  useEffect(() => {
    gsap.fromTo('.reveal-contact',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.1, delay: 0.5 }
    );
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-48 pb-32 px-8 lg:px-16 min-h-screen bg-white max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div className="flex flex-col justify-start">
          <span className="reveal-contact text-xs uppercase tracking-[0.4em] font-bold text-[#0066cc] mb-8 block underline underline-offset-8 decoration-gray-100">Contact</span>
          <h1 className="reveal-contact text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-12">
            Let&apos;s build <br />the next big thing.
          </h1>
          <p className="reveal-contact text-2xl text-[#86868b] max-w-md leading-relaxed font-medium">
            Have an idea that needs a technical edge? We&apos;re currently accepting new projects for 2026.
          </p>
          
          <div className="reveal-contact mt-20 flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Email нам</p>
              <a href="mailto:mebishnusahu@gmail.com" className="text-2xl font-bold hover:text-[#0066cc] transition-colors">mebishnusahu@gmail.com</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Location</p>
              <p className="text-2xl font-bold">Bhilai, IN</p>
            </div>
          </div>
        </div>

        <div className="reveal-contact bg-[#f5f5f7] p-12 md:p-20 rounded-[40px]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <label className="text-[11px] uppercase tracking-widest font-bold text-[#86868b]">Full Name</label>
              <input 
                {...register('name')}
                placeholder="Bishnu Sahu" 
                className="bg-transparent border-b-2 border-gray-200 py-4 text-2xl outline-none focus:border-black transition-all duration-500 placeholder:text-gray-300"
              />
              {errors.name && <span className="text-red-500 text-xs font-bold">{errors.name.message}</span>}
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[11px] uppercase tracking-widest font-bold text-[#86868b]">Email address</label>
              <input 
                {...register('email')}
                placeholder="name@company.com" 
                className="bg-transparent border-b-2 border-gray-200 py-4 text-2xl outline-none focus:border-black transition-all duration-500 placeholder:text-gray-300"
              />
              {errors.email && <span className="text-red-500 text-xs font-bold">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[11px] uppercase tracking-widest font-bold text-[#86868b]">Project Details</label>
              <textarea 
                {...register('message')}
                rows={4}
                placeholder="Tell us about your goals..." 
                className="bg-transparent border-b-2 border-gray-200 py-4 text-2xl outline-none focus:border-black transition-all duration-500 resize-none placeholder:text-gray-300"
              />
              {errors.message && <span className="text-red-500 text-xs font-bold">{errors.message.message}</span>}
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="mt-8 bg-black text-white py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#0066cc] transition-all duration-500 disabled:opacity-50"
            >
              {status === 'loading' ? 'Transmitting...' : 'Send Inquiry'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 font-bold text-center uppercase tracking-widest text-xs">
                Success. We will review your inquiry shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-bold text-center uppercase tracking-widest text-xs">
                Transmission error. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
