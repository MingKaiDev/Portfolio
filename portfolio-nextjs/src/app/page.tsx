export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold mb-4">Hi, I am [Your Name]</h1>
      <p className="text-lg mb-6">Welcome to my portfolio.</p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Featured Project</h2>
        <div className="border rounded-lg shadow p-4 max-w-md">
          <img src="/images/project1.png" alt="Featured" className="rounded mb-2" />
          <h3 className="text-xl font-bold">Project Title</h3>
          <p className="text-sm text-gray-600">Short description of the project...</p>
          <a href="https://github.com/yourgithub/project" className="text-blue-500 underline mt-2 inline-block">
            View on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
