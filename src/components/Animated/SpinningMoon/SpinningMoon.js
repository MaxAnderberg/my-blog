import React from 'react';
import { motion } from 'framer-motion';

const SpinningMoon = () => {
  return (
    <motion.div
      style={{
        marginBottom: '-20px',
        marginRight: '-45px',
        paddingBottom: '20px',
        paddingRight: '45px',
        display: 'inline-block',
      }}
      // initial={{ opacity: 0 }}
      // exit={{ opacity: 1 }}
      animate={{
        rotate: 360,
        opacity: [0.5, 0, 0, 1, 0.5],
      }}
      transition={{
        repeat: Infinity,
        ease: 'easeInOut',
        type: 'tween',
        duration: '6',
      }}
    >
      🌕
    </motion.div>
  );
};

export default SpinningMoon;
