import { experienceData } from "@/lib/data";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900/70">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden md:flex">
              <div className="md:w-1/3 bg-gray-800 p-6 border-b-2 md:border-b-0 md:border-r-2 border-sky-900/50">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="font-semibold text-sky-400 mt-1">{exp.company}</p>
                <p className="text-sm text-gray-400 mt-2">{exp.date}</p>
              </div>
              <div className="md:w-2/3 p-6">
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="bg-sky-900/50 text-sky-300 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {tech}
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

export default Experience;