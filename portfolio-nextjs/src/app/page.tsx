export default function Home() {
  return (
    <main className="p-6">
      {/* Featured Project */}
      <section id="home">
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">Featured Project</h1>
        <video autoPlay loop className="w-full">
          <source src="path_to_project_video.mp4" type="video/mp4" />
        </video>
      </section>

      {/* About */}
      <section id="about">
        <h2 className="text-3xl font-semibold mb-4">Hello, I am Ming Kai</h2>
        <div className="flex">
          <img src="/images/selfie.jpg" alt="Ming Kai" className="rounded-full w-32 h-32 mr-6" />
          <p className="text-lg">I am a Computer Science student at NTU, specializing in Data Engineering and DevOps...</p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <div className="project-card hover:scale-105 transition-all">
          <img src="/images/project1.gif" alt="Project 1" className="w-full" />
          <h3>Project 1</h3>
        </div>
        {/* More projects */}
      </section>

      {/* Resume */}
      <section id="resume" className="mt-10">
        <h2 className="text-3xl font-semibold">My Education</h2>
        {/* Criss-Cross design for resume content */}
        <div className="flex">
          <img src="/images/education1.jpg" className="w-48" />
          <p className="ml-6">Details about your first semester...</p>
        </div>
      </section>

      {/* Contact Me */}
      <section id="contact" className="mt-10">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <div className="flex">
          <a href="https://github.com/MingKaiDev" className="mr-4">GitHub</a>
          <a href="https://www.linkedin.com/in/mingkai/" className="mr-4">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
