// "use client";  // only needed if you later add state/animations here
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
    title: "Front-end Development",
    icon: <FaReact />,
    blurb:
      "Building performant, accessible interfaces with component systems and subtle motion.",
    bullets: [
      "React / Next.js, routing & data fetching patterns",
      "Design systems, reusable UI primitives, accessibility",
      "Framer-Motion micro-interactions and hover reveals",
    ],
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Back-end Development",
    icon: <FaNode />,
    blurb:
      "APIs and services that are easy to observe, test, and scale.",
    bullets: [
      "REST/JSON APIs, auth, input validation",
      "Data modeling & queries (SQL/NoSQL)",
      "CI checks & integration tests for reliability",
    ],
    tools: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Automation & SRE",
    icon: <TbRobot />,
    blurb:
      "Streamlining ops, reducing toil, and improving release readiness.",
    bullets: [
      "Guided workflow UIs with timers/branching for ops",
      "Low-code pipelines to cut manual approvals & errors",
      "UAT playbooks, logging hooks, dashboards & runbooks",
    ],
    tools: ["Microsoft Power Automate", "Shell/Python", "Observability/Dashboards"],
  },
  {
    title: "Computer Vision",
    icon: <SiOpencv />,
    blurb:
      "Practical CV pipelines and experimentation.",
    bullets: [
      "Object/part tracking & evaluation scripts",
      "Integrated multi-stage subroutines for throughput",
      "CARLA simulation experiments & scripted tests",
    ],
    tools: ["Python", "OpenCV", "NumPy", "CARLA"],
  },
  {
    title: "Game Development",
    icon: <SiUnity />,
    blurb:
      "Systems, tools, and UX for gameplay.",
    bullets: [
      "Grid/pathfinding, state & turn controllers",
      "Editor tooling for content iteration",
      "VFX/UI polish and input feel",
    ],
    tools: ["Unity", "C#"],
  },
  {
    title: "UI/UX & Prototyping",
    icon: <SiFigma />,
    blurb:
      "User-first flows, tasteful typography, and quick iteration.",
    bullets: [
      "Wireframes → high-fidelity comps → implement",
      "Design tokens & responsive layout rules",
      "Usability polish (empty states, affordances, errors)",
    ],
    tools: ["Figma", "Tailwind CSS"],
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className="rounded-2xl bg-slate-900/70 border border-white/10 p-6 md:p-8 shadow-lg hover:shadow-xl transition">
      <div className="flex items-start gap-6">
        {/* Left: “custom image” icon on gradient badge */}
        <div
          className="shrink-0 rounded-2xl p-4 md:p-5
                     bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,.35),rgba(59,130,246,.25)_40%,rgba(2,6,23,.9)_70%)]
                     ring-1 ring-white/10 shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)]"
        >
          <div className="text-[2.4rem] md:text-[3rem] lg:text-[3.4rem] text-white/90">
            {skill.icon}
          </div>
        </div>

        {/* Right: content */}
        <div className="min-w-0">
          <h3 className="text-[clamp(1.1rem,2.2vw,1.5rem)] font-semibold text-white">
            {skill.title}
          </h3>
          <p className="mt-2 text-[clamp(.95rem,1.2vw,1.05rem)] text-gray-300">
            {skill.blurb}
          </p>

          <ul className="mt-4 space-y-2 text-gray-300/90 text-[clamp(.9rem,1.1vw,1rem)] leading-relaxed list-disc pl-5">
            {skill.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          {skill.tools && (
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {skill.tools.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen snap-start flex flex-col justify-center">
      <h2 className="text-center text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-8">
        My Skills
      </h2>

      {/* Card container – vertical list like your reference */}
      <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-4 md:p-8 space-y-6 md:space-y-8">
        {skills.map((s) => (
          <SkillCard key={s.title} skill={s} />
        ))}
      </div>

      {/* Optional footer strip of tiny logos */}
      <div className="mt-6 flex flex-wrap items-center gap-4 opacity-70">
        <SiTailwindcss className="text-2xl" />
        <FaGithub className="text-2xl" />
        <SiPython className="text-2xl" />
      </div>
    </section>
  );
}
