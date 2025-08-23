"use client";

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextAnimationProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'slideUp' | 'fadeIn' | 'slideInLeft';
  delay?: number;
  duration?: number;
}

const animationVariants: Record<string, Variants> = {
  slideUp: {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  },
  fadeIn: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  },
  slideInLeft: {
    initial: {
      opacity: 0,
      x: -30,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  },
};

export const TextAnimation: React.FC<TextAnimationProps> = ({
  children,
  className,
  variant = 'slideUp',
  delay = 0,
  duration = 0.6,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
  once: true,
  margin: "-10% 0px",
});

  const variants = animationVariants[variant];

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Premium easing curve
      }}
    >
      {children}
    </motion.div>
  );
};