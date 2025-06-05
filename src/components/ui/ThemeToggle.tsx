import { useState, useEffect } from 'react';
import { Moon, Sun, PartyPopper, Shell, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import HackerPopup from '../common/HackerPopup'; // ✅ correct import path

const ThemeToggle = () => {
  const { theme, cycleTheme } = useTheme();
  const [isRotating, setIsRotating] = useState(false);
  const [showHackerPopup, setShowHackerPopup] = useState(false);

  const handleThemeChange = () => {
    setIsRotating(true);
    cycleTheme();
  };

  useEffect(() => {
    if (isRotating) {
      const timer = setTimeout(() => setIsRotating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isRotating]);

  useEffect(() => {
    if (theme === 'theme5') {
      setShowHackerPopup(true);
      const timer = setTimeout(() => setShowHackerPopup(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [theme]);

  const getThemeIcon = () => {
    switch (theme) {
      case 'theme1':
        return <Sun size={20} />;
      case 'theme2':
        return <PartyPopper size={20} />;
      case 'theme3':
        return <Moon size={20} />;
      case 'theme4':
        return <Shell size={20} />;
      case 'theme5':
        return <Cpu size={20} />;
      default:
        return <Sun size={20} />;
    }
  };

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleThemeChange}
        className="w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:text-primary bg-background-secondary hover:bg-background-secondary/80 transition-colors duration-300"
        aria-label="Toggle theme"
      >
        <motion.div
          animate={{ rotate: isRotating ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {getThemeIcon()}
        </motion.div>
      </motion.button>

      {/* AnimatePresence lets the popup fade out smoothly */}
      <AnimatePresence>
        {showHackerPopup && <HackerPopup />}
      </AnimatePresence>
    </>
  );
};

export default ThemeToggle;
