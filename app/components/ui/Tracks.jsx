import { tracks } from "@/constants/data";

import { FiChevronRight, FiGitBranch, FiMic } from "react-icons/fi";


/* ═══════════════════════════════════════════════════════════════
   LEARNING TRACKS
═══════════════════════════════════════════════════════════════ */
export default function Tracks() {


  

  return (
    <section className="bg-[black] py-20 md:py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div>
              <span className="uppercase text-xs font-semibold tracking-widest text-[#f7b57e]">Learning tracks</span>
              <h2 className="text-4xl md:text-5xl font-black text-orange-500 leading-tight mt-2">
                Six focused paths.<br />Zero wasted time.
              </h2>
            </div>
            <p className="text-gray-600 max-w-md text-[15px] leading-relaxed">
              Every track is opinionated and ordered. No choosing between 40 tutorials — just a clear sequence that builds on itself.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, i) => (
            <div key={i} delay={i * 0.05}>
              <div className="group border border-gray-200 hover:border-gray-300 bg-black rounded-xl p-8 h-full transition-all hover:shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <track.Icon size={22} style={{ color: track.color }} />
                    <span
                      className="text-xs font-bold tracking-widest text-white uppercase"
                    
                    >
                      {track.label}
                    </span>
                  </div>
                  <FiChevronRight
                    size={18}
                    className="text-gray-400 group-hover:text-gray-600 transition-colors"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {track.title}
                </h3>

                <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                  {track.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {track.chips.map((chip, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1.5 rounded-md font-medium"
                      style={{
                        backgroundColor: `${track.color}15`,
                        color: track.color,
                        border: `1px solid ${track.color}25`,
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}