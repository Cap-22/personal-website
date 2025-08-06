import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Card from '@/components/ui/Card';

const testimonials = [
  {
    id: 1,
    name: 'Anton Boner',
    title: 'Co-Founder of Screenloop',
    content: 'Doruk has been an exceptional collaborator, bringing creativity, quality, and technical excellence to every project. He is perfect fit and has a proven track record to work with the world\'s leading AI companies, helping them craft unique digital experiences by collaborating with top talent globally.',
    avatar: 'AB'
  },
  {
    id: 2,
    name: 'Shay Pomeroy',
    title: 'Director of Marketing, Layer',
    content: 'Doruk led the development of our new web project, updating all our pages and migrating from Webflow to Framer. Starting with wireframes and concepting, Doruk was fantastic at working with our team through different stages of feedback, capturing all our requirements from marketing, sales, and dev. I\'ve worked on a ton of web projects and working with Doruk and the ForAI team was an absolute pleasure. I\'d happily recommend them to any tech company looking for a fresh coat of web paint.',
    avatar: 'SP'
  },
  {
    id: 3,
    name: 'Qingyun Wu',
    title: 'Founder of AG2 (formerly AutoGen)',
    content: 'Beyond just delivering great design work, they were true collaborators who took the time to understand our community and mission. The end result perfectly captures AG2\'s spirit - it\'s technical yet approachable, playful yet professional, and most importantly, it resonates strongly with our developer community.',
    avatar: 'QW'
  },
  {
    id: 4,
    name: 'Eric Brownrout',
    title: 'CEO & Co-Founder of Frigade',
    content: 'We couldn\'t be happier with the results of our partnership with ForAI. We wholeheartedly recommend them to anyone in search of quality design partners.',
    avatar: 'EB'
  },
  {
    id: 5,
    name: 'Daryl Xu',
    title: 'Co-Founder of B3.Fun',
    content: 'You guys were tremendous! You did a great job in such little time. Really appreciate. Looking forward to more.',
    avatar: 'DX'
  },
  {
    id: 6,
    name: 'Max von Wolff',
    title: 'CEO AT OZONE',
    content: 'ForAI exceeded our expectations, crafting a product-centric, detail-oriented landing page with remarkable speed and precision. Their dedication to their craft resonated across social media, generating significant buzz and engagement for our website.',
    avatar: 'MW'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-900 mb-6">
            Testimonials
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-12 text-center">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-apple-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Quote className="w-8 h-8 text-apple-blue" />
                  </div>
                  <p className="text-lg md:text-xl text-apple-gray-600 leading-relaxed mb-8">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-apple-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-apple-blue font-bold">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-apple-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-apple-gray-600 text-sm">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* 导航按钮 */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-apple-gray-100 hover:bg-apple-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-apple-gray-600" />
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-apple-blue' : 'bg-apple-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-apple-gray-100 hover:bg-apple-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-apple-gray-600" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 