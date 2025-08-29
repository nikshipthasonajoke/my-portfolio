import { aboutData } from "@/lib/data";
import { Player } from "@lottiefiles/react-lottie-player";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">{aboutData.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            {/* Using an <img> tag as it is more accessible than the Lottie player */}
            <img
              src="/cat-image.jpg"
              // Updated, more descriptive alt text for screen readers
              alt="An illustration of a black cat with glasses, focused intently on a laptop screen"
              className="w-48 h-48 rounded-full object-cover shadow-lg border-2 border-sky-400/30 focusable"
            />
          </div>
          <div className="md:col-span-2 bg-gray-800/50 rounded-lg p-8 shadow-lg backdrop-blur-sm">
            <p className="text-base leading-relaxed">
              {aboutData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;