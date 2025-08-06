import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-apple-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-900 mb-6">
            Let's get started!
          </h2>
          <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
            Ready to bring your AI vision to life? Let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 联系信息 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-apple-gray-900 mb-6">
                Get in touch
              </h3>
              <p className="text-apple-gray-600 mb-8 leading-relaxed">
                We're here to help you create exceptional digital experiences. Whether you have a project in mind or just want to explore possibilities, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-apple-blue/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-apple-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-apple-gray-900">Email</h4>
                    <p className="text-apple-gray-600">hello@forai.design</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-apple-blue/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-apple-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-apple-gray-900">Phone</h4>
                    <p className="text-apple-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-apple-blue/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-apple-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-apple-gray-900">Location</h4>
                    <p className="text-apple-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-apple-gray-900 mb-6">
                Start a project
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-apple-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-apple-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="input"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-apple-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-apple-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="input"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-apple-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="input resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* CTA 部分 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-12 bg-gradient-to-r from-apple-blue to-apple-blue-dark text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to transform your AI vision?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's create something that goes beyond beautiful.
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-apple-blue hover:bg-apple-gray-50">
              Book a call
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 