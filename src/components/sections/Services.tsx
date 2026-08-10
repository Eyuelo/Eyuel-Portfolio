import { motion } from 'framer-motion';
import { Monitor, Globe, Hospital, DatabaseZap, Presentation } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'ERP Development & Customization',
      description: 'Customizing and extending ERP platforms to match specific business processes, including modules, workflows, reports, permissions, and automation.',
      icon: <Monitor className="w-8 h-8 text-primary" />
    },
    {
      title: 'HMIS Development & Implementation',
      description: 'Designing and implementing comprehensive healthcare information systems to streamline clinical workflows and improve patient care.',
      icon: <Hospital className="w-8 h-8 text-primary" />
    },
    {
      title: 'Full-Stack Development',
      description: 'Building scalable web applications from frontend interfaces to backend services, databases, APIs, and deployment.',
      icon: <Globe className="w-8 h-8 text-primary" />
    },
    {
      title: 'Database & Reporting Solutions',
      description: 'Designing databases, developing complex queries, creating custom reports, and optimizing data workflows for business and healthcare systems.',
      icon: <DatabaseZap className="w-8 h-8 text-primary" />
    },
    {
      title: 'System Implementation & Training',
      description: 'Deploying, configuring, documenting, and supporting enterprise systems while training users and teams for successful adoption.',
      icon: <Presentation className="w-8 h-8 text-primary" />
    }
    /*,
    {
      title: 'Mobile Optimization',
      description: 'Ensuring your web applications look and function flawlessly across all devices and screen sizes.',
      icon: <Smartphone className="w-8 h-8 text-secondary" />
    }*/
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text mb-4"
          >
            My <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-surfaceLight flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-text mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
