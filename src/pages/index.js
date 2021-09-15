import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <Seo title="Home" keywords={['gatsby', 'blog', 'react']}/>
      <h1>Hi</h1>
      <p>
        <Link to="/blogposts">View all posts</Link> <br />
      </p>
    </Layout>
  )
}

export default IndexPage


// export const query = graphql`
//   query BlogPostsPageQuery {
//   allContentfulBlogPost {
//     edges {
//       node {
//         publishedDate
//       }
//     }
//   }
// }
// `;