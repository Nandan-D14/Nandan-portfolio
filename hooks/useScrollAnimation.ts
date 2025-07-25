"use client";

import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-10% 0px -10% 0px" 
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  };

  return { ref, isInView, variants };
}

export function useStaggerAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-10% 0px -10% 0px" 
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  };

  return { ref, isInView, containerVariants, itemVariants };
}
