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
  const Ul = ({ children }) => <ul >{children}</ul>
  const Ol = ({ children }) => <ol class='list-roman'>{children}</ol>
  const BlockQuote = ({ children }) => <blockquote class='border-gray-300 rounded	border-l-8 bg-gray-100 p-3 w-auto inline-block'>{children}</blockquote>
  const Img = ({ children }) => <img src={children}></img>
  const Li = ({ children }) => <li class='text-green-600'>{children}</li>

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
    [BLOCKS.LIST_ITEM]: (node, children) => {
      console.log(node)
      return (<li class='text-color-orange-600'>{node.content[0].content[0].value}</li>)
    },
    [BLOCKS.UL_LIST]: (node, children) => <Ul className='list-roman list-inside'>{children}</Ul>,

    // [BLOCKS.OL_LIST]: (node, children) => {
    //   // console.log(node)
    //   return(
    //     <Ol>
    //       {children}
    //     </Ol>
    //   )
    // },
    [BLOCKS.QUOTE]: (node, children) => <BlockQuote>{children}</BlockQuote>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <img src={node.data.target.fixed.src}/>
      );
    },

  },
}

  const { title, body, image, publishedDate, excerpt } = data.contentfulBlogPost;
  console.log(renderRichText(body))
  return (
    <Layout>
      <SEO title={title} />
      <article class='px-9'>
        <section>
        <img alt={title} width='700' class='' src={image.file.url} />
          <section class="flex flex-col justify-center	items-left">
            <h1 class="font-bold text-4xl py-5">{title}</h1>
            <p class='text-xl text-gray-600 font-semibold mb-6'>{excerpt.excerpt}</p>
          </section>
          <section class='flex border-t border-b border-cgw-medium py-5 mb-4'>
            <p class='text-gray-500 mr-1 text-sm'>Published on</p>
            <p class='text-gray-600 text-sm font-semibold'>{publishedDate}</p>
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