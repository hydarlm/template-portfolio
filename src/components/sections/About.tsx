import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Full Stack Development', percentage: 95 },
    { name: 'UI/UX Design', percentage: 88 },
    { name: 'Problem Solver', percentage: 82 },
    { name: 'Technology Enthusiast', percentage: 75 },
  ];

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Frontend Developer (Trainee)',
      company: 'Balitar Islamic University',
      description:
        'Actively learning and practicing frontend development, focusing on building responsive user interfaces using React, HTML, CSS, and JavaScript. Collaborating on academic and personal projects to gain hands-on experience in modern web development workflows.',
    },
    {
      year: 'June 2022 - 2023',
      title: 'Intern IT Support | Server & Network Maintenance',
      company: 'RSUD Mardi Waluyo Blitar',
      description: 'Assisted in maintaining hospital server infrastructure, managing network connectivity, and troubleshooting hardware/software issues. Provided technical support to staff and ensured smooth daily IT operations.',
    },
  ];

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful interfaces that provide excellent user experience.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional results.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  return (
    <section id="about" className="py-20 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque alias sapiente ipsa recusandae expedita? Cumque delectus tenetur nulla veritatis possimus. Quam odio veritatis ratione iusto?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 bg-gradient-to-br from-teal-600 to-teal-400 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et possimus placeat dignissimos minima quidem, sed nam sequi voluptatum perspiciatis, itaque, aliquam quis at. Labore, facere?
                </p>
                <p className="text-lg leading-relaxed">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita exercitationem molestiae, laborum sapiente minima ab voluptatem placeat cumque doloribus voluptatum?
                </p>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-800 to-teal-700 rounded-2xl transform rotate-3 -z-10" />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            {skills.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-[var(--text-secondary)]">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-[var(--border)] rounded-full h-3">
                  <motion.div
                    className="h-3 bg-gradient-to-r from-teal-400 to-teal-700 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center p-6 bg-[var(--background)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-[var(--text-secondary)]">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Experience Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-600 to-teal-600 rounded-full" />
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'
                }`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-600 rounded-full border-4 border-[var(--background)]" />
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-[var(--background)] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="text-sm font-semibold text-teal-600">{exp.year}</span>
                    <h4 className="text-xl font-bold mt-1 mb-2">{exp.title}</h4>
                    <p className="text-lg font-semibold text-[var(--text-secondary)] mb-2">
                      {exp.company}
                    </p>
                    <p className="text-[var(--text-secondary)]">{exp.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;