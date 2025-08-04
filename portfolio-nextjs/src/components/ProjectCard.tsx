type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectCard({ title, description, image, link }: Props) {
  return (
    <div className="border rounded-lg shadow p-4">
      <img src={image} alt={title} className="rounded mb-2" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a href={link} className="text-blue-500 underline mt-2 inline-block" target="_blank">
        View on GitHub
      </a>
    </div>
  );
}
