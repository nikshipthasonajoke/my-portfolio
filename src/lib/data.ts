import { FaEnvelope, FaGithub, FaLinkedin, FaReact, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaTrophy, FaCode } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiMysql, SiPandas, SiScikitlearn, SiFlask, SiPhp, SiNumpy } from "react-icons/si";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export const heroData = {
  name: "Nikshiptha Sonajoke",
  title: "Aspiring Software Developer | Machine Learning | Web Development",
  socials: [
    { name: "GitHub", url: "https://github.com/nikshipthasonajoke", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nikshiptha-sonajoke-89b090257/", icon: FaLinkedin },
    { name: "Email", url: "mailto:niksonajoke@gmail.com", icon: FaEnvelope },
  ],
  resumeUrl: "/Nikshiptha_Sonajoke_Resume.pdf",
};

export const aboutData = {
  title: "About Me",
  description: "I am a passionate and dedicated Computer Science student at IIT Jodhpur with a strong foundation in Data Structures and Algorithms, Machine Learning, and Web Development. Driven by curiosity, I enjoy building things that truly work and make sense. I thrive on applying this mindset to solve complex, real-world challenges. I am actively seeking opportunities to contribute, learn, and grow in the tech industry and look forward to collaborating with like-minded individuals.",
};

export const experienceData = [
  {
    role: "Machine Learning Intern",
    company: "IndianOil Corporation",
    date: "Summer 2024 | Guwahati Refinery",
    description: "During my internship at IndianOil, my primary goal was to enhance worksite safety using my machine learning skills. I took ownership of a computer vision project where I developed and deployed a real-time helmet detection system. I fine-tuned a YOLOv8 model on a large, custom dataset of over 5,000 frames, achieving over 95% accuracy at 30 FPS. A key part of my contribution was automating the entire data logging process, which created detailed incident reports with timestamps and snapshots. My system significantly reduced the need for manual monitoring and created a more responsive safety protocol with real-time alerts.",
    technologies: ["Python", "YOLOv8", "OpenCV", "Roboflow", "Google Colab"],
  },
];

export const projectsData = [
  // ... your projects data is unchanged ...
];

export const awardsData = [
    {
        icon: "code",
        title: "300+ LeetCode Problems Solved",
        description: "Focused on mastering data structures and algorithms through consistent problem-solving."
    },
    {
        icon: "trophy",
        title: "Competitive JEE Advanced Rank",
        description: "Secured a competitive rank among over 160,000 candidates in one of India's most challenging engineering entrance exams."
    }
];

export const techStackData = {
  "Programming": [
    { name: "Python", icon: FaPython },
    { name: "C++", icon: SiCplusplus },
    { name: "JavaScript", icon: SiJavascript },
    { name: "MySQL", icon: SiMysql },
  ],
  "Web Development": [
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "HTML", icon: FaHtml5 }, // UPDATED NAME
    { name: "CSS", icon: FaCss3Alt }, // UPDATED NAME
    { name: "Flask", icon: SiFlask },
    { name: "PHP", icon: SiPhp },
  ],
  "Machine Learning": [
    { name: "Numpy", icon: SiNumpy },
    { name: "Pandas", icon: SiPandas },
    { name: "Scikit-Learn", icon: SiScikitlearn },
  ],
};