import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Post from '../components/Post';

const IndexPage = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <section className="grid md:grid-cols-3 grid-cols-1 md:justify-items-end pb-10 border-cgw-medium border-b-2 mb-10">
        <section className="md:col-start-1 md:col-span-2 w-full">
          <span>
            <h1 className="text-2xl md:text-3xl text-gray-700 font-bold mb-1">Hi 👋 I&apos;m, Max</h1>
            <p className="mb-0">I&apos;m a fullstack developer.</p>
            <p>This blog is primarily for myself, like a diary documenting my various escapades.</p>
          </span>
        </section>
        <section className="md:col-start-3 col-span-1 row-start-1 mb-5">
          <StaticImage class="w-3/12 md:w-32" src="../images/profile_image.png" alt="The man himself!" />
        </section>
      </section>
      <div className="grid gap-20 md:grid-cols-2 grid-cols-1">
        {blogPosts.map(({ node }) => (
          <Post key={node.id} props={node} />
        ))}
        <span className="mgBtm__24" />
      </div>
    </Layout>
  );
};
export default IndexPage;
export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost {
    edges {
      node {
        body {
          raw
        }
        id
        slug
        title
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
