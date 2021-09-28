import React from 'react'
import { Link } from "gatsby";
import { motion } from 'framer-motion';

const index = ({ text, destination }) => {
  const active = `font-extrabold`
  return (
    <Link className="text-sm font-semibold mr-1 no-underline text-grey-darkest px-2 "
    activeClassName={active}
    to={destination}>
      <motion.p class='inline-block tracking-wider mb-0' 
      whileHover={{translateY:-2, color:'blue'}}
      transition={{ type:'spring', stiffness:500}}
      default={{duration:2}}
      >
        {text}
      </motion.p>
    </Link>
  )
}

export default index
