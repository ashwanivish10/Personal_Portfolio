import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Define the component's props interface for TypeScript
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  preImageText?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  repoUrl,
  preImageText,
}: ProjectCardProps) => {
  return (
    // The 'group' class is essential for the hover effects on child elements
    <div className="group relative z-0 flex h-auto min-h-[480px] w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card font-sans shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
      
      {/* --- DECORATIVE ELEMENTS --- */}
      {/* Top glow effect - visible on hover */}
      <div className="absolute -inset-x-10 top-0 z-10 h-20 bg-gradient-to-b from-primary/20 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Shine effect - animates on hover */}
      <div className="absolute inset-0 z-20 h-full w-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.8)_30%,transparent_10%)] bg-[length:200%_100%] opacity-0 transition-opacity duration-300 group-hover:animate-shine group-hover:opacity-100" />

      {/* --- CONTENT --- */}
      <div className="relative z-30 flex h-full flex-col gap-3 p-5">
        
        {/* Badge for the primary technology - appears on hover */}
      <div className="absolute right-3 top-3 z-40 origin-top-right scale-90 rounded-full bg-emerald-500 px-2 py-1 text-xs font-bold text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          New
        </div>

        {/* Optional text above the image */}
        {preImageText && (
          <p className="text-center text-sm font-medium text-foreground/80 transition-colors duration-300 group-hover:text-primary">
            {preImageText}
          </p>
        )}

        {/* Project Image */}
        <div className="relative h-[180px] w-full overflow-hidden rounded-xl shadow-md transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>

        {/* Project Title and Description */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <p className="flex-grow text-sm text-muted-foreground transition-opacity duration-300 group-hover:opacity-100">
            {description}
          </p>
        </div>

        {/* Technology Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer with links */}
        <div className="mt-auto flex items-center gap-6 pt-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-300 hover:text-primary"
            >
              <ExternalLink size={16} className="transition-transform duration-300 group-hover:animate-pulse-icon" />
              <span>Live Demo</span>
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-300 hover:text-primary"
            >
              <Github size={16} className="transition-transform duration-300 group-hover:animate-pulse-icon" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
