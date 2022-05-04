import React from 'react';
import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import Post from '../components/Post';

export const query = graphql`
    query SITE_INDEX_QUERY {
        site {
            siteMetadata {
               title
               description
            }
        }
        allMdx(
            sort: {fields: [frontmatter___date], order: DESC},
            filter: {frontmatter: {published: {eq: true}}}
        ){
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date
                }
                fields {
                    slug
                }
            }
        }
    }
`;

const IndexPage = ({ data }) =>
// const blogPosts = data.allContentfulBlogPost.edges;

  (
    <Layout>
      <SEO title="Home" />
      <section className="grid md:grid-cols-3 grid-cols-1 md:justify-items-end pb-10 border-cgw-medium border-b-2 mb-10">
        <section className="md:col-start-1 md:col-span-2 w-full">
          <span>
            <h1 className="text-2xl md:text-3xl text-gray-700 font-bold mb-1">Hi 👋 I&apos;m, Max</h1>
            <p className="mb-0">I&apos;m a fullstack developer.</p>
            <p>This blog is primarly for myself, like a diary documenting my various escapades.</p>
          </span>
        </section>
        <section className="md:col-start-3 col-span-1 row-start-1 mb-5">
          <StaticImage class="w-3/12 md:w-32" src="../images/profile_image.png" alt="The man himself!" />
        </section>
      </section>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.description}</p>
      <div>
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
          <div>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
            </Link>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
export default IndexPage;
