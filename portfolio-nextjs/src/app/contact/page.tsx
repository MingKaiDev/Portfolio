export default function Contact() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form
        action="https://formspree.io/f/your-id"
        method="POST"
        className="flex flex-col gap-4 max-w-md"
      >
        <input type="text" name="name" required placeholder="Your Name" className="border p-2 rounded" />
        <input type="email" name="email" required placeholder="Your Email" className="border p-2 rounded" />
        <textarea name="message" required placeholder="Your Message" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </form>
    </main>
  );
}
