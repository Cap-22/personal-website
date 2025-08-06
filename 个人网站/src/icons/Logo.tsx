import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 背景圆形 */}
      <circle cx="20" cy="20" r="18" fill="url(#gradient)" />
      
      {/* F字母 */}
      <path
        d="M12 12h8v3h-5v4h4v3h-4v5h-3V12z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
      
      {/* AI文字 */}
      <text x="20" y="28" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
        AI
      </text>
      
      {/* 渐变定义 */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#007aff" />
          <stop offset="100%" stopColor="#0a84ff" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo; 