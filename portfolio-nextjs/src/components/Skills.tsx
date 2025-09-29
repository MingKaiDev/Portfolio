// Skills.tsx
"use client";
import { FaReact, FaNode, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiPython, SiOpencv, SiUnity, SiFigma } from "react-icons/si";
import { TbRobot } from "react-icons/tb";

type Skill = {
  title: string;
  icon: React.ReactNode;
  blurb: string;
  bullets: string[];
  tools?: string[];
};

const skills: Skill[] = [
  {
    title: "Front-End Development",
    icon: <FaReact />,
    blurb: "Built responsive, accessible UIs with clean component structure, smart state, and attention to performance.",
    bullets: [
      "Next.js App Router: server/client components, dynamic routes, lazy/dynamic import",
      "Tailwind-first design: responsive layouts, theming, and a11y-conscious components",
      "Interactive UX: carousels, modals (PDF viewer), search/filter, and form handling",
      "Performance basics: image optimization, code-splitting, avoiding SSR hydration pitfalls",
    ],
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Back-End & APIs",
icon: <FaNode />,
blurb: "Lean HTTP services and webhooks that are predictable, testable, and easy to monitor.",
bullets: [
  "RESTful endpoints & webhooks: clear JSON contracts, token/JWT auth",
  "Schema validation & robust errors: safe parsing, guardrails, retries",
  "Data access: simple models/queries with cached reads where useful",
  "Ops basics: structured logs/metrics, health checks, Dockerized envs",
],
tools: ["Node.js", "Express/Flask", "Next.js API Routes", "TypeScript", "Firebase/MongoDB", "Docker"],

  },
  {
  title: "Automation & Site Reliability",
  icon: <TbRobot />,
  blurb: "Shrink toil, harden releases, and make ops repeatable and observable.",
  bullets: [
    "Guided ops flows with timers/branching to standardize execution",
    "Low-code automations to remove manual approvals and reduce errors",
    "Release readiness: UAT playbooks, rollback paths, guardrails",
    "Observability in practice: logging hooks, status dashboards, runbooks",
  ],
  tools: ["Power Automate", "Bash/Python", "Logs/Metrics Dashboards"],
},

  {
    title: "Computer Vision",
icon: <SiOpencv />,
blurb: "Applied CV for part-tracking and navigation—from image capture to evaluation.",
bullets: [
  "Part/assembly tracking pipelines with reliability metrics",
  "Integrated multi-stage routines to boost accuracy and throughput",
  "CARLA scenario tests for vehicle behavior and edge-case evaluation",
  "Camera acquisition with Matrox MIL: calibration and precise capture control",
],
tools: ["Python", "OpenCV", "Matrox MIL", "CARLA", "NumPy"],
  },
  {
    title: "Game Development",
icon: <SiUnity />,
blurb: "Prototype-driven gameplay with solid systems, fast iteration, and polished feel.",
bullets: [
  "Grid/pathfinding systems and turn/state controllers",
  "Lightweight editor tools for rapid content iteration",
  "Responsive input, UI/VFX polish, moment-to-moment feel",
  "Physics and tuning passes to balance mechanics",
  "Rapid prototyping to explore and refine ideas",
],
tools: ["Unity", "C#", "Raylib", "PyGame"],

  },
  {
    title: "UI/UX & Prototyping",
icon: <SiFigma />,
blurb: "User-first flows that line up with system architecture—iterate fast from wireframes to shippable UI.",
bullets: [
  "Requirements → use cases → wireframes → clickable prototypes",
  "System mapping: swimlanes & sequence diagrams for user/system steps; ER diagrams for data",
  "Component specs: states/variants, a11y, typographic scale and spacing tokens",
  "Validation & handoff: quick tests, iteration, redlines/specs aligned to endpoints and events",
],
tools: ["Figma", "Visual Paradigm"],

  },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className="rounded-2xl bg-slate-900/70 border border-white/10 p-6 md:p-8 shadow-lg hover:shadow-xl transition">
      <div className="flex flex-col items-center text-center gap-4 md:flex-row md:items-start md:text-left md:gap-6">
        <div
          className="shrink-0 rounded-2xl p-4 md:p-5
                     bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,.35),rgba(59,130,246,.25)_40%,rgba(2,6,23,.9)_70%)]
                     ring-1 ring-white/10 shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)]"
        >
          <div className="text-[2.6rem] md:text-[3rem] lg:text-[3.4rem] text-white/90">
            {skill.icon}
          </div>
        </div>

        <div className="min-w-0 w-full">
          <h3 className="text-[clamp(1.15rem,2.2vw,1.6rem)] font-semibold text-white">{skill.title}</h3>

          {skill.tools && (
            <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start text-sm">
              {skill.tools.map((t) => (
                <span key={t} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="hidden md:block mt-4">
            <p className="text-[clamp(.95rem,1.2vw,1.05rem)] text-gray-300">{skill.blurb}</p>
            <ul className="mt-3 space-y-2 text-gray-300/90 text-[clamp(.9rem,1.1vw,1rem)] leading-relaxed list-disc pl-5">
              {skill.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <details className="mt-4 group md:hidden">
            <summary className="cursor-pointer text-sm text-purple-300 hover:text-purple-200 list-none flex items-center gap-1 justify-center">
              <span>Read more</span>
              <svg className="h-4 w-4 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
              </svg>
            </summary>
            <div className="mt-3 text-sm text-gray-300/90">
              <p className="text-[0.98rem] text-gray-300">{skill.blurb}</p>
              <ul className="mt-2 space-y-2 text-gray-200 leading-relaxed list-disc pl-5">
                {skill.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen snap-start flex flex-col justify-center">
      <h2 className="text-center text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-8">My Skills</h2>
      <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-4 md:p-8 space-y-6 md:space-y-8">
        {skills.map((s) => (
          <SkillCard key={s.title} skill={s} />
        ))}
      </div>
      
    </section>
  );
}
