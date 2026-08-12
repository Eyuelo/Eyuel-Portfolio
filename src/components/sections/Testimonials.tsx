import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Biniyam Kebede',
      role: 'IT Manager @ Bethzata General Hospital',
      content: 'The ERP and HMIS implementation significantly improved our day-to-day operations. The system was customized to fit our workflows, and the support provided throughout implementation made the transition much easier.',
      image: ''
    },
    {
      name: 'Anwar Mohammed',
      role: 'System Administrator @ Amin General Hospital',
      content: 'The system customization was excellent. Business requirements were well understood and translated into practical solutions. The technical support and responsiveness throughout the project were highly appreciated',
      image: ''
    },
    {
      name: 'Tesfaye Gashaw',
      role: 'System Developer & Integration Manager @ Shangi Furniture PLC',
      content: 'The system customization was excellent. Business requirements were well understood and translated into practical solutions. The technical support and responsiveness throughout the project were highly appreciated',
      image: ''
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
            What <span className="text-gradient">People Say</span>
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
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary/25 text-primary flex items-center justify-center border-2 border-primary/20 font-bold">
                    {testimonial.name.split(' ').map((word) => word[0]).slice(0, 2).join('')}
                  </div>
                )}
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
