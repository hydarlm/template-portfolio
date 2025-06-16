import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const texts = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Technology Enthusiast'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentTextIndex, isDeleting]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-4" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 1, ease: 'easeOut' }}>
              Hi, I'm <span className="gradient-text">Haydar Ahadya</span>
            </motion.h1>
            <div className="text-2xl font-semibold md:text-3xl text-[var(--text-primary)] h-12 flex items-center justify-center">
              <span className="typing-cursor">{displayText}</span>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam ab non at qui explicabo consequatur facilis libero temporibus necessitatibus.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-400 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              data-cursor="pointer">
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[var(--border)] text-[var(--text-primary)] rounded-full font-semibold hover:bg-[var(--surface)] transition-all duration-300"
              data-cursor="pointer">
              Download CV
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/hydarlm', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'https://mail.google.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a key={label} href={href} whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} className="p-3 bg-[var(--surface)] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group" data-cursor="pointer">
                <Icon className="w-6 h-6 text-[var(--text-secondary)] group-hover:text-[var(--primary)] transition-colors duration-200" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.button onClick={scrollToAbout} whileHover={{ scale: 1.1 }} className="p-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-200" data-cursor="pointer">
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;