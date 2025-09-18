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
          <p className="ml-6">Placeholder</p>
        </div>
      </section>

      {/* Contact Me */}
      <section id="contact" className="mt-10">
  <h2 className="text-3xl font-semibold mb-6">Contact Me</h2> {/* Added margin-bottom to separate title and icons */}

  {/* Container for the icons */}
  <div className="flex flex-col items-center space-y-6">
    {/* LinkedIn and GitHub Icons */}
    <a
      href="https://www.linkedin.com/in/ming-kai-gay-2306aa163"
      target="_blank"
      rel="noopener noreferrer"
      className="text-5xl text-blue-600 hover:text-blue-800 transition-all duration-300"
    >
      <FaLinkedin /> {/* Larger LinkedIn Icon */}
    </a>
    <a
      href="https://github.com/MingKaiDev"
      target="_blank"
      rel="noopener noreferrer"
      className="text-5xl text-gray-800 hover:text-gray-600 transition-all duration-300"
    >
      <FaGithub /> {/* Larger GitHub Icon */}
    </a>
  </div>
</section>

    </main>
  );
}
