import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const index = ({ text, destination }) => (
  <Link
    className="text-sm font-semibold mr-1 no-underline px-2 text-lightgray "
    activeStyle={{ color: '#231b15', fontWeight: 800 }}
    to={destination}
  >
    <motion.p
      class="inline-block tracking-wider mb-0"
      whileHover={{ translateY: -2, color: '#231b15' }}
      transition={{ type: 'spring', stiffness: 500 }}
    >
      {text}
    </motion.p>
  </Link>
);

export default index;
