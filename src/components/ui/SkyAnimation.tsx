// // File: src/components/ui/SkyAnimation.tsx
// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useTheme } from '../../context/ThemeContext';

// const SkyAnimation = () => {
//   const { theme } = useTheme();
//   const [showAnimation, setShowAnimation] = useState(false);

//   useEffect(() => {
//     if (theme === 'theme3' || theme === 'theme1') {
//       setShowAnimation(true);
//       const timer = setTimeout(() => setShowAnimation(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [theme]);

//   const isNight = theme === 'theme3';
//   const isHacker = theme === 'theme5';

//   if (isHacker) return null;

//   return (
//     <AnimatePresence>
//       {showAnimation && (
//         <div className="fixed inset-0 pointer-events-none z-[-1]">
//           <motion.div
//             initial={{ y: isNight ? 500 : 0, opacity: 0 }}
//             animate={{ y: isNight ? 0 : 500, opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 2, ease: 'easeInOut' }}
//             className="absolute left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full"
//           >
//             <div className={`w-full h-full ${isNight ? 'bg-yellow-300' : 'bg-orange-400'} rounded-full shadow-lg`} />
//           </motion.div>

//           {isNight && (
//             <div className="absolute inset-0 z-[-1]">
//               {[...Array(30)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute w-1 h-1 bg-white rounded-full"
//                   style={{
//                     top: `${Math.random() * 100}%`,
//                     left: `${Math.random() * 100}%`,
//                     opacity: Math.random(),
//                     animation: `twinkle ${2 + Math.random() * 3}s infinite ease-in-out`,
//                   }}
//                 />
//               ))}
//             </div>
//           )}

//           <style jsx>{`
//             @keyframes twinkle {
//               0%, 100% { opacity: 0.3; }
//               50% { opacity: 1; }
//             }
//           `}</style>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default SkyAnimation;