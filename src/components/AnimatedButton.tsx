import React from 'react';
import Link from 'next/link';
import './AnimatedButton.css';

interface AnimatedButtonProps {
  href?: string;
  text1: string;
  text2: string; // Kept for prop compatibility, but not used in the new design
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ href, text1, type, onClick }) => {
  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="animated-btn">
        {text1}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="animated-btn">
      {text1}
    </button>
  );
};

export default AnimatedButton;
