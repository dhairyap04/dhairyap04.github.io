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
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ 
        width: size, 
        height: size,
        backgroundColor: 'transparent',
        mixBlendMode: 'luminosity', // This helps icons blend better with dark themes
      }}
    >
      <img 
        src={icon} 
        alt="icon"
        className="w-full h-full object-contain filter brightness-0 invert" // This will make the icons white
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      />
    </div>
  );
};

export default Icon;
