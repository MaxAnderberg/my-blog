import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import Layout from '../components/layout';
import Post from '../components/Post';

const realTalk = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  const howToPosts = blogPosts.filter((post) => post.node.label === 'how-to');
  return (
    <Layout>
      <Seo title="About" />
      <main>
        <section className="flex justify-between">
          <h1>
            Real talk
          </h1>
        </section>
        {/* eslint-disable-next-line no-tabs */}
        <div className="grid gap-20 grid-cols-1 justify-center justify-items-center">
          {howToPosts.map(({ node }) => (
            <Post key={node.id} props={node} />
          ))}
          <span className="mgBtm__24" />
        </div>
      </main>
    </Layout>
  );
};

export default realTalk;
export const query = graphql`
  query PostsPageQuery {
    allContentfulBlogPost {
    edges {
      node {
        body {
          raw
        }
        id
        slug
        title
        label
        publishedDate(formatString: "YYYY-MM-DD")
        image {
          fluid {
            src
          }
        }
      }
    }
  }
}
`;
