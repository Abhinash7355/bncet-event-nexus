
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollPrompt = () => {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 1.5, 
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1
      }}
    >
      <span className="text-sm font-medium mb-2">Scroll to explore</span>
      <ChevronDown className="animate-bounce" />
    </motion.div>
  );
};

export default ScrollPrompt;
