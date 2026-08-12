import { motion } from 'framer-motion';

export function Skills() {
  const skills = [
    { name: 'ERPNext', level: 80 },
    { name: 'Frappe Framework', level: 80 },
    { name: 'ERP Customization', level: 80 },
    { name: 'HMIS / EMR', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'JavaScript', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'MariaDB', level: 85 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'REST APIs', level: 85 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Linux / Server Administration', level: 75 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text mb-4"
          >
            My <span className="text-primary">Skills</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-4 rounded-xl border border-white/5"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-text font-medium">
                  {skill.name}
                </span>

                <span className="text-textMuted text-sm">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-surface rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + index * 0.05,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}