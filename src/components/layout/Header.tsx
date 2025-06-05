import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when theme changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [theme]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-11/12 max-w-5xl ${
      isScrolled 
        ? 'py-3 bg-background/90 backdrop-blur-md shadow-lg' 
        : 'py-4 bg-background/50 backdrop-blur-sm'
    } rounded-full`}>
      <div className="px-6 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold">
          {


//           <div className="relative w-[55px] h-[55px] flex items-center justify-center">
//   {/* Circle background */}
//   <div className="absolute inset-0 rounded-full bg-primary"></div>

//   {/* Centered icon.svg */}
//   <img
//     src="src/components/layout/icon.svg"
//     alt="Logo"
//     width="55"
//     height="55"
//     className="relative z-10"
//   />
// </div>
<div className="relative w-[55px] h-[55px] flex items-center justify-center">
  {/* Circle background */}
  <div className="absolute inset-0 rounded-full bg-primary"></div>

  {/* Conditionally render SVG based on theme */}
  {theme === "theme5" ? (
    <img
      src="src/components/layout/hacker.svg"
      alt="Hacker Logo"
      width="55"
      height="55"
      className="relative z-10"
    />
  ) : (
    <img
      src="src/components/layout/icon.svg"
      alt="Default Logo"
      width="55"
      height="55"
      className="relative z-10"
    />
  )}
</div>

}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#" 
            className="text-sm px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              // In a real site, this would download a PDF
              // alert('Resume would download here ');
               window.location.href = "https://drive.google.com/file/d/1EUMXADt5ce85nr9OjFCyekQH2Iw7_G4h/view?usp=drive_link","_blank";
            }}
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={toggleMobileMenu}
            className="text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 bg-background/95 backdrop-blur-lg shadow-lg p-6 md:hidden rounded-2xl"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#" 
                className="button-primary text-center"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  // In a real site, this would download a PDF
                  alert('Resume would download here in a real implementation');
                }}
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;