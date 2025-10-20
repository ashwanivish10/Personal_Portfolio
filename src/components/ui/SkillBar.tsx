import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  index: number;
}

const SkillBar = ({ name, percentage, index }: SkillBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, index]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ 
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.1 
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;