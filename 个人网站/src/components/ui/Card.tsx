import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = true,
}) => {
  return (
    <motion.div
      onClick={onClick}
      className={cn(
        'bg-white rounded-2xl shadow-apple border border-apple-gray-100 transition-all duration-300',
        hover && 'hover:shadow-apple-md hover:scale-[1.02]',
        className
      )}
      whileHover={hover ? { y: -4 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card; 