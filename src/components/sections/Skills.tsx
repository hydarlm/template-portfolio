import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Database, 
  Smartphone, 
  Globe, 
  Wrench,
  Zap,
  Users
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 45 },
        { name: 'TypeScript', level: 25 },
      ],
    },
    {
      title: 'Design',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'UI/UX Design', level: 30 },
        { name: 'Figma', level: 50 },
        { name: 'TailwindCSS', level: 50 },
      ],
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 20 },
        { name: 'MySQL', level: 70 },
        { name: 'Php', level: 50 },
        { name: 'Laravel', level: 30 },
      ],
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-purple-500 to-indigo-500',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'iOS Dev', level: 70 },
        { name: 'Android Dev', level: 72 },
      ],
    },
  ];

  const tools = [
    { name: 'VS Code', icon: Code },
    { name: 'Git', icon: Globe },
    { name: 'HomeBrew', icon: Wrench },
    { name: 'Figma', icon: Palette },
    { name: 'MySQL', icon: Database },
    { name: 'Slack', icon: Users },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nam, eos incidunt ullam reprehenderit eum.</p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants} whileHover={{ y: -10, scale: 1.02 }} className="bg-[var(--background)] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-[var(--text-secondary)]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[var(--border)] rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Circular Skill Chart */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-12">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: 'Frontend', percentage: 95, color: '#0065F8' },
              { name: 'Backend', percentage: 85, color: '#ec4899' },
              { name: 'Design', percentage: 90, color: '#10b981' },
              { name: 'Mobile', percentage: 80, color: '#5459AC' },
            ].map((skill, index) => (
              <motion.div key={skill.name} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.2 }} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--border)" strokeWidth="2" />
                    <motion.path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: `0 100` }}
                      whileInView={{ strokeDasharray: `${skill.percentage} 100` }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold" style={{ color: skill.color }}>
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
          <h3 className="text-3xl font-bold mb-12">Tools & Technologies</h3>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center p-4 bg-[var(--background)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[120px]">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-500 rounded-full flex items-center justify-center mb-3">
                  <tool.icon className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-sm font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;