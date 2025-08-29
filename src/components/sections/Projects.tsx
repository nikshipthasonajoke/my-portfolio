import { projectsData } from "@/lib/data";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div key={project.title} className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 backdrop-blur-sm">
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400">
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;