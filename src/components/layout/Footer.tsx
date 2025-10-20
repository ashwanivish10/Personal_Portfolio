// import { Github, Linkedin, Twitter, Mail } from 'lucide-react';


// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   const socialLinks = [
//     { 
//       name: 'GitHub', 
//       icon: <Github size={20} />, 
//       href: 'https://github.com/ashwani' 
//     },
//     { 
//       name: 'LinkedIn', 
//       icon: <Linkedin size={20} />, 
//       href: 'https://linkedin.com/in/ashwani' 
//     },
//     { 
//       name: 'Twitter', 
//       icon: <Twitter size={20} />, 
//       href: 'https://twitter.com/ashwani' 
//     },
//     { 
//       name: 'Email', 
//       icon: <Mail size={20} />, 
//       href: 'mailto:ashwani@example.com' 
//     },
//   ];

//   return (
//     <footer id='Footer' className="bg-background-secondary py-12 border-t border-border transition-colors duration-500">
//       <div className="container">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="col-span-1 md:col-span-2">
//             <h3 className="text-2xl font-bold mb-4">
//               <span className="text-primary">Ashwani</span>
//               <span className="text-foreground">.</span>
//             </h3>
//             <p className="text-muted-foreground mb-4 max-w-md">
//               Frontend developer specializing in creating beautiful, responsive web applications with modern technologies.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="social-icon"
//                   aria-label={link.name}
//                 >
//                   {link.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           <div>
//             <h4 className="font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">About</a></li>
//               <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">Projects</a></li>
//               <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300">Skills</a></li>
//               <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="font-semibold mb-4">Contact</h4>
//             <ul className="space-y-2 text-muted-foreground">
//               <li>ashwani@example.com</li>
//               <li>Noidaa, India</li>
//               <li className="mt-4">
//                 <a 
//                   href="#" 
//                   className="inline-block button-outline"
//                   onClick={() => {
//                     // e.preventDefault();
//                     // In a real site, this would download a PDF
//                     // alert('Resume would download here ');
//                     window.location.href = "https://drive.google.com/file/d/1EUMXADt5ce85nr9OjFCyekQH2Iw7_G4h/view?usp=drive_link"; 
//                   }}
//                 >
//                   Download Resume
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="mt-12 pt-8 border-t border-border/50">
//           <p className="text-center text-muted-foreground">
//             © {currentYear} Ashwani Vishwakarma. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // State for the visitor count
  const [visitorCount, setVisitorCount] = useState('...'); 

  // Effect to fetch the count from your API
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/counter');
        if (!response.ok) {
          throw new Error('API response was not ok');
        }
        const data = await response.json();
        setVisitorCount(data.views);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
        setVisitorCount('N/A'); 
      }
    };

    fetchCount();
  }, []); 

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github size={20} />, 
      href: 'https://github.com/ashwanivish10'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      href: 'https://www.linkedin.com/in/ashwani-vishwakarma-26888421b/'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter size={20} />, 
      href: 'https://twitter.com/ashwanivish10'
    },
    { 
      name: 'Email', 
      icon: <Mail size={20} />, 
      href: 'mailto:ashwanivishwakarma1101@gmail.com'
    },
  ];

  return (
    <footer id='Footer' className="bg-background-secondary py-16 border-t border-border transition-colors duration-500">
      <div className="container">
        {/* --- CHANGE: Grid layout badal kar 3 columns kar diya gaya hai --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* --- CHANGE 1: Name, Description, aur Icons ek Card mein --- */}
          <div className="md:col-span-2 lg:col-span-1">
            {/* Yeh naya card container hai */}
            <div className="bg-background p-6 rounded-lg shadow-md border border-border/10 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary">Ashwani</span>
                <span className="text-foreground">.</span>
              </h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Frontend developer specializing in creating beautiful, responsive web applications with modern technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon" // Assuming .social-icon styles this
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* --- Column 2: Quick Links --- */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">Projects</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300">Skills</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* --- Column 3: Contact --- */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>ashwanivishwakarma1101@gmail.com</li>
              <li>Noida, India</li>
              <li className="mt-5">
                <a 
                  href="https://drive.google.com/file/d/1EUMXADt5ce85nr9OjFCyekQH2Iw7_G4h/view?usp=drive_link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block button-outline"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* --- CHANGE 2: Copyright aur Visitor Count ko clean karke neeche move kar diya hai --- */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-muted-foreground text-center sm:text-left mb-2 sm:mb-0">
            © {currentYear} Ashwani Vishwakarma | Engineered with 💻 + ❤️
          </p>
          <div className="text-muted-foreground">
            Visitors: <strong className="text-foreground">{visitorCount}</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;