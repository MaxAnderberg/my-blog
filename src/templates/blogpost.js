import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { renderRichText } from "gatsby-source-contentful/rich-text"

const BlogPost = ({ data }) => {
  
  const { title, body, image } = data.contentfulBlogPost;
  console.log(renderRichText(body))

  return (
    <Layout>
      <SEO title={title} />
      <article className="blogpost">
        <section class="grid grid-cols-2">
          <section class="flex flex-col justify-center	items-center">
            <h1 class="text-red-200 font-bold text-4xl">{title}</h1>
          </section>
        <img alt={title} src={image.file.url} />
        </section>
        <section class="flex justify-center items-center">
          <section class="font-bold text-lg">
            {renderRichText(body)}
          </section>
        </section>
        <p className="body-text">{body.body}</p>
        <Link to="/blogposts">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </article>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
    query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
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