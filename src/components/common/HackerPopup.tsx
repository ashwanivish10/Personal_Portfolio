// src/components/common/HackerPopup.tsx
import { motion } from 'framer-motion';
import { Skull } from 'lucide-react'; // ✅ Lucide Skull icon

const HackerPopup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 flex items-center justify-center z-[9999]"
    >
      <div className="bg-red-900 text-red-200 border-2 border-red-600 px-8 py-6 rounded-xl shadow-2xl flex items-center gap-4 font-mono text-lg">
        <Skull className="w-8 h-8 text-red-300 animate-pulse" />
        <span> Hacker Theme Activated</span>
      </div>
    </motion.div>
  );
};

export default HackerPopup;
