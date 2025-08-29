import { aboutData } from "@/lib/data";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">{aboutData.title}</h2>
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Column 1: Static Cat Picture */}
          <div className="md:col-span-1 flex justify-center">
            {/* THIS IS THE CRITICAL LINE, NOW MATCHING YOUR NEW, CORRECT FILENAME */}
            <img 
              src="/cat-image.jpg" 
              alt="A cat with glasses illustration"
              className="w-48 h-48 rounded-full object-cover shadow-lg border-2 border-sky-400/30"
            />
          </div>

          {/* Column 2: Description Text */}
          <div className="md:col-span-2 bg-gray-800/50 rounded-lg p-8 shadow-lg backdrop-blur-sm">
            <p className="text-base leading-relaxed text-gray-300">
              {aboutData.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;