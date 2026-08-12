import { motion } from 'framer-motion';




export function Projects() {
  const base = import.meta.env.BASE_URL;

  const projects = [
    {
      title: 'Hospital Management Information System (HMIS)',
      description: 'A comprehensive healthcare platform supporting EMR, patient management, billing, laboratory, pharmacy, radiology, insurance, and other hospital workflows.',
      image: `${base}image/HMIS.png`,
      tech: ['HMIS', 'C#', 'SQL'],
      // github: '#',
      // demo: '#',
      //featured: true,
    },
    {
      title: 'Enterprise Resource Planning (ERP) System',
      description: 'Customized ERP solution designed to streamline business operations including finance, inventory, purchasing, sales, HR, and workflow management.',
      image: `${base}image/erp.jpg`,
      tech: ['ERP', 'ERPNext', 'Frappe', 'Python', 'JavaScript'],
      // github: '#',
      // demo: '#',
      //featured: true,
    },
    {
      title: 'Full-Stack Development',
      description: 'Building scalable web applications from frontend interfaces to backend services, databases, APIs, and deployment.',
      image: `${base}image/web.png`,
      tech: ['React', 'Node.js', 'JavaScript', 'SQL', 'REST APIs'],
      //github: '#',
      //demo: '#',
    },
    {
      title: 'Healthcare ERP & Hospital Integration',
      description: 'Integrated healthcare and enterprise systems to connect clinical, financial, inventory, HR, and administrative processes into a unified digital platform.',
      image: `${base}image/HERP.png`,
      tech: ['HMIS', 'ERP', 'API', 'MariaDB'],
      // github: '#',
      // demo: '#',
      featured: true,
    },
    {
      title: 'ERPNext Customization & Automation',
      description: 'Developed custom modules, workflows, reports, scripts, business rules, and automation to adapt ERPNext to specific organizational requirements.',
      image: `${base}image/ERPnext.png`,
      tech: ['ERPNext', 'Frappe', 'Python', 'MariaDB'],
      // github: '#',
      // demo: '#',
    },
    {
      title: 'System Implementation & Training',
      description: 'Led system deployment, configuration, support, and training for 200+ users and professionals across healthcare and business environments.',
      image: `${base}image/Training.PNG`,
      tech: ['Implementation', 'Training', 'Technical Support'],
      // github: '#',
      // demo: '#',
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
             Project <span className="text-gradient">& Implementations</span>
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
                {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a href={project.github} className="p-3 bg-surface rounded-full text-text hover:text-primary transition-colors hover:scale-110">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="p-3 bg-surface rounded-full text-text hover:text-primary transition-colors hover:scale-110">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div> */}
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
