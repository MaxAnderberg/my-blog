import React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout';
import SpinningSun from '../components/Animated/SpinningSun/SpinningSun';
import SpinningMoon from '../components/Animated/SpinningMoon/SpinningMoon';

const about = () => (
  <Layout>
    <Seo title="About" />
    <main>
      <section>
        <h1>
          Hi
        </h1>
        <SpinningSun className="inset-0" />
        <SpinningMoon className="inset-0" />
      </section>

      <section>
        <p>
          This blog is primarily for myself, like a diary.
          It gives me an opportunity to maintain, and research side projects.
        </p>
        <p>
          There are some great blogging options out there. However,
          I wanted to build my own blog so I can tailor it to my own needs
        </p>
        <p>
          This blog is built using Gatsby, tailwind, and Contentful as my headless CMS.
          The initial state of this blog is &apos;simple&apos; but I believe in the power
          of just creating something, and then let it evolve organically as I need it.
          Rather than spending days on thinking about how to build, and design this blog.
        </p>
      </section>

      <section>
        <h2>Other</h2>
        <p>Also you can check out my portfolio over at maxanderberg.se</p>
        <p>If you interested in how this blog is built you can check out </p>
      </section>

    </main>
  </Layout>
);

export default about;
