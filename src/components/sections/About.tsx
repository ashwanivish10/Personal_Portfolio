import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Award, Briefcase, Calendar, GraduationCap } from 'lucide-react';

const About = () => {
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

  const milestones = [
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
      year: '2017',
      title: 'B.Tech in Computer Science',
      company: 'Technical University',
      description: 'Graduated with honors, focusing on web technologies and user interface design.',
      icon: <GraduationCap size={20} />,
    },
    {
      year: '2016',
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card">
                <img 
                  src="https://www.bing.com/images/search?view=detailV2&ccid=wI7SgTdi&id=7495057EF8E7691BEBCC5B37BB98436264D93824&thid=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c08ed28137620437579211b40dbac09b%3frik%3dJDjZZGJDmLs3Ww%26riu%3dhttp%253a%252f%252fcdn.wccftech.com%252fwp-content%252fuploads%252f2016%252f09%252felon-musk.jpeg%26ehk%3dT1Bxy3qC2b2WN3I70NCneteHTXOp0GgvQat5Xtj8i48%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1268&expw=2048&q=elonmusk&simid=608027264114374759&FORM=IRPRST&ck=3E59EE32DB303EEB3AFB4FF753169D52&selectedIndex=22&itb=0" 
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              variants={itemVariants}
            >
              I'm a passionate Frontend Developer with 5+ years of experience
            </motion.h3>
            
            <motion.p 
              className="text-muted-foreground mb-6"
              variants={itemVariants}
            >
              I specialize in building modern, responsive web applications with a focus on user experience and performance. My expertise includes React, TypeScript, modern CSS (including Tailwind), and state management solutions.
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground mb-8"
              variants={itemVariants}
            >
              I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring junior developers.
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold mb-4">Experience & Education</h4>
              
              <div className="relative border-l-2 border-primary/30 pl-8 space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-10 p-2 rounded-full bg-background-secondary border border-primary flex items-center justify-center">
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