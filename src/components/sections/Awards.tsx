import { awardsData } from "@/lib/data";
import { FaCode, FaTrophy } from "react-icons/fa";

const AwardIcon = ({ iconName }: { iconName: string }) => {
  if (iconName === 'trophy') {
    return <FaTrophy />;
  }
  return <FaCode />;
};

const Awards = () => {
  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Achievements</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {awardsData.map((award, index) => (
            // The card is now a "group" to control the hover effect on its children
            <div key={index} className="group relative rounded-lg bg-gray-800/60 p-6 backdrop-blur-sm transition-all duration-300 overflow-hidden">
              
              {/* This is the new gradient background. It's normally hidden... */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              {/* All content sits on top of the gradient background */}
              <div className="relative">
                {/* Icon */}
                <div className="text-sky-300 text-4xl mb-4 transition-colors duration-300 group-hover:text-white">
                  <AwardIcon iconName={award.icon} />
                </div>
                {/* Text Content */}
                <div>
                  <h3 className="text-lg font-bold text-white">{award.title}</h3>
                  {/* The description text is now a brighter color for better contrast */}
                  <p className="text-gray-300 mt-2 transition-colors duration-300 group-hover:text-white">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;