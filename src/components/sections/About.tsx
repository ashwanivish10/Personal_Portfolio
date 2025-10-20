import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Award, Briefcase, Calendar, GraduationCap } from 'lucide-react';
import profilePicture from './happy.webp';
import { useRef } from 'react';

const About = () => {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end 0.8"], 
    clamp: true // <-- 1. ADD THIS LINE TO FIX THE BUG
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const containerVariants = {
    // ... (rest of your variants)
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    // ... (rest of your variants)
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const milestones = [
    // ... (rest of your milestones)
    {
      year: '2022 - 2026',
      title: 'B.Tech in Computer Science',
      company: 'Babu banarasi das University',
      description: 'Graduated with honors, focusing on web technologies and user interface design.',
      icon: <GraduationCap size={20} />,
    },
    {
      year: '2020 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      description: 'Leading frontend development for enterprise applications using React, TypeScript, and modern CSS frameworks.',
      icon: <Briefcase size={20} />,
    },
    {
      year: '2018 - 2020',
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed responsive web applications and implemented UI/UX designs using React and Vue.js.',
      icon: <Briefcase size={20} />,
    },
    {
      year: '2024',
      title: 'Frontend Development Certification',
      company: 'Web Academy',
      description: 'Specialized training in modern frontend technologies and frameworks.',
      icon: <Award size={20} />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-background/50 transition-colors duration-500">
      <div className="container">
        <SectionHeading 
          title="About Me" 
          subtitle="Here you'll find information about me, my current role, and my skills and experience."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            // ... (rest of your motion div)
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card">
                <img 
                  src={profilePicture} 
                  alt="Ashwani Vishwakarma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-lg backdrop-blur-lg">
                <p className="font-bold text-lg">5+ Years</p>
                <p className="text-sm text-muted-foreground">Experience</p>
              </div>
              <div className="absolute -top-6 -left-6 glass-card p-4 rounded-lg backdrop-blur-lg">
                <p className="font-bold text-lg">50+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            // ... (rest of your motion div)
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              variants={itemVariants}
            >
              I'm a passionate Frontend Developer with 2+ years of experience
            </motion.h3>
            
            <motion.p 
              className="text-muted-foreground mb-6"
              variants={itemVariants}
            >
              I specialize in building modern, responsive web applications with a focus on user experience and performance. My expertise includes React, TypeScript, modern CSS (including Tailwind), and state management solutions.
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold mb-4">Experience & Education</h4>
              
              <div ref={timelineRef} className="relative border-l-2 border-primary/30 pl-8 space-y-8">
                
                {/* === MODIFICATION START === */}

                {/* 5. This is the new ANIMATED GLOWING LINE */}
                <motion.div
                  // 2. Changed left-[-1px] to left-0
                  className="absolute left-0 top-0 w-0.5" 
                  style={{
                    height: progressHeight, 
                    background: `linear-gradient(to bottom, #22d3ee, #6366f1, #a855f7)`,
                    boxShadow: `
                      0 0 15px rgba(99,102,241,0.5),
                      0 0 25px rgba(168,85,247,0.3)
                    `,
                  }}
                />

                {/* 6. This is the new ANIMATED GLOWING BALL ("COMET") */}
                <motion.div
                  className="absolute z-10" 
                  style={{
                    top: progressHeight, 
                    // 3. Changed left: "0px" to "1px" to center on the 2px border
                    left: "1px", 
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(99,102,241,0.5) 40%, rgba(34,211,238,0) 70%)",
                      boxShadow: `
                        0 0 15px 4px rgba(168, 85, 247, 0.6),
                        0 0 25px 8px rgba(99, 102, 241, 0.4),
                        0 0 40px 15px rgba(34, 211, 238, 0.2)
                      `,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* === MODIFICATION END === */}
                
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-12 p-2 rounded-full bg-background-secondary border border-primary flex items-center justify-center">
                      {milestone.icon}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center text-sm text-muted-foreground mb-2 gap-2">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{milestone.year}</span>
                      </div>
                      <span className="hidden md:block">•</span>
                      <span>{milestone.company}</span>
                    </div>
                    <h5 className="text-lg font-medium">{milestone.title}</h5>
                    <p className="text-muted-foreground mt-1">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;