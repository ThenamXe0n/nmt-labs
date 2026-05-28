export default function TechStrip({ techs, techIcons }) {
  const doubled = [...techs, ...techs];
  return (
    <div className="relative w-full overflow-hidden py-2">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

      <div className="flex w-max animate-[scroll_22s_linear_infinite] gap-3">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="group flex shrink-0 cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-300"
          >
            {techIcons && <span>{techIcons[t]}</span>}
            {t}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
