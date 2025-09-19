import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function Home() {
  return (
    <main className="p-6">
      {/* Featured Project */}
      <section id="home">
        <h1 className="text-6xl font-bold mb-16 animate__animated animate__fadeIn">Featured</h1> {/* Increased margin bottom */}

        {/* Container with internal neon border */}
        <div className="relative w-full max-w-[99vw] mx-auto h-[95vh]">
          {/* Custom neon border */}
          <div
            className="absolute inset-0 z-10 border-4 rounded-lg"
            style={{
              borderColor: '#6a23ddff', // Neon color
              borderWidth: '10px', // Thicker border
              borderRadius: '20px', // Rounded corners
              boxShadow: '0 0 20px 10px rgba(67, 22, 194, 0.88)', // Neon glow effect
            }}
          ></div>

          {/* Video Inside the Neon Border */}
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-lg z-0" // Increased height (60vh means 60% of the viewport height)
          >
            <source src="/items/PortfolioVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>



      {/* About */}
      <section id="about" className="mt-[300px]">
        <h2 className="text-3xl font-semibold mb-8">Hello, I am Ming Kai</h2>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-center md:text-left font-serif text-lg leading-relaxed">
            <p className="mb-6">
              I&#39;m a <b>penultimate Computer Science student</b> at <b>Nanyang Technological University</b>, currently working at <b>DBS</b> as a <b>Site Reliability Engineering automation intern</b>. My primary focus is on optimizing system reliability, automating processes, and learning how to scale applications in the cloud.
            </p>
            <p className="mb-6">
              Over the past <b>5+ years</b>, I&#39;ve gained hands-on experience in a variety of areas within <b>Information Technology</b>, including:
            </p>
            <ul className="list-disc pl-8 mb-6">
              <li><b>Front-end Development</b>: Building dynamic and user-friendly web applications using technologies like React, JavaScript, and HTML/CSS.</li>
              <li><b>Back-end Development</b>: Working with databases, APIs, and server-side technologies such as Node.js and Python.</li>
              <li><b>Automation</b>: Writing scripts and tools to automate repetitive tasks, which significantly reduces manual errors and improves efficiency.</li>
              <li><b>Computer Vision</b>: Implementing image processing algorithms and machine learning models for visual data analysis.</li>
              <li><b>Web Development</b>: Creating responsive, scalable, and interactive websites and apps that meet modern standards and user needs.</li>
              <li><b>App UI/UX</b>: Focusing on designing intuitive and beautiful user interfaces for mobile and web applications.</li>
              <li><b>Game Development</b>: Creating interactive gaming experiences using Unity, C#, and other game engines.</li>
            </ul>
            <p className="mb-6">
              One of my <b>current ongoing projects</b> is a <b>Turn-Based tactical role-playing game</b> simulating <b>Fire Emblem</b>. This project has been an exciting challenge, as it involves a blend of game mechanics, artificial intelligence, and data structures. It has allowed me to leverage many of the skills I&#39;ve developed, from <b>game development</b> to <b>project management</b> and <b>collaborative teamwork</b>.
            </p>
            <p className="mb-6">
              During my downtime, I&#39;m passionate about exploring the culinary world, creating new dishes, and improving my skills in the kitchen. I also enjoy <b>mall-hopping</b>, <b>working out</b> in the gym, and, of course, playing games to unwind and stay connected with the latest trends in gaming.
            </p>
            <p className="mb-6">
              I&#39;m always seeking new challenges to improve my knowledge and skills. Whether it&#39;s <b>learning new technologies</b> or tackling <b>complex problems</b>, I am committed to becoming a versatile developer and <b>problem-solver</b>.
            </p>
          </div>


          <img
            src="/images/potrait.png"
            alt="Ming Kai"
            className="rounded-full w-128 h-128 object-cover md:ml-6"
          />
        </div>
      </section>
      
      <section id="experience" className="mt-10">
        <h2 className="text-3xl font-semibold">DBS Bank</h2>
        {/* Criss-Cross design for resume content */}
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
      <section id="projects" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <div className="project-card hover:scale-105 transition-all">
          <img src="/images/project1.gif" alt="Project 1" className="w-full" />
          <h3>Project 1</h3>
        </div>
        {/* More projects */}
      </section>

      {/* Contact Me */}
      <section
        id="contact"
        className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
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
