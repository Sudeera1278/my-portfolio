"use client";

import React, { ReactNode } from 'react';
import './GlitchText.css';

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
}

export default function GlitchText({
  children,
  className = '',
  speed = 1,
  enableShadows = false,
  enableOnHover = false,
}: GlitchTextProps) {
  const containerClasses = [
    'glitch-text-container',
    className,
    enableOnHover ? 'glitch-on-hover' : '',
  ].filter(Boolean).join(' ');

  const textClasses = [
    'glitch-text',
    enableShadows ? 'has-shadows' : ''
  ].filter(Boolean).join(' ');

  const animationStyle = {
    '--glitch-speed': `${speed}s`,
  } as React.CSSProperties;

  return (
    <div className={containerClasses} style={animationStyle}>
      <div className={textClasses} data-text={children}>
        {children}
      </div>
    </div>
  );
}
