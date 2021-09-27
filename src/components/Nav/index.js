import React from 'react';
import { Link } from "gatsby";
import './Nav.css';
import { motion } from 'framer-motion';
import NavLink from './NavLink';

const index = () => {
  const active = `font-extrabold`
  return (
    <nav class="text-left pr-5 pt-5 pl-5 xl:mx-32">
      <section class="font-bold text-2xl mb-8 ">
        <Link to='/'>&lt;max/&gt;</Link>
      </section>
      <section class='uppercase'>
        <NavLink text='Home' destination='/' />
        <NavLink text='About' destination='/about' />
      </section>
    </nav>
  )
}

export default index
