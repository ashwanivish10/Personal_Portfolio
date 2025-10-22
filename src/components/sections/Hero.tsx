<section className="relative min-h-screen flex items-center justify-center pt-20">

  {/* Background ke liye conditional logic yahan add kiya gaya hai */}
  {/* {theme === 'theme5' && (
    <ReflectBackground className="absolute inset-0 z-[-1]" />
  )} */}

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
        className="text-lg md:text-xl text-muted-foreground mb-8 min-h-[84px] md:min-h-[56px]"
        variants={itemVariants}
      >
        <span>{text}</span>
        <Cursor cursorColor='var(--primary)' />
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
            window.open("https://drive.google.com/file/d/1EUMXADt5ce85nr9OjFCyekQH2Iw7_G4h/view?usp=drive_link", "_blank");
          }}
        >
          Download Resume
        </a>
      </motion.div>
    </motion.div>
  </div>

  {/* Scroll Down Button */}
  <motion.div 
    className="absolute bottom-10 w-full flex justify-center"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 3.5, delay: 1.5 }}
  >
    <a 
      href="#Footer" 
      onClick={handleScroll}
      className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors cursor-pointer"
    >
      <span className="mb-2 text-sm">Auto Scroll Down</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </a>
  </motion.div>
</section>