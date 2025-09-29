"use client";
import { useState } from "react";
import PDFModal from "@/components/PDFModal";

export default function AboutClient() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const pdfSrc = "/resume/MKResume.pdf";

  return (
    <section id="about" className="min-h-screen snap-start relative flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(106,35,221,0.25),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:gap-14 md:grid-cols-[auto,1fr] items-center justify-items-center md:justify-items-start">
          <img
            src="/images/potrait.png"
            alt="Portrait of Ming Kai"
            className="rounded-full object-cover aspect-square w-[clamp(10rem,22vw,18rem)] ring-4 ring-purple-700/30 shadow-[0_0_60px_-20px_rgba(106,35,221,0.6)]"
          />

          <div className="max-w-3xl text-center md:text-left mt-6 md:mt-0">
            <h2 className="font-semibold leading-tight text-[clamp(2.2rem,5vw,4rem)] bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
              Hello, I am Ming Kai
            </h2>

            <p className="mt-4 text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-gray-200/90">
              I&#39;m a NTU Computer Science student with a strong interest in software engineering and DevOps. I am actively
              seeking opportunities to deepen my expertise through projects and I am passionate about building efficient and scalable solutions
              to expand my technical skill set.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
              {['Web Development', 'Automation', 'SRE / DevOps', 'Game Development', 'UI/UX'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-[0.85rem] bg-white/5 text-gray-200 border border-white/10">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition text-white shadow-lg shadow-purple-900/40"
              >
                View Resume
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 transition text-white border border-white/20 backdrop-blur"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <PDFModal open={resumeOpen} onClose={() => setResumeOpen(false)} src={pdfSrc} title="MK Resume" />
    </section>
  );
}
