import ResumeTemplate from '@/components/common/ResumeTemplate';

export const metadata = {
  title: "Resume | Deepika - Frontend & UI Engineering",
};

export default function DeepikaResume() {
  return (
    <ResumeTemplate 
      name="Deepika Tandulkar"
      role="Frontend & UI Engineering"
      about="Frontend engineer specializing in modern UI systems and interactive interfaces. Focused on bridging the gap between design and technology using motion and pixel-perfect execution."
      email="deepikatandulkar2@gmail.com"
      location="Bhilai, Chhattisgarh, India"
      phone="+91 6266838334"
      github="github.com/DeepikaT05"
      skills={["React", "Next.js", "TypeScript", "GSAP", "Tailwind CSS", "Figma", "UI/UX Design", "Three.js", "Animation Design"]}
      experience={[
        {
          company: "AOSSIE",
          position: "Open Source Contribution",
          period: "Apr 2024 - Jun 2025",
          details: [
            "Resolved TailwindCSS configuration conflicts by migrating to ESM format, stabilizing the project build pipeline.",
            "Improved architecture by adding TypeScript support, CI/CD workflow, Docker updates, and structured error handling."
          ]
        }
      ]}
      projects={[
        {
          title: "FAMS - AI Medical Assistant",
          tech: "Python, Computer Vision, Voice AI",
          description: "Built AI-powered medical assistant with real-time visual assessment and conversational guidance using computer vision."
        },
        {
          title: "Money Muling Detector (Frontend)",
          tech: "C++, TypeScript, Graph Algorithms",
          description: "Developed the intuitive frontend for an AI-powered financial fraud detection system, visualizing money muling rings and complex transaction path patterns."
        }
      ]}
      awards={[
        "RIFT Hackathon - Money Muling Detector (Bangalore)"
      ]}
      education={[
        {
          school: "Rungta College of Science and Technology",
          degree: "Bachelor of Computer Applications",
          year: "2023 - 2026"
        },
        {
          school: "NULL Class",
          degree: "Generative AI Certification",
          year: "2025"
        }
      ]}
    />
  );
}
