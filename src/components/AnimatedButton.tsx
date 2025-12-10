import React from 'react';
import Link from 'next/link';
import './AnimatedButton.css';

interface AnimatedButtonProps {
  href?: string;
  text1: string;
  text2: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ href, text1, text2, type, onClick }) => {
  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="animated-btn">
        <span className="btn-text-one">{text1}</span>
        <span className="btn-text-two">{text2}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="animated-btn">
      <span className="btn-text-one">{text1}</span>
      <span className="btn-text-two">{text2}</span>
    </button>
  );
};

export default AnimatedButton;
