import ResumeTemplate from '@/components/common/ResumeTemplate';

export const metadata = {
  title: "Resume | Bishnu - Backend & AI Systems",
};

export default function BishnuResume() {
  return (
    <ResumeTemplate 
      name="Bishnu Prasad Sahu"
      role="Full Stack Developer | AI & Computer Vision Specialist"
      about="Versatile Backend Developer with expertise in Python, AI/ML, and Computer Vision. Proven track record building scalable web applications and AI-powered solutions including medical assistants, crop monitoring systems, and cybersecurity tools."
      email="mebishnusahu@gmail.com"
      location="Bhilai, Chhattisgarh, India"
      phone="+91 9301105706"
      github="github.com/mebishnusahu0595"
      skills={[
        "Python", "C++", "Go", "TypeScript", "JavaScript", "SQL", 
        "Node.js", "Express", "React", ".NET", "Flask", "Vite", 
        "YOLO", "OpenCV", "TensorFlow", "Computer Vision", "Deep Learning", 
        "Graph Algorithms", "MySQL", "MongoDB", "SQL Server", "Git", "REST APIs"
      ]}
      experience={[
        {
          company: "Oncorg",
          position: "Full Stack Developer",
          period: "Apr 2025 - Present",
          details: [
            "Developed full-stack applications using C#, .NET Framework, and SQL Server in an agile remote environment.",
            "Built responsive frontend interfaces and RESTful APIs, ensuring seamless database integration and performance."
          ]
        },
        {
          company: "SuperBase",
          position: "Open Source Contribution",
          period: "Jan 2026 - Present",
          details: [
            "Fixed a storage URL initialization bug in supabase-py by normalizing storage_url to always include a trailing slash.",
            "Added comprehensive unit tests for both Sync and Async clients to validate URL formatting across multiple scenarios."
          ]
        },
        {
          company: "AOSSIE",
          position: "Open Source Contribution",
          period: "Apr 2024 - Jun 2025",
          details: [
            "Resolved TailwindCSS configuration conflicts by migrating to ESM format, stabilizing the project build pipeline.",
            "Improved architecture by adding TypeScript support, CI/CD workflow, Docker updates, and structured error handling."
          ]
        },
        {
          company: "Code2Dbug",
          position: "Full Stack Developer",
          period: "Jan 2026 - Feb 2026",
          details: [
            "Delivered multiple full-stack web applications using Node.js, Express, React (Vite), and REST APIs.",
            "Managed end-to-end project lifecycle from development to deployment, resolving complex frontend-backend issues."
          ]
        },
        {
          company: "CogniAble",
          position: "AI Developer",
          period: "Sep 2024 - Nov 2025",
          details: [
            "Engineered real-time person detection and tracking system using YOLOv8 and Deep SORT for autism therapy analysis.",
            "Generated annotated video outputs enabling researchers to study behavioral patterns with 95%+ tracking accuracy."
          ]
        },
        {
          company: "Self-Employed",
          position: "Freelance Developer",
          period: "Apr 2025 - Present",
          details: [
            "Completed 10+ client projects spanning data science, AI, computer vision, and full-stack web development.",
            "Published open-source ML and automation tools on GitHub, including custom utilities for image annotation."
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
          title: "Agentic Honeypot - Cyber Threat Detection",
          tech: "Python, AI Agents, Security",
          description: "Designed intelligent honeypot using agent-based AI to simulate services, attract attackers, and analyze intrusion patterns."
        },
        {
          title: "Kuya Data Library",
          tech: "Python, Data Processing",
          description: "Created open-source data-handling library simplifying data transformation and utility operations for developers."
        },
        {
          title: "Money Muling Detector",
          tech: "C++, TypeScript, Graph Algorithms",
          description: "Built AI-powered financial fraud detection system identifying money muling rings using custom Red-Black Tree and Decision Tree algorithms."
        }
      ]}
      publications={[
        {
          title: "Kuya Cloud: A Rule-Based Data Analytics Platform",
          details: "A platform for democratizing data science through automated visualization and analytics.",
          link: "https://doi.org/10.5281/zenodo.18803300"
        }
      ]}
      awards={[
        "RIFT Hackathon - Money Muling Detector (Bangalore)",
        "AR 2025 - 2nd Place for FAMS AI Medical Assistant (Bhilai)",
        "HackOmania 2025 - FarmView AI (Bhilai)",
        "MumbaiHacks 2025 - Developed FEZI Fact-Verification System (Mumbai)"
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
