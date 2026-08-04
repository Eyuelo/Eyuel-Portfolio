import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      content: 'Working with this developer was an absolute pleasure. They delivered our MVP ahead of schedule and the code quality was exceptional. Highly recommended for any complex web projects.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      content: 'Incredible attention to detail and a great eye for design. They transformed our outdated platform into a modern, fast, and user-friendly application that our customers love.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'Emily Davis',
      role: 'Startup Founder',
      content: 'Not only a great coder but also a great communicator. They kept us updated throughout the entire process and offered valuable suggestions to improve our original concept.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text mb-4"
          >
            Client <span className="text-gradient">Testimonials</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />
              <p className="text-textMuted italic mb-6 relative z-10">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="text-text font-bold">{testimonial.name}</h4>
                  <p className="text-textMuted text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
