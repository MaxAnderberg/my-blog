import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={['gatsby', 'blog', 'react']}/>
    <h1>Hi</h1>

    <p>
      <Link to="/blogposts">View all posts</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
