import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  repoUrl,
  index,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden group h-full flex flex-col rounded-xl backdrop-blur-md bg-background/30 border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="relative p-6 flex-grow flex flex-col backdrop-blur-sm bg-background/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 pointer-events-none"></div>
        <h3 className="text-xl font-semibold mb-2 relative z-10">{title}</h3>
        <p className="text-muted-foreground mb-4 relative z-10">{description}</p>
        
        <div className="mt-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-3">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
            
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;