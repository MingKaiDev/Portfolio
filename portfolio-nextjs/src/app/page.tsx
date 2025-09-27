"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import dynamic from "next/dynamic";

import Starfield from "@/components/Starfield";
import { Featured } from "@/components/Featured";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import ExperienceCard from "@/components/ExperienceCard";

const AboutClient = dynamic(() => import("@/components/About.client"), { ssr: false });

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory p-6">

      {/* Featured Project */}
      <section
        id="home"
        className="min-h-screen snap-start relative flex flex-col justify-center gap-6 overflow-hidden"
      >
        <Starfield density={0.14} maxSpeed={0.05} />

        <h1 className="text-[clamp(2.25rem,6vw,5rem)] font-bold">Featured</h1>

        {/* Responsive media frame */}
        <Featured />
      </section>


      {/* About */}

      <AboutClient />

      { /*Experience */}
      <section id="experience" className="min-h-screen snap-start flex flex-col justify-center gap-12">
        <h2 className="text-[clamp(2rem,3vw,3rem)] font-extrabold text-center tracking-tight">
          My Experiences
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ExperienceCard
            logo="/images/dbsicon.jpg"
            company="DBS Bank"
            role="Site Reliability Engineer (Intern)"
            dates="May 2025 – Dec 2025"
            bullets={[
              "Guided workflow UI for critical ops with timers/branching → faster execution & auditability.",
              "Automated approvals on low-code platform → reduced manual effort & error rate.",
              "UAT for notifications: designed cases, found critical bugs, unblocked release.",
              "ITSM requirements: aligned stakeholders & clarified docs for system design.",
            ]}
            tags={["SRE", "Automation", "Low-code", "UAT", "Observability"]}
            details="Built logging hooks, status dashboards, and guardrails; documented runbooks; paired with devs on incident drills."
          />

          <ExperienceCard
            logo="/images/ngeeannicon.gif"
            company="Ngee Ann Polytechnic"
            role="Technical Assistant"
            dates="Mar 2021 – Sep 2021"
            bullets={[
              "Computer vision pipelines in Python → tracked mechanical parts reliably.",
              "Integrated subroutines → higher accuracy & performance in real scenarios.",
              "Autonomous-driving sim (CARLA): scripted tests for vehicle behaviors.",
              "DJI + OpenCV research for pathfinding & ground-nav experiments.",
            ]}
            tags={["Python", "OpenCV", "CARLA", "Algorithms", "Testing"]}
            details="Authored flowcharts & stress-tests; consolidated results to guide model tweaks and lab demos."
          />
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
<section
  id="contact"
  className="relative w-full snap-start h-screen overflow-hidden"
>
  {/* Starry background + gradient */}
  <div className="absolute inset-0 z-0 star-bg" aria-hidden />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
    <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-bold text-white mb-6 tracking-wide text-center">
      Contact Me
    </h2>

    <p className="text-[clamp(1.5rem,4vw,2rem)] font-extrabold text-purple-400 mb-4 animate-pulse text-center">
      Let&apos;s Work Together!
    </p>

    <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-300 mb-12 text-center max-w-xl">
      You can reach out to me through my social links below or send me an email. 
      I&apos;m always happy to connect!
    </p>

    {/* Social icons */}
    <div className="flex flex-row items-center justify-center gap-10 sm:gap-16">
      <a
        href="https://www.linkedin.com/in/ming-kai-gay-2306aa163"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[clamp(3rem,8vw,5rem)] text-blue-600 hover:text-blue-800 transform hover:scale-110 transition duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/MingKaiDev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[clamp(3rem,8vw,5rem)] text-gray-300 hover:text-gray-100 transform hover:scale-110 transition duration-300"
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
