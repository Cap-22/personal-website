import React from 'react';
import { motion } from 'framer-motion';
import Logo from '@/icons/Logo';
import { socialLinks } from '@/data/social-links';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Works', href: '#works' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Mission', href: '#mission' },
    { name: 'Archive', href: '#archive' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <footer className="bg-apple-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo 和描述 */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Logo size={32} />
              <span className="ml-2 text-xl font-bold">ForAI</span>
            </div>
            <p className="text-apple-gray-300 mb-6 max-w-md">
              A creative design studio for AI companies. We make the work we believe in, 
              work we're proud to have made, work worth being known for.
            </p>
            <div className="flex space-x-4">
              {socialLinks.slice(0, 4).map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-apple-gray-800 rounded-xl flex items-center justify-center hover:bg-apple-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getSocialIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-apple-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 更多链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">More</h3>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-apple-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="border-t border-apple-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-apple-gray-400 text-sm">
              © 2024 ForAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-apple-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-apple-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 