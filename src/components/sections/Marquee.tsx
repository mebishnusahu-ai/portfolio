'use client';

export default function Marquee() {
  const projects = [
    'Samarthya Bot', 'Urban Host', 'FarmView', 'Kuya Cloud', 
    'Chettas Dosa', 'KuyaCode', 'Seaside', 'Sehat Setu'
  ];

  return (
    <section className="bg-white py-32 overflow-hidden border-t border-gray-100">
      <div className="px-8 lg:px-16 mb-12 max-w-screen-2xl mx-auto">
        <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#86868b]">Strategic Partners & Projects</h2>
      </div>
      
      <div className="marquee-container border-y-0">
        <div className="marquee-content py-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center">
              {projects.map((project) => (
                <span key={project} className="text-6xl md:text-[10vw] font-bold tracking-tighter opacity-10 hover:opacity-100 transition-opacity duration-700 cursor-default">
                  {project}
                </span>
              ))}
              <span className="text-6xl md:text-8xl font-black opacity-10">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
