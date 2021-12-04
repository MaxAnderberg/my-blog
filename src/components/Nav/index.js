import React from 'react';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import './Nav.css';
import { motion } from 'framer-motion';
import NavLink from './NavLink';
import styled from 'styled-components'
import { Linkedin } from '@styled-icons/bootstrap/Linkedin'
import { Github } from '@styled-icons/bootstrap/Github';
import { BriefcaseFill } from '@styled-icons/bootstrap/BriefcaseFill';

const index = () => {

  const GrayGithub = styled(Github)`
    color: #918d8a;
    transition: all 0.5s;
    &:hover {
      color:#231b15;
    }
  `
  const GrayLinkedin = styled(Linkedin)`
    color: #918d8a;
    transition: all 0.5s;
    &:hover {
      color:#231b15;
    }
  `
  const GrayBriefcaseFill = styled(BriefcaseFill)`
    color: #918d8a;
    transition: all 0.5s;
    &:hover {
      color:#231b15;
    }
  `


  return (
    <nav class="pr-5 pt-5 pl-5 xl:mx-32">
      <section class="font-monoton text-3xl mb-8  pl-2">
        <Link to='/'><p class='text-warmlight'>&lt;max/&gt;</p></Link>
      </section>
      <section class='font-nunito flex flex-row justify-between h-8 items-end'>
        <section class='flex flex-row uppercase '>
          <NavLink text='Home' destination='/' />
          <NavLink text='About' destination='/about' />
          <NavLink text='Posts' destination='/posts' />
        </section>
        <section class='flex flex-row'>
          <motion.a
            href='https://github.com/MaxAnderberg'
            target='_blank'
            class='mx-1 py-1 cursor-pointer'
            whileHover={{ translateY: -2 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            <GrayGithub width='25' />
          </motion.a>
          <motion.a
            href='https://linkedin.com/in/maxanderberg'
            target='_blank'
            class='mx-1 py-1 cursor-pointer'
            whileHover={{ translateY: -2 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            <GrayLinkedin width='25' class='' />
          </motion.a>
          <motion.a class='mx-1 py-1 cursor-pointer'
            href='https://MaxAnderberg.se'
            target='_blank'
            whileHover={{ translateY: -2 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            <GrayBriefcaseFill width='25' />
          </motion.a >
        </section>
      </section>
    </nav>
  )
}

export default index
