import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import SectionHeading from '../ui/SectionHeading';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiNodedotjs, 
  SiMongodb, 
  SiFirebase, 
  SiTailwindcss, 
  SiFigma, 
  SiNextdotjs, 
  SiHtml5, 
  SiCss3, 
  SiExpress,
  SiVuedotjs,
  SiGraphql,
  SiAdobephotoshop
} from 'react-icons/si';

// 1. Skills (Percentage ke saath)
const allSkills = [
  { name: 'HTML5 & CSS3', percentage: 95 },
  { name: 'JavaScript (ES6+)', percentage: 90 },
  { name: 'React.js', percentage: 92 },
  { name: 'TypeScript', percentage: 85 },
  { name: 'Node.js', percentage: 75 },
  { name: 'RESTful APIs', percentage: 85 },
  { name: 'Firebase', percentage: 80 },
  { name: 'Express.js', percentage: 70 },
  { name: 'Tailwind CSS', percentage: 30 },
  { name: 'MongoDB', percentage: 20 },
];

// 2. Technologies (Sirf Icons ke liye)
const technologies = [
  { icon: <SiHtml5 />, name: 'HTML5', color: '#E34F26' },
  { icon: <SiCss3 />, name: 'CSS3', color: '#1572B6' },
  { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
  { icon: <SiReact />, name: 'React.js', color: '#61DAFB' },
  { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
  { icon: <SiVuedotjs />, name: 'Vue.js', color: '#4FC08D' },
  { icon: <SiNodedotjs />, name: 'Node.js', color: '#339933' },
  { icon: <SiExpress />, name: 'Express', color: '#000000' },
  { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
  { icon: <SiGraphql />, name: 'GraphQL', color: '#E10098' },
  { icon: <SiFirebase />, name: 'Firebase', color: '#FFCA28' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: <SiFigma />, name: 'Figma', color: '#F24E1E' },
  { icon: <SiAdobephotoshop />, name: 'Photoshop', color: '#31A8FF' },
];

/**
 * Component 1: Skill Bar (Percentage ke liye)
 */
const MarqueeSkillBar = ({ name, percentage }) => {
  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${percentage}%`,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  return (
    <div 
      className="bg-background p-4 rounded-lg shadow-md border border-border/10"
      style={{ minWidth: '280px', margin: '0 12px' }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <h4 className="font-semibold text-sm text-foreground">{name}</h4>
        <span className="text-xs font-medium text-primary">{percentage}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary"
          variants={barVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

/**
 * Component 2: Technology Icon (Sirf Icon ke liye)
 */
const MarqueeIcon = ({ icon, name, color }) => (
  <div 
    className="group mx-10 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110"
    style={{ minWidth: '80px' }}
  >
    <span 
      className="text-5xl"
      style={{ color: color }} // Brand color apply kiya
    >
      {icon}
    </span>
    <span 
      className="mt-2 text-sm font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-primary"
    >
      {name}
    </span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background-secondary transition-colors duration-500 overflow-hidden">
      <div className="container">
        <SectionHeading 
          title="Technologies I Use" 
          subtitle="Here's an overview of my technical skills and areas of expertise."
        />
        
        {/* --- Marquee 1: Skill Bars (Left-to-Right) --- */}
        <div className="mt-16">
          <Marquee
            pauseOnHover={true}
            speed={50}
            direction="left" // Default (left-to-right)
            gradient={true}
            gradientColor="hsl(var(--background-secondary))"
            gradientWidth={100}
          >
            {allSkills.map((skill) => (
              <MarqueeSkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </Marquee>
        </div>
        
        {/* --- Marquee 2: Icons (Right-to-Left) --- */}
        <div className="mt-16">
          <Marquee
            pauseOnHover={true}
            speed={40} // Thodi alag speed
            direction="right" // Right-to-Left
            gradient={true}
            gradientColor="hsl(var(--background-secondary))"
            gradientWidth={100}
          >
            {technologies.map((tech) => (
              <MarqueeIcon
                key={tech.name}
                icon={tech.icon}
                name={tech.name}
                color={tech.color}
              />
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
};

export default Skills;