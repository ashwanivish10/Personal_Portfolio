import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useTheme } from '../../context/ThemeContext';
import ReflectBackground from '../ui/reflect-background';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Smooth Scroll Logic
let animationFrameId;
const interruptScroll = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('wheel', interruptScroll);
    window.removeEventListener('touchstart', interruptScroll);
    window.removeEventListener('keydown', interruptScroll);
  }
};

const smoothScrollTo = (targetId, duration) => {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  window.addEventListener('wheel', interruptScroll);
  window.addEventListener('touchstart', interruptScroll);
  window.addEventListener('keydown', interruptScroll);

  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    if (timeElapsed < duration) {
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      animationFrameId = requestAnimationFrame(animation);
    } else {
      window.removeEventListener('wheel', interruptScroll);
      window.removeEventListener('touchstart', interruptScroll);
      window.removeEventListener('keydown', interruptScroll);
    }
  };

  animationFrameId = requestAnimationFrame(animation);
};

const handleScroll = (e) => {
  e.preventDefault();
  smoothScrollTo('Footer', 40000);
};

// === Hero Component ===
const Hero = () => {
  const { theme } = useTheme();

  const [text] = useTypewriter({
    words: [
      'I build beautiful, responsive web applications.',
      'I specialize in creating engaging user experiences.',
      'I love turning ideas into clean, efficient code.',
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      
      {/* Optional Background Effect (Enable if needed) */}
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
                window.open(
                  "https://drive.google.com/file/d/1EUMXADt5ce85nr9OjFCyekQH2Iw7_G4h/view?usp=drive_link",
                  "_blank"
                );
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
  );
};

export default Hero;