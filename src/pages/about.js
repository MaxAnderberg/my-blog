import React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";

const about = () => {
  return (
    <Layout>
      <Seo title="About" />
      <h1>Hi there!</h1>
      <p>
        Intro to me 
      </p>
      <h1>What this blog is</h1>
      <h1>Stack I used to build it</h1>
  </Layout>
  )
}

export default about;