import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from '../components/Post';

const IndexPage = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  console.log(blogPosts);
  return (
    <Layout>
      <SEO title="Home" />
      <section class="flex flex-row space-x-96 pt-10 pb-10 border-b-2 mb-10">
        <section class="flex-grow">
          <h1 class="text-3xl text-gray-700 font-semibold">Max Anderberg</h1>
          <p>Welcome to my rudimentary blog. Mainly write about code stuff.</p>
        </section>
        <StaticImage class="w-3/12 flex-grow-0" src="../images/profile_image.png" alt="The man himself!" />
      </section >
      <div class="grid gap-20 lg:grid-cols-2 md:grid md:grid-cols-1">
        {blogPosts.map(({ node }) => (
            <Post key={node.id} props={node}/>
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