import React from 'react';
import { graphql, Link } from 'gatsby';
import { motion } from 'framer-motion';

import { MDXRenderer } from 'gatsby-plugin-mdx';
// import SEO from '../components/seo';
import Layout from '../components/layout';
import NavLink from '../components/Nav/NavLink';

export const query = graphql`
    query PostsByID($id: String!) {
        mdx(
            id: { eq: $id }
        ){
            body
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
            }
        }
    }
`;


const BlogPost = ({ data }) => {
  const { frontmatter, body } = data.mdx;
  return (
    <Layout>
      {/*<SEO title={title} />*/}
      <article className="px-9">
        {/*<section>*/}
        {/*  /!*<img alt={title} width="700" className="" src={image.file.url} />*!/*/}
        {/*  <section className="flex flex-col justify-center items-left">*/}
        {/*    <h1 className="font-bold text-4xl py-5">{title}</h1>*/}
        {/*    <p className="text-xl text-gray-600 font-semibold mb-6">{excerpt.excerpt}</p>*/}
        {/*  </section>*/}
        {/*  <section className="flex border-t border-b border-cgw-medium py-5 mb-4">*/}
        {/*    <p className="text-gray-500 mr-1 text-sm">Published on</p>*/}
        {/*    <p className="text-gray-600 text-sm font-semibold">{publishedDate}</p>*/}
        {/*  </section>*/}
        {/*</section>*/}
        <section className="flex flex-col justify-center items-left">
          {/* @TODO: Add blog post image here */}
          <h1 className="font-bold text-4xl py-5">{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <section className="flex flex-col border-t border-b border-cgw-medium py-5 mb-4">
            <MDXRenderer>{body}</MDXRenderer>
          </section>
        </section>
        {/* @TODO: I can probably remove this <p className="body-text">{body.body}</p> */}
        <NavLink text="Back to Home" destination="/" />
        <NavLink text="View more posts" destination="/blogposts" />
        <Link to="/">
          <motion.button
            whileHover={{
              scale: 1.1,
              originX: 0,
              boxShadow: '10px 10px 0 rgba(213, 208, 205, 1)',
              transition: { type: 'spring', stiffness: 300, duration: 0.2 },
            }}
            class="inline-block bg-cgw-medium rounded-lg px-3 py-1 text-sm font-semibold text-warmlight mr-2 mb-2 text-shadow"
          >
            Back to Home
          </motion.button>
        </Link>
      </article>
    </Layout>
  );
};

export default BlogPost;
