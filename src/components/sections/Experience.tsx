import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'Software Developer | ERP & HMIS Implementation Specialist ',
      company: 'Infranet Technology PLC.',
      duration: '2023 - Present',
      description: 'Develop and customize ERP and HMIS solutions to improve healthcare and business operations. Lead system implementation, configuration, deployment, technical support, and post-go-live activities. Develop custom modules, workflows, reports, integrations, and automation while working closely with users to understand and improve business processes.',
      skills: ['HMIS', 'ERP', 'SQL', 'System Implementation']
    }
    /*,
    {
      role: 'Frontend Developer',
      company: 'Digital Creative Agency',
      duration: '2018 - 2021',
      description: 'Developed responsive and interactive user interfaces for various client projects. Collaborated closely with UI/UX designers to bring pixel-perfect designs to life.',
      skills: ['Vue.js', 'Sass', 'JavaScript', 'Figma']
    },
    {
      role: 'Junior Web Developer',
      company: 'StartUp Hub',
      duration: '2016 - 2018',
      description: 'Assisted in the development of the main product dashboard. Fixed bugs and implemented minor features under the guidance of senior developers.',
      skills: ['HTML/CSS', 'jQuery', 'PHP', 'MySQL']
    }*/
  ];

  return (
    <section id="experience" className="py-24 relative bg-surfaceLight/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text mb-4"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="relative border-l border-white/10 ml-3 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                <div className="hidden md:block md:col-span-1 text-right pt-1 text-textMuted font-medium">
                  {exp.duration}
                </div>
                <div className="md:col-span-4 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-10 md:-left-[29px] top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center ring-4 ring-background shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                    <Briefcase className="w-3 h-3 text-white" />
                  </div>
                  
                  <div className="glass-card p-6 md:p-8">
                    <div className="md:hidden text-primary font-medium text-sm mb-2">
                      {exp.duration}
                    </div>
                    <h3 className="text-xl font-bold text-text">{exp.role}</h3>
                    <h4 className="text-lg text-secondary font-medium mb-4">{exp.company}</h4>
                    <p className="text-textMuted text-sm md:text-base mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="text-xs font-medium px-2 py-1 bg-surfaceLight text-text rounded-md border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
