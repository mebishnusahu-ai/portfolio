import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100 py-16 px-8 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <Image 
            src="/logo.png" 
            alt="Bishnu and Deepika - Software Solutions Bhilai" 
            width={64}
            height={64}
            className="mb-8 opacity-80"
          />
          <h3 className="text-4xl font-bold tracking-tighter mb-4">Let&apos;s build something <br />together.</h3>
          <p className="text-gray-400 max-w-sm">
            Based in **Bhilai**, working globally. Expert software solutions, web development, and hospitality tech for modern businesses.
          </p>
        </div>
        
        <div className="flex flex-col items-start md:items-end">
          <div className="flex gap-4 mb-4">
            <span className="font-semibold text-black uppercase tracking-widest text-xs">Bishnu</span>
            <span className="font-semibold text-black uppercase tracking-widest text-xs">Deepika</span>
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            © {currentYear} — Designed & Developed with GSAP + Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
