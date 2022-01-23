import React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout';
import SpinningSun from '../components/Animated/SpinningSun/SpinningSun';
import SpinningMoon from '../components/Animated/SpinningMoon/SpinningMoon';

const about = () => (
  <Layout>
    <Seo title="About" />
    <main>
      <h1>
        Hey There
        <SpinningSun className="" />
        <SpinningMoon className="" />
      </h1>
      <p>
        My name is Max Anderberg and I&apos;m a fullstack JavaScript developer.
        This blog is primarly for myself, like a diary.
        It gives me an oppertunity to maintain sideprojects
        which allows me to pursue and research new technologies,
        refining old concepts etc.
      </p>
      <p>
        There are some great blogging options out there. However,
        I wanted to build my own blog so I can tailor it to my own needs.
        That&apos;s why I decided to build my own blog using Gatsby and Contentful as my CMS.
        The initial state of this blog is &apos;simple&apos; but I believe in the power
        of just creating something, and then let it evolve organically as I need it.
        Rather than spending days on thinking about how to build, and design this blog.
        <br />
        Two main goals
        <ul className="list-square">
          <li>Have fun</li>
          <li>Create a digital archive for myself</li>
        </ul>
      </p>
      <p>Also you can check out my portfolio over at maxanderberg.se</p>
      <p>If you interested in how this blog is built you can check out </p>

    </main>
  </Layout>
);

export default about;
