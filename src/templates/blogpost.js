import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
const BlogPost = ({ data }) => {
  const { title, body, image } = data.contentfulBlogPost;
  // const tagsArray = tags.split(' ');
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        <img alt={title} src={image.file.url} />
        <div className="tags">
          {/* {tagsArray.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))} */}
        </div>
        <p className="body-text">{body.body}</p>
        <Link to="/blogposts">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
    query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      image {
        file {
            url
          }
      }
      body {
        raw
      }
    }
  }

`;