import React from 'react';
import { Link } from "gatsby";
import './Nav.css';
import { motion } from 'framer-motion';

const index = () => {
  const active = `font-extrabold`
  return (
    <nav class="text-left pr-5 pt-5 pl-5 xl:mx-32">
      <section class="font-bold text-2xl mb-8 ">
        <Link to='/'>&lt;max/&gt;</Link>
      </section>
      <section class='uppercase'>
        <Link
          className="text-sm font-semibold mr-1 no-underline text-grey-darkest pr-2"
          activeClassName={active}
          to="/"
        >
          <motion.p class='inline-block tracking-wider	' 
          whileHover={{translateY:-2, color:'blue'}}
          transition={{ type:'spring', stiffness:500 }}
          >
            Home
          </motion.p>
        </Link>
        <Link className="text-sm font-semibold mr-1 no-underline text-grey-darkest px-2 "
        activeClassName={active}
        to="/about">
          <motion.p class='inline-block tracking-wider	' 
          whileHover={{translateY:-2, color:'blue'}}
          transition={{ type:'spring', stiffness:500}}
          default={{duration:2}}
          >
            About
          </motion.p>
        </Link>
      </section>
    </nav>
  )
}

export default index
