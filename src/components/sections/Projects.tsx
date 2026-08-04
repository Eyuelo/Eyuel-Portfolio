import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with cart, checkout, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and drag-and-drop.',
      image: 'https://images.unsplash.com/photo-1507925922837-326f73400e27?w=800&auto=format&fit=crop&q=80',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with 7-day forecast and interactive maps.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=80',
      tech: ['React', 'OpenWeather API', 'Chart.js'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Image Generator',
      description: 'Web application that generates unique images from text prompts using AI models.',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=80',
      tech: ['Vue.js', 'Python', 'FastAPI', 'Stable Diffusion'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-first web app to track workouts, diet, and personal fitness goals.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80',
      tech: ['React Native', 'Firebase', 'Redux'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard aggregating metrics from various social media platforms.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      tech: ['Angular', 'D3.js', 'Express', 'MySQL'],
      github: '#',
      demo: '#',
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-surface rounded-full text-text hover:text-primary transition-colors hover:scale-110">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a href={project.demo} className="p-3 bg-surface rounded-full text-text hover:text-primary transition-colors hover:scale-110">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-textMuted text-sm mb-4 flex-1 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 bg-surfaceLight text-primary rounded-md border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
