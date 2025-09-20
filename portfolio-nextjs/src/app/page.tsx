import { FaLinkedin, FaGithub } from "react-icons/fa";
import Starfield from "../components/StarField";


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



      <section id="experience" className="min-h-screen snap-start flex flex-col justify-center gap-10">
        <h2 className="text-4xl font-bold text-center">My Experiences</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Job 1 card */}
          <div className="bg-gray-800 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-2">
              <img src="/images/dbsicon.jpg" alt="DBS Logo" className="w-14 h-14 rounded-full object-cover" />
              <h3 className="text-2xl font-bold">DBS Bank</h3>
            </div>
            <p className="text-lg font-semibold text-gray-300">Site Reliability Engineer (Intern)</p>
            <p className="text-lg  text-gray-300">May 2025 to Dec 2025</p>
            <hr className="border-gray-600 my-4" />
            <ul className="list-disc list-inside space-y-2">
              <li>Temp</li>
              <li>Temp</li>
              <li>Temp</li>
              <li>Temp</li>
            </ul>
          </div>

          {/* Job 2 card */}
          <div className="bg-gray-800 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-2">
              <img src="/images/ngeeannicon.gif" alt="Ngee Ann Logo" className="w-14 h-14 rounded-full object-cover" />
              <h3 className="text-2xl font-bold">Ngee Ann Polytechnic</h3>
            </div>
            <p className="text-lg font-semibold text-gray-300">Technical Assistant</p>
            <hr className="border-gray-600 my-4" />
            <ul className="list-disc list-inside space-y-2">
              <li>Temp</li>
              <li>Temp</li>
              <li>Temp</li>
              <li>Temp</li>
            </ul>
          </div>
        </div>
      </section>



      <section id="skills" className="mt-10">
        <h2 className="text-3xl font-semibold">Smoke</h2>
        {/* Criss-Cross design for resume content */}
      </section>

      <section id="achievements" className="mt-10">
        <h2 className="text-3xl font-semibold">Achievement</h2>
        {/* Criss-Cross design for resume content */}
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen snap-start flex flex-col justify-center gap-8">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="project-card hover:scale-105 transition-all">
            <img src="/images/project1.gif" alt="Project 1" className="w-full rounded-lg" />
            <h3 className="mt-2 font-semibold">Project 1</h3>
          </div>
          {/* more cards */}
        </div>
      </section>


      {/* Contact Me */}
      <section
        id="contact"
        className="relative w-full snap-start h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-white mb-6 tracking-wide">Contact Me</h2>

        {/* Attention Grabber */}
        <p className="text-3xl font-extrabold text-purple-500 mb-4 animate-pulse">
          Let&apos;s Work Together!
        </p>

        {/* Short Description */}
        <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl">
          You can reach out to me through my social links below or send me an email. I&apos;m always happy to connect!
        </p>

        {/* Social Icons */}
        <div className="flex flex-row items-center justify-center space-x-16">
          <a
            href="https://www.linkedin.com/in/ming-kai-gay-2306aa163"
            target="_blank"
            rel="noopener noreferrer"
            className="text-8xl text-blue-600 hover:text-blue-800 transform hover:scale-125 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MingKaiDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-8xl text-gray-300 hover:text-gray-100 transform hover:scale-125 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Optional decorative stars or shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {/* Random stars as circles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-50"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

    </main>
  );
}
