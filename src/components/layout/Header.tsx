// import { useState, useEffect } from 'react';
// import { Menu, X, Moon, Sun, Laptop } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useTheme } from '../../context/ThemeContext';
// import ThemeToggle from '../ui/ThemeToggle';
// import hackerLogo from './hacker.svg';
// import defaultLogo from './icon.svg';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { theme } = useTheme();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when theme changes
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [theme]);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const navLinks = [
//     { name: 'Home', href: '#' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-11/12 max-w-5xl ${
//       isScrolled 
//         ? 'py-3 bg-background/90 backdrop-blur-md shadow-lg' 
//         : 'py-4 bg-background/50 backdrop-blur-sm'
//     } rounded-full`}>
//       <div className="px-6 flex justify-between items-center">
//         <a href="#" className="text-xl md:text-2xl font-bold">
//           {



// <div className="relative w-[55px] h-[55px] flex items-center justify-center">
//   {/* Circle background */}
//   <div className="absolute inset-0 rounded-full bg-primary"></div>

//   {/* Conditionally render SVG based on theme */}
//   {theme === "theme5" ? (
//   <img
//     src={hackerLogo}
//     alt="Hacker Logo"
//     width="55"
//     height="55"
//     className="relative z-10"
//   />
// ) : (
//   <img
//     src={defaultLogo}
//     alt="Default Logo"
//     width="55"
//     height="55"
//     className="relative z-10"
//   />
// )}

// </div>

// }
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="nav-link"
//             >
//               {link.name}
//             </a>
//           ))}
//           <a 
//             href="#" 
//             className="text-sm px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-all duration-300"
//             onClick={(e) => {
//               e.preventDefault();
//               // In a real site, this would download a PDF
//               // alert('Resume would download here ');
//                window.location.href = "https://drive.google.com/file/d/1EUMXADt5ce85nr9OjFCyekQH2Iw7_G4h/view?usp=drive_link","_blank";
//             }}
//           >
//             Resume
//           </a>
//           <ThemeToggle />
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <div className="flex md:hidden items-center gap-4">
//           <ThemeToggle />
//           <button 
//             onClick={toggleMobileMenu}
//             className="text-foreground focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? (
//               <X size={24} />
//             ) : (
//               <Menu size={24} />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.2 }}
//             className="absolute top-full left-0 right-0 mt-4 bg-background/95 backdrop-blur-lg shadow-lg p-6 md:hidden rounded-2xl"
//           >
//             <nav className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="nav-link text-lg"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <a 
//                 href="#" 
//                 className="button-primary text-center"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setIsMobileMenuOpen(false);
//                   // In a real site, this would download a PDF
//                   alert('Resume would download here in a real implementation');
//                 }}
//               >
//                 Resume
//               </a>
//             </nav>
//           </motion.div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



import { useState, useEffect, useRef } from 'react';
// ✨ 1. Naye imports add kiye gaye
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';
import hackerLogo from './hacker.svg';
import defaultLogo from './icon.svg';

// ✨ 2. Overlay ke liye naye constants
const socialLinks = [
  { name: 'GitHub', icon: <Github size={24} />, href: 'https://github.com/ashwanivish10' },
  { name: 'LinkedIn', icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/ashwani-vishwakarma-26888421b/' },
  { name: 'Twitter', icon: <Twitter size={24} />, href: 'https://twitter.com/ashwanivish10' },
];

const menuOverlayVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.4, ease: "easeInOut" }
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.4, ease: "easeInOut" }
  }
};

const menuLinksContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const menuLinkItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Scroll logic (hide/show header)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✨ 3. Naya Effect: Background scroll ko lock karne ke liye
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

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
    // ✨ 4. React Fragment ka istemal taaki header aur overlay dono return kar sakein
    <>
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-11/12 max-w-5xl ${
        isScrolled 
          ? 'py-3 bg-background/90 backdrop-blur-md shadow-lg' 
          : 'py-4 bg-background/50 backdrop-blur-sm'
        } rounded-full
        ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}`
      }>
        <div className="px-6 flex justify-between items-center">
          <a href="#" className="text-xl md:text-2xl font-bold">
            <div className="relative w-[55px] h-[55px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-primary"></div>
              {theme === "theme5" ? (
                <img
                  src={hackerLogo}
                  alt="Hacker Logo"
                  width="55"
                  height="55"
                  className="relative z-10"
                />
              ) : (
                <img
                  src={defaultLogo}
                  alt="Default Logo"
                  width="55"
                  height="55"
                  className="relative z-10"
                />
              )}
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <a  
              href="https://drive.google.com/file/d/1EUMXADt5ce85nr9OjFCyekQH2Iw7_G4h/view?usp=drive_link"  
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-all duration-300"
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
              className="text-foreground focus:outline-none relative z-10" // z-10 add kiya
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* ✨ 5. Puraana dropdown menu yahan se HATA diya gaya hai */}
        </div>
      </header>
      
      {/* ✨ 6. Naya Full-screen Overlay Menu (Header ke bahar) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col justify-center p-6 md:hidden"
            variants={menuOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Middle Section: Navigation Links */}
            <motion.nav
              className="flex flex-col items-center justify-center"
              variants={menuLinksContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <ul className="space-y-8 text-center">
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={menuLinkItemVariants}>
                    <a
                      href={link.href}
                      className="text-3xl font-semibold text-foreground/80 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)} // Link click par menu band karein
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
                
                {/* Resume Link */}
                <motion.li variants={menuLinkItemVariants}>
                  <a
                    href="https://drive.google.com/file/d/1EUMXADt5ce85nr9OjFCyekQH2Iw7_G4h/view?usp=drive_link"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button-primary" // Style ko button jaisa rakha hai
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Resume
                  </a>
                </motion.li>
              </ul>
            </motion.nav>

            {/* Bottom Section: Social Links */}
            <motion.div 
              className="flex justify-center gap-8 absolute bottom-16 left-0 right-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;