import { motion } from 'framer-motion';
import { Target, Code2, Coffee } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Years Experience', value: '3+', icon: <Coffee className="w-6 h-6 text-primary" /> },
    { label: 'Projects Completed', value: '40+', icon: <Code2 className="w-6 h-6 text-secondary" /> },
    { label: 'Happy Clients', value: '25+', icon: <Target className="w-6 h-6 text-primary" /> },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-text mb-6">
              I'm a passionate Software Developer building modern web applications
            </h3>
            <p className="text-textMuted mb-6 leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in creating scalable, responsive, and user-centric digital solutions. My journey started with a fascination for how things work on the internet, which evolved into a career dedicated to crafting exceptional software.
            </p>
            <p className="text-textMuted mb-8 leading-relaxed">
              I believe in clean code, continuous learning, and the power of technology to solve real-world problems. When I'm not coding, you can find me exploring new frameworks, writing technical articles, or enjoying a good cup of coffee.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 glass rounded-lg text-sm text-text border-white/5">Problem Solver</div>
              <div className="px-4 py-2 glass rounded-lg text-sm text-text border-white/5">Continuous Learner</div>
              <div className="px-4 py-2 glass rounded-lg text-sm text-text border-white/5">Team Player</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-surfaceLight flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold text-text mb-2">{stat.value}</h4>
                <p className="text-textMuted text-sm">{stat.label}</p>
              </div>
            ))}
            
            <div className="glass-card p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <h4 className="text-xl font-bold text-text mb-2">Let's Talk!</h4>
              <p className="text-textMuted text-sm mb-4">Have a project in mind?</p>
              <a href="#contact" className="text-primary text-sm font-medium hover:underline">Contact Me &rarr;</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
