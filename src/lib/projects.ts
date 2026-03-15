export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  video: string;
  features: string[];
  gallery: string[];
  techStack: string[];
  github: string;
  architecture: string;
}

export const projects: Project[] = [
  {
    slug: "samarthya-bot",
    title: "Samarthya\nBot",
    description: "Privacy-first, self-hosted Multi-Agent AI OS for Indian developers.",
    fullDescription: "SamarthyaBot (समर्थ्य बोट) is a 100% private, autonomous RPA agent engine that runs entirely on your local machine. It moves beyond simple chat into real-world action—writing code, deploying servers via SSH, controlling browsers with Puppeteer, and handling Indian-specific workflows like GST and UPI, all while keeping your data encrypted and under your control.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-in-office-33101-large.mp4",
    features: [
      "Full RPA Engine (Commit & Deploy)",
      "Autonomous ReAct Planning Engine",
      "Live Terminal Streaming via Go Worker",
      "Puppeteer Browser DOM Control",
      "AES-256-CBC Encrypted Local Memory",
      "Indian Workflows (GST, UPI, IRCTC)"
    ],
    gallery: [
      "/images/samarthya1.png",
      "/images/samarthya2.png",
      "/images/samarthya3.png"
    ],
    techStack: ["Node.js 20", "Go Worker", "React 19", "MongoDB", "Puppeteer", "Express 5"],
    github: "https://github.com/mebishnusahu0595/SamarthyaBot",
    architecture: "A hybrid high-performance architecture featuring a Node.js gateway and a specialized Go micro-worker for non-blocking terminal streaming. Memory is secured with AES-256-CBC encryption within a local MongoDB instance."
  },
  {
    slug: "urban-host",
    title: "Urban Host",
    description: "Premium hotel booking and reservation ecosystem.",
    fullDescription: "Urban Host is an end-to-end hotel management and booking platform designed for scale. It features a high-conversion guest storefront and a powerful administrative dashboard for managing inventory, rates, and real-time reservations across multiple properties.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-design-4100-large.mp4",
    features: [
      "Advanced property filtering",
      "Real-time reservation engine",
      "Dynamic pricing management",
      "Admin analytics dashboard",
      "Fully responsive mobile UI",
      "Secure checkout workflow"
    ],
    gallery: [
      "/images/urbanhost-desktop.png",
      "/images/urbanhost-admin-desktop.png",
      "/images/urbanhost-mobile1.png",
      "/images/urbanhost-mobile2.png",
      "/images/urbanhost-mobile3.png"
    ],
    techStack: ["React", "Express", "Node.js", "MongoDB", "Redux Toolkit", "JWT Auth"],
    github: "https://github.com/mebishnusahu0595/urbanhost",
    architecture: "A modular MERN stack architecture utilizing Redux for centralized state management. The system implements a secure RBAC (Role-Based Access Control) system for differentiating between guests and property administrators."
  },
  {
    slug: "farmview",
    title: "FarmView",
    description: "Crop monitoring and agriculture analytics platform.",
    fullDescription: "FarmView empowers farmers with data-driven insights into their fields. By aggregating satellite imagery and IoT sensor data, it provides real-time analytics on crop health and soil conditions.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-field-of-green-wheat-swaying-in-the-wind-22442-large.mp4",
    features: [
      "Satellite imagery analysis",
      "IoT sensor integration",
      "Predictive yield modeling",
      "Irrigation management alerts"
    ],
    gallery: [
      "/images/farmview1.png",
      "/images/farmview2.png",
      "/images/farmview3.png",
      "/images/farmview4.png",
      "/images/farmview5.png"
    ],
    techStack: ["Next.js", "Django", "PostGIS", "AWS Lambda", "TensorFlow"],
    github: "https://github.com/mebishnusahu0595/farmview",
    architecture: "Utilizes a serverless backend for processing high-resolution satellite data. Geographic information is stored in PostGIS, and machine learning models are deployed via AWS SageMaker."
  },
  {
    slug: "kuya-cloud",
    title: "Kuya Cloud",
    description: "Data analytics and visualization platform for analysts.",
    fullDescription: "Kuya Cloud is designed for high-performance data processing and visualization. It allows data analysts to transform complex datasets into interactive, actionable dashboards effortlessly.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-data-processing-on-a-digital-screen-21445-large.mp4",
    features: [
      "Drag-and-drop dashboard builder",
      "Real-time stream processing",
      "Collaborative workspaces",
      "Automated reporting"
    ],
    gallery: [
      "/images/kuyacloud1.png",
      "/images/kuyacloud2.png",
      "/images/kuyacloud3.png",
      "/images/kuyacloud4.png"
    ],
    techStack: ["TypeScript", "Go", "ClickHouse", "D3.js", "Apache Kafka"],
    github: "https://github.com/mebishnusahu0595/kuya-cloud",
    architecture: "Uses ClickHouse for sub-second analytical queries on billions of rows. The backend is written in Go for concurrency, and the frontend uses D3.js for custom visualizations."
  },
  {
    slug: "chettas-dosa",
    title: "Chettas Dosa",
    description: "Website and ordering platform for a South Indian restaurant.",
    fullDescription: "A vibrant digital experience for Chettas Dosa, bringing the flavors of South India online. Features a full digital menu and an integrated ordering system for takeout and delivery.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-person-pouring-sauce-on-food-18088-large.mp4",
    features: [
      "Interactive digital menu",
      "Online ordering system",
      "Reservation booking",
      "Customer loyalty program"
    ],
    gallery: [
      "/images/southindianrestro.png",
      "/images/southindianrestro1.png",
      "/images/southindianrestro3.png",
      "/images/southindianrestro2.png"
    ],
    techStack: ["Next.js", "Sanity CMS", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/mebishnusahu0595/South-indian-resto",
    architecture: "Headless CMS architecture using Sanity for menu management. The frontend is built with Next.js for SSR, ensuring fast load times and excellent SEO."
  },
  {
    slug: "kuyacode",
    title: "KuyaCode",
    description: "Open source AI code editor built on top of Opencode.",
    fullDescription: "KuyaCode is a focused AI-integrated development environment that enhances developer productivity. It provides deep contextual understanding and automated refactoring tools directly in the editor.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-typing-fast-on-a-computer-keyboard-in-a-dark-room-21434-large.mp4",
    features: [
      "Context-aware code completion",
      "AI-driven refactoring",
      "Integrated terminal with AI help",
      "Cloud sync for settings"
    ],
    gallery: [
      "/images/kuyacode.png"
    ],
    techStack: ["Electron", "React", "TypeScript", "Ollama", "Rust"],
    github: "https://github.com/mebishnusahu0595/kuyacode",
    architecture: "Hybrid architecture with an Electron frontend and a high-performance Rust core for file indexing and AI interface. LLMs are run locally using Ollama integration."
  },
  {
    slug: "seaside",
    title: "Seaside",
    description: "Real-time meeting platform similar to video conferencing apps.",
    fullDescription: "Seaside offers a crystal-clear video conferencing experience with a focus on privacy and ease of use. It supports low-latency communication for teams of all sizes.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-people-having-a-video-conference-on-a-laptop-4500-large.mp4",
    features: [
      "HD video and audio",
      "Screen sharing and recording",
      "End-to-end encryption",
      "Virtual backgrounds"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=1200"
    ],
    techStack: ["WebRTC", "Socket.io", "PeerJS", "Next.js", "Redis"],
    github: "https://github.com/mebishnusahu0595/seaside",
    architecture: "Uses WebRTC for peer-to-peer communication with a TURN/STUN server fallback. Socket.io handles signaling and floor control, while Redis manages active sessions."
  },
  {
    slug: "sehat-setu",
    title: "Sehat Setu",
    description: "AI-powered medical diagnosis and medical report summarization platform.",
    fullDescription: "Sehat Setu bridges the gap between complex medical reports and patient understanding. It uses advanced NLP to summarize medical data and provide precautionary diagnostic insights.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-medical-analysis-of-a-chest-x-ray-4122-large.mp4",
    features: [
      "Medical report OCR and analysis",
      "Natural language summarization",
      "Health trend visualization",
      "Secure HIPAA-compliant storage"
    ],
    gallery: [
      "/images/sehatsetu1.jpeg",
      "/images/sehatsetu2.jpeg",
      "/images/sehatsetu3.png",
      "/images/sehatsetu4.png"
    ],
    techStack: ["Next.js", "FastAPI", "PyTorch", "AWS S3", "Clerk"],
    github: "https://github.com/mebishnusahu0595/sehat-setu",
    architecture: "A Next.js frontend connects to a FastAPI backend that runs PyTorch models for medical OCR and NER. All patient data is encrypted at rest and in transit."
  }
];
