import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import Card from '@/components/ui/Card';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="works" className="py-20 bg-apple-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-900 mb-6">
            Selected works
          </h2>
          <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
            We make the work we believe in. Work we're proud to have made. Work worth being known for.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group">
                <div className="relative">
                  {/* 项目图片占位符 */}
                  <div className="aspect-video bg-gradient-to-br from-apple-blue/20 to-apple-blue-dark/20 rounded-t-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-apple-blue/20 rounded-2xl flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-apple-blue">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-apple-gray-600 text-sm">项目预览图</p>
                    </div>
                  </div>
                  
                  {/* 悬停时的链接按钮 */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-apple-gray-900 p-3 rounded-xl hover:bg-apple-gray-50 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-apple-gray-900 p-3 rounded-xl hover:bg-apple-gray-50 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm text-apple-blue font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-apple-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-apple-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-apple-gray-100 text-apple-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-apple-gray-600 mb-8">
            Beyond beautiful.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 