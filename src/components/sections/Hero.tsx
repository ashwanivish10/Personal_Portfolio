import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github size={20} />, 
      href: 'https://github.com/ashwanivish10' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      href: 'https://linkedin.com/in/ashwani-vish11' 
    },
    { 
      name: 'Twitter', 
      icon: <Twitter size={20} />, 
      href: 'https://twitter.com/ashwani' 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-accent/10 blur-[120px]" />
      </div>
      
      {/* Social Icons */}
      <motion.div 
        className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-background/20 backdrop-blur-md rounded-full -m-3" />
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 social-icon transform hover:scale-110 transition-transform"
            aria-label={link.name}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
      
      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            variants={itemVariants}
          >
            <span className="font-medium">Frontend Developer</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-primary">Ashwani</span> Vishwakarma
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8"
            variants={itemVariants}
          >
            I build beautiful, responsive web applications with modern technologies.
            Specializing in creating engaging user experiences with clean, efficient code.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <a href="#contact" className="button-primary">
              Let's Talk
            </a>
            <a 
              href="#" 
              className="button-outline"
              onClick={(e) => {
                e.preventDefault();
                // In a real site, this would download a PDF
                // alert('Resume would download here');
                  window.open("https://drive.google.com/file/d/1EUMXADt5ce85nr9OjFCyekQH2Iw7_G4h/view?usp=drive_link", 
      "_blank");
              }}
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          delay: 1.5
        }}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;