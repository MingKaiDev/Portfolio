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
    title: "Front-end Development",
    icon: <FaReact />,
    blurb: "Building performant, accessible interfaces with component systems and subtle motion.",
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
    blurb: "APIs and services that are easy to observe, test, and scale.",
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
    blurb: "Streamlining ops, reducing toil, and improving release readiness.",
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
    blurb: "Practical CV pipelines and experimentation.",
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
    blurb: "Systems, tools, and UX for gameplay.",
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
    blurb: "User-first flows, tasteful typography, and quick iteration.",
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
      <div className="mt-6 flex flex-wrap items-center gap-4 opacity-70">
        <SiTailwindcss className="text-2xl" />
        <FaGithub className="text-2xl" />
        <SiPython className="text-2xl" />
      </div>
    </section>
  );
}
