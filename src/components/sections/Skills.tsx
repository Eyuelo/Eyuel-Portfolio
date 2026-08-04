import { motion } from 'framer-motion';

export function Skills() {
  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 92 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'SQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Git & GitHub', level: 88 },
    { name: 'Docker', level: 60 },
    { name: 'REST APIs', level: 90 },
  ];

  return (
    <section id="skills" className="py-24 relative bg-surfaceLight/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text mb-4"
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-4 rounded-xl border border-white/5"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-text font-medium">{skill.name}</span>
                <span className="text-textMuted text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-surface rounded-full h-2.5">
                <motion.div 
                  className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.05) }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
