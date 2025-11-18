"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed bottom-4 left-4 z-50 pointer-events-auto"
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-neutral-900/80 backdrop-blur-md border border-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <span className="text-xs text-gray-400 font-medium">Visitors:</span>
        <img
          src="https://hits.sh/github.com/Nandan-D14/Nandan-portfolio.svg?style=flat&label=&color=3b82f6&labelColor=000000"
          alt="Visitor Count"
          className="h-4"
        />
      </div>
    </motion.div>
  );
};

export default VisitorCounter;
