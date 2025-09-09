import React from 'react';

interface IconProps {
  icon: string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ icon, className = '', size = 24 }) => {
  // Check if the icon is an emoji (single character or emoji sequence)
  const isEmoji = icon.length < 5;

  if (isEmoji) {
    return <span className={className}>{icon}</span>;
  }

  // Otherwise, render as an image
  return (
    <img 
      src={icon} 
      alt="icon"
      className={`${className} object-contain`}
      style={{ width: size, height: size }}
    />
  );
};

export default Icon;
