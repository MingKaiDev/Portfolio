import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'Description for Project One',
    image: '/images/project1.png',
    link: 'https://github.com/yourgithub/project1',
  },
  {
    title: 'Project Two',
    description: 'Description for Project Two',
    image: '/images/project2.png',
    link: 'https://github.com/yourgithub/project2',
  },
];

export default function Projects() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </main>
  );
}
