import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-900" id="projects">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="p-6 bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" className="text-pink-400 underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  )
}