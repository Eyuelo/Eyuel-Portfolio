import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { useEffect, useState } from 'react';
import resumePdf from '../../assets/resume.pdf';

export function Hero() {
  const base = import.meta.env.BASE_URL;
  const [text, setText] = useState('');
  const fullText = "ERP & HMIS Specialist | Full Stack Developer";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    let timer: number;
    
    if (isTyping) {
      timer = setInterval(() => {
        setText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(timer);
          setIsTyping(false);
          // Optional: Add a delay and then backspace or loop if desired
        }
      }, 100);
    }

    return () => clearInterval(timer);
  }, [isTyping]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full glass mb-6 border-primary/30"
          >
            <span className="text-primary font-medium text-sm">Available for work</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-4 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Eyuel Negash</span>
          </h2>
          
          <div className="h-12 md:h-16 mb-6">
            <h4 className="text-lg md:text-2xl text-textMuted font-medium flex items-center justify-center md:justify-start">
              <span>{text}</span>
              <span className="w-1 h-8 md:h-10 bg-primary ml-2 animate-pulse"></span>
            </h4>
          </div>
          
         <p className="text-lg text-textMuted mb-10 max-w-[600px] mx-auto md:mx-0 leading-relaxed">
        I build scalable ERP and Health Management Information Systems
  (HMIS) that streamline business operations, improve healthcare
  workflows, and deliver intuitive digital experiences. Passionate
  about clean architecture, modern technologies, and impactful
  software solutions.
</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/25">
              Let's Work Together
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={resumePdf} target="_blank" className="w-full sm:w-auto px-8 py-4 glass rounded-xl font-medium text-text hover:bg-white/10 transition-all flex items-center justify-center gap-2 border-white/10">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
            <a href="https://github.com/Eyuelo" target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/eyuelnegash" target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="mailto:eyuelnegash21@gmail.com" className="text-textMuted hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-[min(88vw,34rem)] max-w-full">
            {/* Abstract decorative frame */}
            <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl -z-10 backdrop-blur-3xl"></div>
            
            <img 
              src={`${base}image/me.jpg`}
              alt="Profile" 
              className="w-full h-auto object-contain object-center rounded-3xl shadow-2xl border border-white/10 bg-surface/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
