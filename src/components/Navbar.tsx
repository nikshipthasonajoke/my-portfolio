import { navLinks } from "@/lib/data";

type NavbarProps = {
  activeSection: string;
};

const Navbar = ({ activeSection }: NavbarProps) => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white focusable">
          Nikshiptha.
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            const isActive = link.href === `#${activeSection}`;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link text-gray-300 transition-colors hover:text-white ${isActive ? "nav-link-active" : ""} focusable p-1`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            // UPDATED COLORS for better contrast
            className="bg-sky-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors focusable"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;