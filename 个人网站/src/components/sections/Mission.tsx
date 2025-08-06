import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Heart } from 'lucide-react';

const Mission: React.FC = () => {
  const missionPoints = [
    {
      icon: Target,
      title: 'Make it the best version of what it can be.',
      description: '我们致力于将每个项目做到极致，追求卓越的品质和用户体验。'
    },
    {
      icon: Award,
      title: 'Only the kind of work we\'re proud to sign.',
      description: '只做我们引以为豪的作品，每一个项目都代表我们的专业水准。'
    },
    {
      icon: Heart,
      title: 'No shortcuts. No soulless, throwaway fluff.',
      description: '不走捷径，不制作无灵魂的临时作品，每一件作品都有其存在的价值。'
    }
  ];

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-900 mb-6">
            Mission
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-apple-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <point.icon className="w-8 h-8 text-apple-blue" />
              </div>
              <h3 className="text-xl font-bold text-apple-gray-900 mb-4">
                {point.title}
              </h3>
              <p className="text-apple-gray-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-apple-gray-900 mb-8">
              Your AI story, visualized.
            </h3>
            <p className="text-xl text-apple-gray-600 leading-relaxed mb-8">
              We shape brands that are distinct and memorable. We design interfaces that simplify complexity.
            </p>
            <p className="text-xl text-apple-gray-600 leading-relaxed mb-8">
              Where creativity is focused, and every interaction is designed to be pure, orchestrated beauty, felt as much as seen.
            </p>
            <p className="text-xl text-apple-gray-600 leading-relaxed mb-8">
              Not chasing beauty, but designing the beautiful.
            </p>
            <div className="text-2xl font-bold text-apple-gray-900">
              Even… Beyond beautiful.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission; 