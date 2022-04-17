import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import Layout from '../components/layout';
import Post from "../components/Post";

const posts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  console.log(blogPosts);
  return (
    <Layout>
      <Seo title="About" />
      <main>
        <section className="flex justify-between">
          <h1>
            Blog posts
          </h1>
          <div className="flex justify-center mt-1">
            <div className="mb-3 xl:w-96">
              <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <span
                  className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                  id="basic-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* eslint-disable-next-line no-tabs */}
        <div className="grid gap-20 grid-cols-1 justify-center justify-items-center">
          {blogPosts.map(({ node }) => (
            <Post key={node.id} props={node} />
          ))}
          <span className="mgBtm__24" />
        </div>
      </main>
    </Layout>
  );
};

export default posts;
export const query = graphql`
  query PostsPageQuery {
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
