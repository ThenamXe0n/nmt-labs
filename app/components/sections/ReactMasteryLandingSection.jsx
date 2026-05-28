import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaCheckSquare,
  FaTh,
  FaBolt,
  FaLayerGroup,
  FaSync,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";

const ReactMasteryLandingSection = () => {
  const tasks = [
    {
      id: 1,
      title: "Batch Submission Pattern",
      subtitle: "Repeatative Form Entries",
      description:
        "Manage multiple form entries in a field array pattern. Perfect for dynamic data collection and bulk processing.",
      path: "task/batch-form",
      icon: <FaCode />,
      color: "#6366f1",
    },
    {
      id: 2,
      title: "Multi-Delete Pattern",
      subtitle: "Selection & Batch Actions",
      description:
        "State-driven checkbox logic. Tasks appear with selection states and a dynamic delete action for efficient list management.",
      path: "task/mutidelete",
      icon: <FaCheckSquare />,
      color: "#10b981",
    },
    {
      id: 3,
      title: "Alphabet Grid Pattern",
      subtitle: "Cell Fill Interaction",
      description:
        "A complex state interaction where users map selected values to an immutable grid, demonstrating controlled UI flow.",
      path: "task/alphabet-grid",
      icon: <FaTh />,
      color: "#f59e0b",
    },
    {
      id: 4,
      title: "Optimistic UI Update Pattern",
      subtitle: "Real-time Feedback Logic",
      description:
        "Implement a 'Like' or 'Comment' system that updates the UI instantly using React 19 useOptimistic, rolling back state only if the server request fails.",
      path: "task/optimistic-ui",
      icon: <FaBolt />,
      color: "#ec4899",
    },
    {
      id: 5,
      title: "Infinite Scroll & Virtualization",
      subtitle: "Windowing & Performance",
      description:
        "Render a dataset of 10,000+ items using logic that only mounts DOM nodes visible in the viewport. Includes intersection observer integration.",
      path: "task/virtual-list",
      icon: <FaLayerGroup />,
      color: "#8b5cf6",
    },
    {
      id: 6,
      title: "Multi-Step Prefetching Wizard",
      subtitle: "State Persistance & UX",
      description:
        "A complex 5-step form wizard that prefetches next-step data and persists partial progress in LocalStorage/URL params to prevent data loss on refresh.",
      path: "task/prefetch-wizard",
      icon: <FaSync />,
      color: "#0ea5e9",
    },
    {
      id: 7,
      title: "Debounced Multi-Filter Search",
      subtitle: "URL-Driven State",
      description:
        "Synchronize complex UI filters (Search, Category, Price Range) with URL search parameters to ensure the UI state is fully shareable and bookmarkable.",
      path: "task/filtered-search",
      icon: <FaSearch />,
      color: "#f43f5e",
    },
    {
      id: 8,
      title: "Role-Based Compound Components",
      subtitle: "Advanced Pattern Design",
      description:
        "Build a highly reusable Dashboard layout using the Compound Component pattern, where sub-components communicate via internal context for conditional rendering.",
      path: "task/compound-layout",
      icon: <FaShieldAlt />,
      color: "#64748b",
    },
  ];

  return (
    <div className="px-5 py-[60px] bg-[#020617] min-h-screen font-['Inter',sans-serif] text-slate-50">
      <header className="text-center mb-[50px]">
        <h1 className="text-5xl font-extrabold mb-2">
          React <span className="text-[#ed6117]">Mastery</span>
        </h1>
        <p className="text-slate-400 text-[1.1rem] mt-5">
          Advanced State Interaction Patterns
        </p>
      </header>

      <div className="grid gap-6 max-w-[1200px] mx-auto [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden hover:-translate-y-[5px] hover:border-white/20"
          >
            {/* Subtle Gradient Glow */}
            <div
              className="absolute -top-[20%] -right-[20%] w-[150px] h-[150px] blur-[80px] opacity-15 z-0"
              style={{ background: task.color }}
            />

            <div className="z-[1]">
              {/* Icon Wrapper — color is dynamic so kept as inline style */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ background: `${task.color}20`, color: task.color }}
              >
                {task.icon}
              </div>

              <h4 className="text-slate-400 uppercase text-[12px] tracking-[1px] mb-2">
                {task.subtitle}
              </h4>
              <h2 className="text-2xl mb-3 text-white">{task.title}</h2>
              <p className="text-slate-300 leading-relaxed text-[0.95rem]">
                {task.description}
              </p>
            </div>

            {/* Link button — bg and shadow are dynamic so kept as inline style */}
            <Link
              href={task.path}
              className="mt-6 inline-flex items-center gap-2 no-underline text-white px-6 py-3 rounded-xl text-sm font-semibold transition-transform duration-200 hover:scale-[1.02]"
              style={{
                background: task.color,
                boxShadow: `0 4px 15px ${task.color}40`,
              }}
            >
              Check Out <FaArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactMasteryLandingSection;
