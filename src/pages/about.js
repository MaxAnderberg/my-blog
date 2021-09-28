import React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from 'styled-components'
import { Gatsby } from '@styled-icons/simple-icons/Gatsby'
import { Tailwindcss } from '@styled-icons/simple-icons/Tailwindcss';
import { Contentful } from '@styled-icons/simple-icons/Contentful';
import { Styledcomponents } from '@styled-icons/simple-icons/Styledcomponents';
import { Javascript } from '@styled-icons/boxicons-logos/Javascript';
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo';
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs';


const about = () => {
  return (
    <Layout>
      <Seo title="About" />
      <h1>Hey There (Wavy Hand)</h1>
      <p>
        My name is Max Anderberg and I'm a fullstack JavaScript developer. 
        <br/>
        <br/>
        This blog is primarly for myself, like a diary. It gives me an oppertunity to maintain sideprojects which allows me to pursue and research new technologies,
        refining old concepts etc. 
      </p>
      <p>Interested in some of my other works? Check out my portfolio</p>
      <h1>Blog's Tech Stack</h1>
      <p>
        <Contentful width='50'/>
        <Tailwindcss width='50'/>
        <Gatsby width='50'/>
        <Styledcomponents width='50'/>
        <Javascript width='50'/>
        <ReactLogo width='50'/>
        <Nodejs width='50'/>
      </p>

  </Layout>
  )
}

export default about;