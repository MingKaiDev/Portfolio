"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import Starfield from "@/components/Starfield";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory p-6">

      {/* Featured Project */}
      <section id="home" className="min-h-screen snap-start relative flex flex-col justify-center gap-8 overflow-hidden">
        {/* starry background */}
        <Starfield density={0.14} maxSpeed={0.05} />

        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold">Featured</h1>

        <div className="relative w-full max-w-[99vw] mx-auto h-[70vh]">
          <div
            className="absolute inset-0 z-10 rounded-lg"
            style={{
              borderColor: "#6a23ddff",
              borderWidth: "10px",
              borderStyle: "solid",
              borderRadius: "20px",
              boxShadow: "0 0 20px 10px rgba(67, 22, 194, 0.88)",
            }}
          />
          <video autoPlay loop muted className="w-full h-full object-cover rounded-lg z-0">
            <source src="/items/PortfolioVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen snap-start relative flex items-center">
        {/* Background layer: soft radial + grid */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(106,35,221,0.25),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid gap-10 md:gap-14 md:grid-cols-[auto,1fr] items-center">
            {/* Profile image — bigger + responsive using clamp in rem */}
            <img
              src="/images/potrait.png"
              alt="Portrait of Ming Kai"
              className="rounded-full object-cover aspect-square
                   w-[clamp(12rem,22vw,18rem)] ring-4 ring-purple-700/30 shadow-[0_0_60px_-20px_rgba(106,35,221,0.6)]"
            />

            {/* Text block */}
            <div className="max-w-3xl">
              {/* Hello header (responsive, gradient text) */}
              <h2
                className="font-semibold leading-tight
                     text-[clamp(2.2rem,5vw,4rem)]
                     bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-500
                     bg-clip-text text-transparent"
              >
                Hello, I am Ming Kai
              </h2>

              {/* Short summary */}
              <p className="mt-4 text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-gray-200/90">
                I&#39;m a NTU Computer Science student and SRE automation intern at DBS, focused on reliability, tooling,
                and developer experience. I enjoy shipping clean UIs, automating boring work, and building gameplay systems.
              </p>

              {/* Quick chips to avoid emptiness */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Frontend (React/Next.js)',
                  'Automation',
                  'SRE / DevOps',
                  'Game Systems',
                  'UI/UX',
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-[0.85rem] bg-white/5 text-gray-200 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#resume"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg
                       bg-purple-600 hover:bg-purple-500 transition
                       text-white shadow-lg shadow-purple-900/40"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg
                       bg-white/10 hover:bg-white/15 transition
                       text-white border border-white/20 backdrop-blur"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen snap-start flex flex-col justify-center gap-12">
        <h2 className="text-[clamp(2rem,3vw,3rem)] font-extrabold text-center tracking-tight">
          My Experiences
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* === Job 1 === */}
          <article className="rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900/90 border border-white/10 p-6 shadow-lg hover:shadow-xl hover:border-purple-500/40 transition">
            {/* Header */}
            <header className="flex items-center gap-4 mb-4">
              <img src="/images/dbsicon.jpg" alt="DBS Logo" className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20" />
              <div>
                <h3 className="text-xl font-bold">DBS Bank</h3>
                <div className="mt-1 flex flex-wrap gap-2 text-sm">
                  <span className="px-2 py-1 rounded-full bg-white/10 text-gray-200">Site Reliability Engineer (Intern)</span>
                  <span className="px-2 py-1 rounded-full bg-white/5 text-gray-300">May 2025 – Dec 2025</span>
                </div>
              </div>
            </header>

            {/* Bullets – short & outcome-focused */}
            <ul className="space-y-2 leading-relaxed text-gray-200">
              <li><b>Guided workflow UI</b> for critical ops with timers/branching → faster execution & auditability.</li>
              <li><b>Automated approvals</b> on low-code platform → reduced manual effort & error rate.</li>
              <li><b>UAT for notifications</b>: designed cases, found critical bugs, unblocked release.</li>
              <li><b>ITSM requirements</b>: aligned stakeholders & clarified docs for system design.</li>
            </ul>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {["SRE", "Automation", "Low-code", "UAT", "Observability"].map(t => (
                <span key={t} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">{t}</span>
              ))}
            </div>

            {/* Show more */}
            <details className="mt-4 group">
              <summary className="cursor-pointer text-sm text-purple-300 hover:text-purple-200">
                More details
              </summary>
              <div className="mt-2 text-sm text-gray-300/90">
                Built logging hooks, status dashboards, and guardrails; documented runbooks; paired with devs on incident drills.
              </div>
            </details>
          </article>

          {/* === Job 2 === */}
          <article className="rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900/90 border border-white/10 p-6 shadow-lg hover:shadow-xl hover:border-purple-500/40 transition">
            <header className="flex items-center gap-4 mb-4">
              <img src="/images/ngeeannicon.gif" alt="Ngee Ann Logo" className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20" />
              <div>
                <h3 className="text-xl font-bold">Ngee Ann Polytechnic</h3>
                <div className="mt-1 flex flex-wrap gap-2 text-sm">
                  <span className="px-2 py-1 rounded-full bg:white/10 bg-white/10 text-gray-200">Technical Assistant</span>
                  <span className="px-2 py-1 rounded-full bg-white/5 text-gray-300">Mar 2021 – Sep 2021</span>
                </div>
              </div>
            </header>

            <ul className="space-y-2 leading-relaxed text-gray-200">
              <li><b>Computer vision</b> pipelines in Python → tracked mechanical parts reliably.</li>
              <li><b>Integrated subroutines</b> → higher accuracy & performance in real scenarios.</li>
              <li><b>Autonomous-driving sim</b> (CARLA): scripted tests for vehicle behaviors.</li>
              <li><b>DJI + OpenCV</b> research for pathfinding & ground-nav experiments.</li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {["Python", "OpenCV", "CARLA", "Algorithms", "Testing"].map(t => (
                <span key={t} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">{t}</span>
              ))}
            </div>

            <details className="mt-4 group">
              <summary className="cursor-pointer text-sm text-purple-300 hover:text-purple-200">
                More details
              </summary>
              <div className="mt-2 text-sm text-gray-300/90">
                Authored flowcharts & stress-tests; consolidated results to guide model tweaks and lab demos.
              </div>
            </details>
          </article>
        </div>
      </section>




      <section id="skills" className="mt-10">
        {/* Criss-Cross design for resume content */}
        <Skills />
      </section>

      <section id="achievements" className="mt-10">
        {/* Criss-Cross design for resume content */}
        <Achievements />
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen snap-start flex flex-col justify-center gap-8">
        <Projects />
      </section>


      {/* Contact Me */}
{/* Contact Me */}
<section
  id="contact"
  className="relative w-full snap-start h-screen overflow-hidden"
>
  {/* Starry background + gradient (now visible) */}
  <div className="absolute inset-0 z-0 star-bg" aria-hidden />

  {/* Content above stars */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full">
    <h2 className="text-5xl font-bold text-white mb-6 tracking-wide">Contact Me</h2>

    <p className="text-3xl font-extrabold text-purple-400 mb-4 animate-pulse">
      Let&apos;s Work Together!
    </p>

    <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl">
      You can reach out to me through my social links below or send me an email. I&apos;m always happy to connect!
    </p>

    <div className="flex flex-row items-center justify-center space-x-16">
      <a
        href="https://www.linkedin.com/in/ming-kai-gay-2306aa163"
        target="_blank"
        rel="noopener noreferrer"
        className="text-8xl text-blue-600 hover:text-blue-800 transform hover:scale-125 transition duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/MingKaiDev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-8xl text-gray-300 hover:text-gray-100 transform hover:scale-125 transition duration-300"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </div>
  </div>
</section>

    </main>
  );
}
