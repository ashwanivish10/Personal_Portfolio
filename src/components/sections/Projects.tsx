import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for e-commerce platforms with analytics, order management, and inventory tracking.',
      image: 'https://images.pexels.com/photos/2058911/pexels-photo-2058911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com/example',
    },
    {
      title: 'Social Media Platform',
      description: 'A fully responsive social media application with real-time messaging, post creation, and user interactions.',
      image: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com/example',
    },
    {
      title: 'Weather Application',
      description: 'A beautiful weather application showing current conditions and forecasts with animated weather visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'OpenWeather API', 'Framer Motion'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com/example',
    },
    {
      title: 'Portfolio Website',
      description: 'A professional portfolio website showcasing skills and projects with modern design and animations.',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com/example',
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with drag-and-drop functionality.',
      image: 'https://images.pexels.com/photos/7350/pexels-photo-7350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Redux', 'TypeScript', 'Firebase'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com/example',
    },
    {
      title: 'Fitness Tracker',
      description: 'An application to track workouts, nutrition, and progress with visualized statistics and goal setting.',
      image: 'https://images.pexels.com/photos/3838937/pexels-photo-3838937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Chart.js', 'Firebase', 'Styled Components'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com/example',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background transition-colors duration-500">
      <div className="container">
        <SectionHeading 
          title="My Projects" 
          subtitle="Here are some of my recent projects. Each project showcases different skills and technologies."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;