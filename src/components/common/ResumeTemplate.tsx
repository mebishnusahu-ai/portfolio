export interface ResumeProps {
  name: string;
  role: string;
  about: string;
  email: string;
  location: string;
  phone?: string;
  github?: string;
  experience: { company: string; position: string; period: string; details: string[] }[];
  education: { school: string; degree: string; year: string }[];
  projects?: { title: string; tech: string; description: string }[];
  publications?: { title: string; link?: string; details: string }[];
  awards?: string[];
  skills: string[];
}

export default function ResumeTemplate({ 
  name, 
  about, 
  experience, 
  education, 
  skills, 
  email, 
  location, 
  phone, 
  github,
  projects,
  publications,
  awards 
}: ResumeProps) {
  return (
    <div className="pt-40 pb-32 px-8 lg:px-16 max-w-screen-2xl mx-auto selection:bg-black selection:text-white">
      <header className="mb-24 max-w-5xl">
         <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#0066cc] mb-8 block">Curriculum Vitae</span>
        <h1 className="text-6xl md:text-[8vw] font-bold tracking-tight mb-8 leading-[0.9]">{name}</h1>
        <p className="text-xl md:text-2xl text-[#86868b] font-medium leading-relaxed mb-16">{about}</p>
        
        {/* Dynamic Top Bar (Previously Sidebar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#f5f5f7] p-12 rounded-[40px] mb-32">
          <div>
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#86868b] mb-8">Technical Mastery</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white text-[12px] font-bold uppercase tracking-widest rounded-lg border border-gray-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="md:border-l border-gray-200 md:pl-12 flex flex-col justify-center space-y-4">
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#86868b] mb-4">Inquiries</h2>
              <p className="text-black font-bold text-2xl">{email}</p>
              {phone && <p className="text-black font-bold text-lg">{phone}</p>}
            </div>
            <div>
              <p className="text-[#86868b] font-medium uppercase tracking-widest text-[12px]">{location}</p>
              {github && (
                <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="text-[#0066cc] font-bold uppercase tracking-widest text-[12px] hover:underline block mt-2">
                  {github}
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl">
        {/* Experience Section */}
        <section className="mb-32">
          <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#86868b] mb-16 border-b border-gray-100 pb-4">Professional History</h2>
          <div className="flex flex-col gap-24">
            {experience.map((exp, i) => (
              <div key={i} className="group">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight mb-1">{exp.position}</h3>
                    <p className="text-black text-lg font-bold uppercase tracking-wider">{exp.company}</p>
                  </div>
                  <span className="text-[13px] font-bold text-[#86868b] mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-4 max-w-3xl">
                  {exp.details.map((detail, j) => (
                    <li key={j} className="text-lg text-[#86868b] leading-relaxed flex gap-4">
                      <span className="text-black font-bold">/</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        {projects && projects.length > 0 && (
          <section className="mb-32">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#86868b] mb-16 border-b border-gray-100 pb-4">Selected Research Projects</h2>
            <div className="grid grid-cols-1 gap-12">
              {projects.map((proj, i) => (
                <div key={i} className="group border-l-2 border-gray-100 pl-8 py-2 hover:border-black transition-colors">
                  <span className="text-[11px] font-bold text-[#0066cc] uppercase tracking-widest block mb-2">{proj.tech}</span>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">{proj.title}</h3>
                  <p className="text-lg text-[#86868b] leading-relaxed max-w-3xl">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Research & Publications Section */}
        {publications && publications.length > 0 && (
          <section className="mb-32">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#86868b] mb-16 border-b border-gray-100 pb-4">Research & Publications</h2>
            <div className="flex flex-col gap-12">
              {publications.map((pub, i) => (
                <div key={i}>
                  <h3 className="text-2xl font-bold tracking-tight mb-2">{pub.title}</h3>
                  <p className="text-lg text-[#86868b] mb-4">{pub.details}</p>
                  {pub.link && (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-[#0066cc] font-bold text-sm uppercase tracking-widest hover:underline">
                      View Publication
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Awards Section */}
        {awards && awards.length > 0 && (
          <section className="mb-32">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#86868b] mb-16 border-b border-gray-100 pb-4">Recognition & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awards.map((award, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="w-2 h-2 rounded-full bg-black mt-2.5 shrink-0" />
                  <p className="text-xl font-medium tracking-tight">{award}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        <section>
          <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#86868b] mb-16 border-b border-gray-100 pb-4">Academic Background</h2>
          <div className="flex flex-col gap-12">
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between items-end border-b border-gray-50 pb-8">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">{edu.degree}</h3>
                  <p className="text-[#86868b] text-lg font-medium">{edu.school}</p>
                </div>
                <span className="text-black font-bold">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

