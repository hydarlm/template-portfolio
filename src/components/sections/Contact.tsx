import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'loremipsum@gmail.com',
      href: 'mailto:loremipsum@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+62 812-3456-7890',
      href: 'tel:+62 812-3456-7890',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Blitar, East Java, Indonesia',
      href: '#',
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis aliquid reiciendis optio suscipit alias!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, inventore. Alias officia veritatis autem quam repellendus qui repudiandae, tempore ea.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 mb-12">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-[var(--surface)] rounded-xl hover:shadow-lg transition-all duration-300 group"
                  data-cursor="pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300"
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">{info.title}</h4>
                    <p className="text-[var(--text-secondary)] group-hover:text-[var(--primary)] transition-colors duration-200">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative p-8 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl text-white"
            >
              <h4 className="text-xl font-bold mb-4">Quick Response Guaranteed</h4>
              <p className="text-indigo-100 leading-relaxed">
                I typically respond to messages within 24 hours. For urgent projects, 
                feel free to call directly.
              </p>
              <div className="absolute top-4 right-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-400 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-3 text-[var(--text-secondary)] transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-teal-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-teal-500 bg-[var(--surface)] px-2"
                  >
                    Your Name
                  </label>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-3 text-[var(--text-secondary)] transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-teal-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-teal-500 bg-[var(--surface)] px-2"
                  >
                    Email Address
                  </label>
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 top-3 text-[var(--text-secondary)] transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-teal-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-teal-500 bg-[var(--surface)] px-2"
                >
                  Subject
                </label>
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 peer resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 text-[var(--text-secondary)] transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-teal-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-teal-500 bg-[var(--surface)] px-2"
                >
                  Your Message
                </label>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                data-cursor="pointer"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Success/Error Messages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: submitStatus !== 'idle' ? 1 : 0,
                  y: submitStatus !== 'idle' ? 0 : 20,
                }}
                className={`flex items-center space-x-3 p-4 rounded-lg ${
                  submitStatus === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600" />
                )}
                <span>
                  {submitStatus === 'success'
                    ? 'Message sent successfully! I\'ll get back to you soon.'
                    : 'There was an error sending your message. Please try again.'}
                </span>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;