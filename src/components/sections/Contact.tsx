import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const recipientEmail = 'eyuelnegash21@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  const sendViaMailto = (
    name: string,
    email: string,
    message: string
  ) => {
    const subject = encodeURIComponent(
      `Portfolio message from ${name}`
    );

    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${recipientEmail}?subject=${subject}&body=${emailBody}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert('Please complete all fields before sending your message.');
      return;
    }

    // Length validation
    if (name.length > 100) {
      alert('Name must be less than 100 characters.');
      return;
    }

    if (email.length > 254) {
      alert('Email address is too long.');
      return;
    }

    if (message.length > 2000) {
      alert('Message must be less than 2000 characters.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSending(true);

    const payload = {
      name,
      email,
      message,
      _subject: `Portfolio message from ${name}`,
    };

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/eyuelnegash21@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Request failed with status ${response.status}`
        );
      }

      alert('Your message has been submitted successfully.');

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Contact form submission failed:', error);

      const useMailClient = window.confirm(
        'The online email service is unavailable. Would you like to open your email application instead?'
      );

      if (useMailClient) {
        sendViaMailto(name, email, message);
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text mb-4"
          >
            Get In Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text mb-6">
              Let's Build Something Meaningful Together
            </h3>

            <p className="text-textMuted mb-8 leading-relaxed">
              Have an ERP or HMIS project, need system customization
              or integration, or looking for a full-stack development
              solution? I'd be happy to discuss your requirements,
              explore the right approach, and help turn your ideas
              into a practical digital solution.
            </p>

            <h5 className="text-lg font-semibold text-text mb-4">
              Let's connect and build technology that creates real impact.
            </h5>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surfaceLight flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-lg font-medium text-text mb-1">
                    Email
                  </h4>

                  <a
                    href={`mailto:${recipientEmail}`}
                    className="text-textMuted hover:text-primary transition-colors"
                  >
                    {recipientEmail}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surfaceLight flex items-center justify-center text-secondary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-lg font-medium text-text mb-1">
                    Phone
                  </h4>

                  <a
                    href="tel:+251919782237"
                    className="text-textMuted hover:text-primary transition-colors"
                  >
                    +251 (9) 19782237
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surfaceLight flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-lg font-medium text-text mb-1">
                    Location
                  </h4>

                  <p className="text-textMuted">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-text transition-all"
                  placeholder="Abebe Kebede"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  required
                  maxLength={254}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-text transition-all"
                  placeholder="abebe@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  required
                  rows={5}
                  maxLength={2000}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-text transition-all resize-none"
                  placeholder="Tell me about your project..."
                />

                <p className="text-xs text-textMuted mt-2 text-right">
                  {formData.message.length}/2000
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send Message'}

                {!isSending && (
                  <Send className="w-4 h-4" />
                )}
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}