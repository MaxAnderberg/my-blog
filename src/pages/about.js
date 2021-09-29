import React from 'react';
import styled from 'styled-components';
import { Gatsby } from '@styled-icons/simple-icons/Gatsby';
import { Tailwindcss } from '@styled-icons/simple-icons/Tailwindcss';
import { Contentful } from '@styled-icons/simple-icons/Contentful';
import { Styledcomponents } from '@styled-icons/simple-icons/Styledcomponents';
import { Javascript } from '@styled-icons/boxicons-logos/Javascript';
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo';
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs';
import Seo from '../components/seo';
import Layout from '../components/layout';

const about = () => (
  <Layout>
    <Seo title="About" />
    <main>
      <h1>Hey There (Wavy Hand)</h1>
      <p>
        My name is Max Anderberg and I'm a fullstack JavaScript developer.
        <br />
        <br />
        This blog is primarly for myself, like a diary. It gives me an oppertunity to maintain sideprojects which allows me to pursue and research new technologies,
        refining old concepts etc.
      </p>

      <section>
        <h1>Blog's Tech Stack</h1>

        <section className="flex justify-evenly items-start">
          <Contentful width="50" />
          <Tailwindcss width="50" />
          <Gatsby width="50" />
          <Styledcomponents width="50" />
          <Javascript width="50" />
          <ReactLogo width="50" />
          <Nodejs width="50" />
        </section>
        <p>Interested in looking at the source code? Check it out here on GitHub</p>
      </section>

      <section>
        <h1>Other Work</h1>
        <p>Interested in some of my other works? Check out my portfolio</p>
      </section>
    </main>

  </Layout>
);

export default about;
