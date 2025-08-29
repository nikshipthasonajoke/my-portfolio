import { techStackData } from "@/lib/data";

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">My Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(techStackData).map(([category, techs]) => (
            <div key={category} className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-4">
                {techs.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="flex cursor-pointer items-center space-x-2 rounded-md bg-gray-700/50 p-2 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-sky-400/20"
                  >
                    {tech.icon && <tech.icon className="text-sky-400 text-2xl" />}
                    <span className="text-gray-200">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;