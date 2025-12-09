"use client";

import React, { useState, useEffect, useRef, Children, cloneElement, isValidElement } from 'react';
import { gsap } from 'gsap';
import './CardSwap.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`card-swap-item ${className}`}>{children}</div>;
};

interface CardSwapProps {
  children: React.ReactNode;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
}

const CardSwap: React.FC<CardSwapProps> = ({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 3000,
  pauseOnHover = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  const cards = Children.toArray(children);
  const numCards = cards.length;

  const animateCards = () => {
    if (!containerRef.current) return;
    const cardElements = Array.from(containerRef.current.children) as HTMLElement[];

    cardElements.forEach((card, index) => {
      const relativeIndex = (index - currentIndex + numCards) % numCards;

      if (relativeIndex === 0) {
        // Front card
        gsap.to(card, {
          y: 0,
          scale: 1,
          zIndex: numCards,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
        });
      } else if (relativeIndex === numCards - 1) {
        // Card moving to the back
        gsap.to(card, {
          y: verticalDistance,
          scale: 0.8,
          zIndex: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in',
        });
      } else {
        // Stacked cards at the back
        gsap.to(card, {
          y: -relativeIndex * cardDistance,
          scale: 1 - relativeIndex * 0.05,
          zIndex: numCards - relativeIndex,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
        });
      }
    });
  };

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isHoveredRef.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % numCards);
      }
    }, delay);
  };

  useEffect(() => {
    animateCards();
  }, [currentIndex, cards.length]); // Rerun animation when index or cards change

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [numCards, delay, pauseOnHover]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      isHoveredRef.current = true;
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      isHoveredRef.current = false;
    }
  };

  const handleCardClick = (index: number) => {
    const relativeIndex = (index - currentIndex + numCards) % numCards;
    if (relativeIndex !== 0) {
      setCurrentIndex(index);
      // Reset autoplay timer on manual interaction
      startAutoplay();
    }
  };
  
  return (
    <div
      className="card-swap-container"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child as React.ReactElement<any>, {
            onClick: () => handleCardClick(index),
          });
        }
        return child;
      })}
    </div>
  );
};

export default CardSwap;
