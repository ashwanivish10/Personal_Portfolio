import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Yeh props lega aur ek card return karega
interface CarouselCardProps {
  title: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
}

// Yahan component ka naam 'CarouselCard' hai aur yeh NAMED export hai
export const CarouselCard = ({
  title,
  image,
  technologies,
  demoUrl,
  repoUrl,
}: CarouselCardProps) => {
  return (
    // Humne styling ke liye simple class names diye hain
    <div className="carousel-card">
      <img src={image} alt={title} className="carousel-card-img" />
      <div className="carousel-card-content">
        <h3 className="carousel-card-title">{title}</h3>
        <div className="carousel-card-tech">
          {technologies.slice(0, 3).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="carousel-card-links">
          {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={18}/></a>}
          {repoUrl && <a href={repoUrl} target="_blank" rel="noopener noreferrer"><Github size={18}/></a>}
        </div>
      </div>
    </div>
  );
};