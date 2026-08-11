import { Mail, ArrowUp, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-surface mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">&lt;Kedamawi Tech /&gt;</h3>
            <p className="text-textMuted text-sm leading-relaxed">
              Building impactful digital solutions with modern technologies, specializing in ERP, HMIS, and full-stack development. 
              Always learning, always creating, always solving real-world problems.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-textMuted hover:text-primary transition-colors text-sm">About</a></li>
              <li><a href="#projects" className="text-textMuted hover:text-primary transition-colors text-sm">Projects</a></li>
              <li><a href="#experience" className="text-textMuted hover:text-primary transition-colors text-sm">Experience</a></li>
              <li><a href="#contact" className="text-textMuted hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/Eyuelo" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surfaceLight flex items-center justify-center text-textMuted hover:text-primary hover:bg-white/5 transition-all">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/eyuelnegash" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surfaceLight flex items-center justify-center text-textMuted hover:text-primary hover:bg-white/5 transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </a>
                <a
          href="https://t.me/eyuel_n"
             target="_blank"
                  rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surfaceLight flex items-center justify-center text-textMuted hover:text-primary hover:bg-white/5 transition-all"
                            >
         <Send className="w-5 h-5" />
        </a>
              <a href="mailto:eyuelnegash21@gmail.com" className="w-10 h-10 rounded-full bg-surfaceLight flex items-center justify-center text-textMuted hover:text-primary hover:bg-white/5 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-textMuted text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kedamawi Tech — Eyuel Negash. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
