import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import SkillBar from '../ui/SkillBar';
import { Code, Database, Layers, PenTool, Smartphone } from 'lucide-react';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5 & CSS3', percentage: 95 },
    { name: 'JavaScript (ES6+)', percentage: 90 },
    { name: 'React.js', percentage: 92 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 88 },
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 75 },
    { name: 'Express.js', percentage: 70 },
    { name: 'RESTful APIs', percentage: 85 },
    { name: 'MongoDB', percentage: 65 },
    { name: 'Firebase', percentage: 80 },
  ];

  const toolsAndSkills = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      skills: ['React.js', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3/SCSS']
    },
    {
      icon: <Layers size={24} />,
      title: 'UI Frameworks & Libraries',
      skills: ['Tailwind CSS', 'Material UI', 'Bootstrap', 'Styled Components', 'Framer Motion']
    },
    {
      icon: <Database size={24} />,
      title: 'Backend & Database',
      skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'RESTful APIs', 'GraphQL']
    },
    {
      icon: <PenTool size={24} />,
      title: 'Design Tools',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch']
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      skills: ['React Native', 'Responsive Design', 'Progressive Web Apps']
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section-padding bg-background-secondary transition-colors duration-500">
      <div className="container">
        <SectionHeading 
          title="My Skills" 
          subtitle="Here's an overview of my technical skills and areas of expertise."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-6">Frontend Skills</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                index={index}
              />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Backend Skills</h3>
            {backendSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsAndSkills.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 h-full"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <ul className="space-y-2">
                {item.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;