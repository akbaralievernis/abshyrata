import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  url: string;
  github: string;
}

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.title} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
          <h3 className="text-base font-semibold">{project.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-blue-600 dark:text-blue-400">
            <Link href={project.url}>Сайт проекта</Link>
            <Link href={project.github}>GitHub</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
