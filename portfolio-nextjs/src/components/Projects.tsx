// ProjectsSection.tsx
type Project = {
  title: string;
  purpose: string;
  gif?: string | null; // path to your real gif when ready
};

const projects: Project[] = [
  { title: "Game - Tierlist",        purpose: "A block page for me to rank and comments upon the games I played.", gif: null },
  { title: "Zylar’s World",          purpose: "Philosophy-Based game with puzzles to solved.", gif: null },
  { title: "Project Turn-Based",     purpose: "Current Project looking to emulate Fire Emblem style.", gif: null },
  { title: "Port Navigation App (PSA Codesprint)", purpose: "Mobile POC for port routing & berth lookup.", gif: null },
  { title: "RouteRunner",            purpose: "Pathfinding visualizer for delivery drivers with handler and runner system running on heuristics and metrics.", gif: null },
  { title: "MDP Android Dev",        purpose: "Android client for robotics movement & telemetry.", gif: null },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group rounded-2xl bg-slate-900/70 border border-white/10 overflow-hidden shadow-lg hover:shadow-xl hover:border-purple-400/30 transition">
      {/* Media */}
      <div className="relative aspect-[16/9]">
        {/* If you already have a GIF, drop it in here */}
        {p.gif ? (
          <img
            src={p.gif}
            alt={`${p.title} preview`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          // Animated placeholder that feels like a classy GIF
          <div className="w-full h-full shimmer-bg" aria-hidden />
        )}

        {/* subtle top gradient for readability on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 opacity-70" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-[clamp(1.05rem,2vw,1.25rem)] font-semibold text-white">
          {p.title}
        </h3>
        <p className="mt-2 text-[clamp(.9rem,1.2vw,1rem)] text-gray-300 leading-relaxed">
          {p.purpose}
        </p>

        {/* Optional CTA row (disabled until links ready) */}
        <div className="mt-4 flex items-center gap-3">
          <button
            disabled
            className="px-3 py-1.5 rounded-lg bg-white/10 text-white/80 border border-white/15 cursor-not-allowed"
          >
            Details soon
          </button>
          <span className="text-xs text-gray-400 hidden sm:inline">
            GIFs coming; using animated placeholders.
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen snap-start flex flex-col justify-center">
      <h2 className="text-center text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-8">
        Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>

      
    </section>
  );
}
