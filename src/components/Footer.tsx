const Footer = () => {
  return (
    <footer id="contact" className="border-t border-gray-800">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          I'm currently looking for new opportunities and would love to hear from you. 
          Feel free to send me an email or download my resume.
        </p>
        <div className="flex justify-center items-center flex-wrap gap-6">
          <a 
            href="mailto:niksonajoke@gmail.com"
            className="bg-sky-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-600 transition-colors focusable" // Added focusable
          >
            Send an Email
          </a>
          <a
            href="/Nikshiptha_Sonajoke_Resume.pdf"
            download="Nikshiptha_Sonajoke_Resume.pdf"
            className="border-2 border-gray-600 text-gray-300 font-bold py-3 px-8 rounded-lg hover:border-sky-500 hover:text-white transition-colors focusable" // Added focusable
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="py-6 border-t border-gray-800">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; 2024 Nikshiptha Sonajoke. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;