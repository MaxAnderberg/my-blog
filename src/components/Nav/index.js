import React from 'react';
import { Link } from 'gatsby';
import './Nav.css';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Github } from '@styled-icons/bootstrap/Github';
import { BriefcaseFill } from '@styled-icons/bootstrap/BriefcaseFill';
import NavLink from './NavLink';

const index = () => {
  const GrayGithub = styled(Github)`
    color: #918d8a;
    transition: all 0.5s;
    &:hover {
      color:#231b15;
    }ß
  `;
  const GrayLinkedin = styled(Linkedin)`
    color: #918d8a;
    transition: all 0.5s;
    &:hover {
      color:#231b15;
    }
  `;
  const GrayBriefcaseFill = styled(BriefcaseFill)`
    color: #918d8a;
    transition: all 0.5s;
    &:hover {
      color:#231b15;
    }
  `;

  return (
    <nav className="pr-5 pt-5 pl-5 xl:mx-32">
      <section className="font-monoton text-3xl pl-2">
        <Link to="/"><p className="text-warmlight">&lt;max/&gt;</p></Link>
      </section>
      <section className="font-nunito flex flex-row justify-between h-8 items-end">
        <section className="flex flex-row uppercase ">
          <NavLink text="Home" destination="/" />
          <NavLink text="About" destination="/about" />
          <NavLink text="Posts" destination="/posts" />
        </section>
        <section className="flex flex-row">
          <motion.a
            href="https://github.com/MaxAnderberg"
            target="_blank"
            class="mx-1 py-1 cursor-pointer"
            whileHover={{ translateY: -2 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            <GrayGithub width="25" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/maxanderberg"
            target="_blank"
            class="mx-1 py-1 cursor-pointer"
            whileHover={{ translateY: -2 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            <GrayLinkedin width="25" />
          </motion.a>
          <motion.a
            class="mx-1 py-1 cursor-pointer"
            href="https://MaxAnderberg.se"
            target="_blank"
            whileHover={{ translateY: -2 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            <GrayBriefcaseFill width="25" />
          </motion.a>
        </section>
      </section>
    </nav>
  );
};

export default index;
