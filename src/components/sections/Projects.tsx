import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';

export function Projects() {
  const projects = [
    {
      title: 'Hospital Management Information System (HMIS)',
      description: 'A comprehensive healthcare platform supporting EMR, patient management, billing, laboratory, pharmacy, radiology, insurance, and other hospital workflows.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80',
      tech: ['HMIS', 'C#', 'SQL'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Enterprise Resource Planning (ERP) System',
      description: 'Customized ERP solution designed to streamline business operations including finance, inventory, purchasing, sales, HR, and workflow management.',
      image: 'https://images.unsplash.com/photo-1507925922837-326f73400e27?w=800&auto=format&fit=crop&q=80',
      tech: ['ERP', 'ERPNext', 'Frappe', 'Python', 'JavaScript'],
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
      title: 'Healthcare ERP & Hospital Integration',
      description: 'Integrated healthcare and enterprise systems to connect clinical, financial, inventory, HR, and administrative processes into a unified digital platform.',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=80',
      tech: ['HMIS', 'ERP', 'API', 'MariaDB'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'ERPNext Customization & Automation',
      description: 'Developed custom modules, workflows, reports, scripts, business rules, and automation to adapt ERPNext to specific organizational requirements.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80',
      tech: ['ERPNext', 'Frappe', 'Python', 'MariaDB'],
      github: '#',
      demo: '#',
    },
    {
      title: 'System Implementation & Training',
      description: 'Led system deployment, configuration, user support, documentation, and training for 200+ users and professionals across healthcare and business environments.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      tech: ['Implementation', 'Training', 'Technical Support'],
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
