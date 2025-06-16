import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/hydarlm', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'https://mail.google.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text mb-4 cursor-pointer"
              onClick={scrollToTop}
            >
              Haydar Ahadya
            </motion.h3>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloremque incidunt culpa aut eveniet amet? Earum beatae iure eius nulla.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-[var(--background)] rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
                  data-cursor="pointer"
                >
                  <Icon className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--primary)] transition-colors duration-200" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5 }}
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-200 block"
                    data-cursor="pointer"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3 text-[var(--text-secondary)]">
              <motion.p whileHover={{ x: 5 }} className="transition-transform duration-200">
                haydarahdy32@email.com
              </motion.p>
              <motion.p whileHover={{ x: 5 }} className="transition-transform duration-200">
                +62 812-3456-7890
              </motion.p>
              <motion.p whileHover={{ x: 5 }} className="transition-transform duration-200">
                Blitar, East Java, Indonesia
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center space-x-2 text-[var(--text-secondary)] mb-4 md:mb-0">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>by Haydar Ahadya</span>
          </div>
          
          <div className="text-[var(--text-secondary)] text-sm">
            © {new Date().getFullYear()} Haydar Ahadya. All rights reserved.
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-30"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          data-cursor="pointer"
        >
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            ↑
          </motion.div>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;