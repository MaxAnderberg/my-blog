import React from 'react';
import { Link, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { CopyBlock, atomOneDark } from 'react-code-blocks';
import { motion } from 'framer-motion';

import SEO from '../components/seo';
import Layout from '../components/layout';
import NavLink from '../components/Nav/NavLink';

const BlogPost = ({ data }) => {
  const Text = ({ children }) => <p class="text-base my-5 leading-relaxed mt-0">{children}</p>;
  const H1 = ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>;
  const H2 = ({ children }) => <h2 className="text-green-500">{children}</h2>;
  const H3 = ({ children }) => <h3 className="text-red-500">{children}</h3>;
  const BlockQuote = ({ children }) => <blockquote className="border-gray-300 rounded border-l-8 bg-gray-100 p-3 mt-0 w-auto inline-block">{children}</blockquote>;
  // const H3 = ({ children }) => <h3 className="text-red-500">{children}</h3>;

  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => (
        <CopyBlock
          text={text}
          language="javascript"
          showLineNumbers
          startingLineNumber={1}
          theme={atomOneDark}
          codeBlock
        />
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
      [BLOCKS.QUOTE]: (node, children) => <BlockQuote>{children}</BlockQuote>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const imageID = node.data.target.sys.id;
        const {
          file: { url },
          title,
        } = data.contentfulBlogPost.body.references.find(({ contentful_id: id }) => id === imageID);
        return (
          <img className="border-2" src={url} alt={title} />
        );
      },
    },
  };

  const {
    title, body, image, publishedDate, excerpt,
  } = data.contentfulBlogPost;
  return (
    <Layout>
      <SEO title={title} />
      <article className="px-9">
        <section>
          <img alt={title} width="700" className="" src={image.file.url} />
          <section className="flex flex-col justify-center items-left">
            <h1 className="font-bold text-4xl py-5">{title}</h1>
            <p className="text-xl text-gray-600 font-semibold mb-6">{excerpt.excerpt}</p>
          </section>
          <section className="flex border-t border-b border-cgw-medium py-5 mb-4">
            <p className="text-gray-500 mr-1 text-sm">Published on</p>
            <p className="text-gray-600 text-sm font-semibold">{publishedDate}</p>
          </section>
        </section>
        <section className="flex ">
          <section className="font-bold text-lg">
            {renderRichText(body, options)}
          </section>
        </section>
        <p className="body-text">{body.body}</p>
        <NavLink text="Back to Home" destination="/" />
        <NavLink text="View more posts" destination="/blogposts" />
        <Link to='/'>
          <motion.button
            whileHover={{
              scale: 1.1,
              originX: 0,
              boxShadow: '10px 10px 0 rgba(213, 208, 205, 1)',
              transition: { type: 'spring', stiffness: 300, duration: 0.2 },
            }}
            class="inline-block bg-cgw-medium rounded-lg px-3 py-1 text-sm font-semibold text-warmlight mr-2 mb-2 text-shadow">
                Back to Home
          </motion.button>
        </Link>
      </article>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
    query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      excerpt {
        excerpt
      }
      publishedDate(formatString: "MMM Do, YYYY")
      image {
        file {
          url
        }
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            title
            file {
              url
            }
            fixed(width: 600){
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
