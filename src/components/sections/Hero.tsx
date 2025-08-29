import { heroData } from "@/lib/data";

const Hero = () => {
  return (
    <section id="home" className="pt-40 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Hi, I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
            {heroData.name}
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          {heroData.title}
        </p>
        
        {/* UPDATED: This section now includes the resume button */}
        <div className="mt-8 flex justify-center items-center flex-wrap gap-6">
          {heroData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-gray-400 hover:text-sky-400 transition-colors text-3xl"
            >
              <social.icon />
            </a>
          ))}
          <a
            href={heroData.resumeUrl}
            download="Nikshiptha_Sonajoke_Resume.pdf"
            className="bg-sky-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-600 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;