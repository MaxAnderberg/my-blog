import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { renderRichText } from "gatsby-source-contentful/rich-text"; 
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { CopyBlock, atomOneDark } from "react-code-blocks";


const BlogPost = ({ data }) => {


  const Text = ({ children }) => <p class='text-base my-5 leading-relaxed'>{children}</p>
  const H1 = ({ children }) => <h1 class='text-4xl font-bold'>{children}</h1>
  const H2 = ({ children }) => <h2 class='text-green-500'>{children}</h2>
  const H3 = ({ children }) => <h3 class='text-red-500'>{children}</h3>
  const H4 = ({ children }) => <h4 class='text-blue-500'>{children}</h4>
  const Ul = ({ children }) => <ul class='list-disc'>{children}</ul>
  const Ol = ({ children }) => <ol class='list-decimal'>{children}</ol>
  const BlockQuote = ({ children }) => <blockquote class='border-gray-300 rounded-r	border-l-8 bg-gray-100 p-3 w-auto inline-block'>{children}</blockquote>
  const Img = ({ children }) => <img src={children}></img>

const options = {
  renderMark: {
    [MARKS.CODE]: text => <CopyBlock
        text={text}
        language='javascript'
        showLineNumbers={true}
        startingLineNumber={1}
        theme={atomOneDark}
        codeBlock
      />,
  },

  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
    [BLOCKS.UL_LIST]: (node, children) => <Ul>{children}</Ul>,
    [BLOCKS.OL_LIST]: (node, children) => <Ol>{children}</Ol>,
    [BLOCKS.QUOTE]: (node, children) => <BlockQuote>{children}</BlockQuote>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <img src={node.data.target.fixed.src}/>
      );
    },
  },
}

  const { title, body, image } = data.contentfulBlogPost;

  return (
    <Layout>
      <SEO title={title} />
      <article class='px-9'>
        <section class="">
        <img alt={title} class='pr-20' src={image.file.url} />

          <section class="flex flex-col justify-center	items-left">
            <h1 class="font-bold text-4xl py-5">{title}</h1>
          </section>
        </section>
        <section class="flex ">
          <section class="font-bold text-lg">
            {renderRichText(body, options)}
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
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
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