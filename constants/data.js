import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { FiGitBranch, FiMic } from "react-icons/fi";
export const tracks = [
  {
    label: "Track 01",
    title: "React Mastery",
    color: "#6366F1",
    Icon: FaReact,
    desc: "State patterns, hooks, compound components, optimistic UI, virtualization.",
    chips: ["useOptimistic", "Field arrays", "Context API", "Code splitting"],
  },
  {
    label: "Track 02",
    title: "Node.js & APIs",
    color: "#0D6E6E",
    Icon: FaNodeJs,
    desc: "REST architecture, JWT/OAuth, WebSockets, Zod validation, cron jobs.",
    chips: ["Express", "Zod", "Socket.IO", "Node-Cron"],
  },
  {
    label: "Track 03",
    title: "Full-Stack MERN",
    color: "#1E3A5F",
    Icon: SiMongodb,
    desc: "End-to-end projects: eCommerce, CRM, LMS, real-time bidding platform.",
    chips: ["MongoDB", "Next.js", "Redux", "Mongoose"],
  },
  {
    label: "Track 04",
    title: "Interview Ready",
    color: "#B45309",
    Icon: FiMic,
    desc: "Core JavaScript, closures, event loop, system design, HR preparation.",
    chips: ["Closures", "Promises", "Event loop", "System design"],
  },
  {
    label: "Track 05",
    title: "UI & CSS Systems",
    color: "#0891B2",
    Icon: SiTailwindcss,
    desc: "Tailwind, design systems, responsive layout, accessibility, animations.",
    chips: ["Tailwind", "Shadcn", "Framer Motion", "a11y"],
  },
  {
    label: "Track 06",
    title: "Dev Workflow",
    color: "#6B7280",
    Icon: FiGitBranch,
    desc: "Git, GitHub, deployment, CI/CD basics, Vercel, environment configs.",
    chips: ["Git", "GitHub Actions", "Vercel", "Docker basics"],
  },
];
