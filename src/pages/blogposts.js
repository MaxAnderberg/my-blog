import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from '../components/Post';

const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  console.log(blogPosts);
  return (
    <Layout>
      <SEO title="Blog posts" />
      <h1 class="text-3xl text-gray-700 font-semibold	pb-20">Here's a list of all blogposts</h1>
      {/* <Link to="/">Go back to the homepage</Link> */}
      <div class="grid grid-cols-2">
        {blogPosts.map(({ node }) => (
            <Post key={node.id} props={node}/>
        ))}
        <span className="mgBtm__24" />
      </div>
    </Layout>
  );
};
export default BlogPosts;
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